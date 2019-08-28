const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getPassword = require('../model/queries/getPassword');


exports.postLogin = (req, res, next) => {
  const userName = req.body.username;
  getPassword(userName)
    .then((pass) => {
      if (!pass.rows[0]) {
        throw Error('user not found');
      }
      return bycrpt.compare(req.body.password, pass.rows[0].password);
    })
    .then((authed) => {
      const token = jwt.sign({ username: userName }, process.env.SECRET);
      // console.log(jwt.verify(token, process.env.SECRET));
      res.cookie('login', token);
      // console.log(req.cookies.login);

      res.redirect('/');
    })
    .catch((err) => {
      console.log('sdfjlsdjflsd');
      if (err.message === 'user not found') { res.send('<p>not kfnhkn</p>'); }
    });


  // bycrpt.genSalt(10)
  //   .then((salt) => bycrpt.compare(req.body.password, salt))
  //   .then((hashed) => getPassword(userName)
  //     .then((pass) => {
  //       console.log(hashed)
  //       console.log(pass.rows[0].password);
  //     })
  //     .then((ress) => console.log(ress)).catch((err) => { console.log(err); }));
};
