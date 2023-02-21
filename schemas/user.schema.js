const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const name = Joi.string().allow(null);
const image = Joi.string().allow(null);
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  email: email.required(),
  name,
  image,
  password: password.required(),
  role: role.required(),
});

const updateUserSchema = Joi.object({
  name,
  image,
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
