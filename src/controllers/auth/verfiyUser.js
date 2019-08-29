require('env2')('config.env');
const jwt = require('jsonwebtoken');

const verfiyTokenLoged = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, rest) => {
    if (err) {
      res.redirect('/login');
    } else next();
  });
};
const verfiyTokenUnLoged = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, rest) => {
    if (err) { next(); } else { res.redirect('/profile'); }
  });
};


module.exports = {
  verfiyTokenLoged,
  verfiyTokenUnLoged,
};
