const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const getPassword = require('../model/queries/getPassword');
const { schema } = require('./validation/login');


exports.postLogin = (req, res, next) => {
  Joi.validate(req.body, schema, (err, value) => {
    if (err) {
      res.render('login', {
        error: err.details[0].message,
      });
    } else {
      const userName = req.body.username;
      getPassword(userName)
        .then((pass) => {
          if (!pass.rows[0]) {
            throw Error('user not found');
          }
          return bycrpt.compare(req.body.password, pass.rows[0].password);
        })
        .then((authed) => {
          const token = jwt.sign({
            username: userName,
          }, process.env.SECRET);
          res.cookie('login', token);

          res.redirect('/profile');
        })
        .catch((err) => {
          console.log('sdfjlsdjflsd');
          if (err.message === 'user not found') { res.send('<p>Go Home</p>'); }
        });


      bycrpt.genSalt(10)
        .then((salt) => bycrpt.compare(req.body.password, salt))
        .then((hashed) => getPassword(userName)
          .then((pass) => {
            console.log(hashed);
            console.log(pass.rows[0].password);
          })
          .then((ress) => console.log(ress)).catch((err) => { console.log(err); }));
    }
  });
};
