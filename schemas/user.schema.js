const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

const updateUserSchema = Joi.object({
  role: role,
  password: password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updatePassUserSchema = Joi.object({
  id: id.required(),
  newPassword: password.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  updatePassUserSchema,
};
