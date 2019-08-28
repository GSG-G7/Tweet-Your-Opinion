const jwt = require('jsonwebtoken');
require('env2')('config.env');

exports.home = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, rest) => {
    if (err) {
      res.render('home', { cook: false });
    } else { res.render('home', { cook: rest.username }); }
  });
};
