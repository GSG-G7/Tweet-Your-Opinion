const Joi = require('@hapi/joi');

exports.schema = Joi.object().keys({
  username: Joi.string().alphanum().min(6).max(10)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(/[a-zA-Z0-9]{8,}/).required(),
  confirm_password: Joi.string().valid(Joi.ref('password')).required(),
  mobile_no: Joi.string().regex(/[1-9]{7,}/).required(),
  date_of_birth: Joi.string().regex(/[1-9]{2,4}/).required(),
});
