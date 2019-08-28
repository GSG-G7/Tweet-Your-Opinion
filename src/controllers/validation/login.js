const Joi = require('@hapi/joi');

exports.schema = Joi.object().keys({
  username: Joi.string().alphanum().min(6).max(10)
    .required(),
  password: Joi.string().regex(/[a-zA-Z0-9]{8,}/).required(),
});
