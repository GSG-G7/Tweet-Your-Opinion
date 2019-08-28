const jwt = require('jsonwebtoken');
require('env2')('config.env');


exports.profile = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, rest) => {
    if (err) {
      res.redirect('/login');
    } else { res.render('profile', { cook: rest.username }); }
  });
};
