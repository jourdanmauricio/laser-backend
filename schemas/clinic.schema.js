const Joi = require('joi');

const id = Joi.string();

const name = Joi.string().allow('');
const email = Joi.string().allow('');
const phone = Joi.string().allow('');
const main = Joi.boolean();
const state = Joi.string();
const city = Joi.string();
const cp = Joi.string();
const street = Joi.string();
const number = Joi.string();
const floor = Joi.string().allow('');
const apartment = Joi.string().allow('');
const order = Joi.number();
const days = Joi.string().allow('');
const observation = Joi.string().allow('');

const getClinicSchema = Joi.object({
  id: id.required(),
});

const createClinicSchema = Joi.object({
  name,
  email,
  phone,
  state: state.required(),
  city: city.required(),
  cp: cp.required(),
  street: street.required(),
  number: number.required(),
  floor,
  apartment,
  order: order.required(),
  main: main.required(),
  days,
  observation,
});

const updateClinicSchema = Joi.object({
  name,
  email,
  phone,
  state,
  city,
  cp,
  street,
  number,
  floor,
  apartment,
  order,
  main,
  days,
  observation,
});

module.exports = {
  getClinicSchema,
  createClinicSchema,
  updateClinicSchema,
};
