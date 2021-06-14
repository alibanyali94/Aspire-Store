const { Joi } = require('celebrate');

let createUserSchema = Joi.object().keys({
  name: Joi.string().pattern(new RegExp('^[a-z]')).min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const loginSchema = Joi.object().keys(
  {
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
  },

  { abortEarly: false }
);

module.exports = { createUserSchema, loginSchema };
