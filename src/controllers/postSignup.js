const bycrpt = require('bcryptjs');
const Joi = require('@hapi/joi');
const { postSignUp } = require('../model/queries/postSignUp');
const { schema } = require('./validation/signup');

exports.postSignup = (req, res, next) => {
  Joi.validate(req.body, schema, (err, value) => {
    if (err) {
      res.render('signup', {
        error: err.details[0].message,
      });
    } else {
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
    }
  });
};
