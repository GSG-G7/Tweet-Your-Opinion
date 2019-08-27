const bycrpt = require('bcryptjs');
const { postSignUp } = require('../model/queries/postSignUp');

exports.postSignup = (req, res, next) => {
  bycrpt.genSalt(10)
    .then((salt) => bycrpt.hash(req.body.password, salt))
    .then((hash) => {
      console.log(hash);
      req.body.password = hash;
      postSignUp(req.body);
    })
    .then((r) => {
      res.redirect('/');
    });
};
