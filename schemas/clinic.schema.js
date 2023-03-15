const Joi = require('joi');

const id = Joi.string();

const name = Joi.string().allow('').allow(null);
const email = Joi.string().allow('').allow(null);
const phone = Joi.string().allow('').allow(null);
const main = Joi.boolean();
const state = Joi.string().allow('').allow(null);
const city = Joi.string().allow('').allow(null);
const cp = Joi.string().allow('').allow(null);
const street = Joi.string().allow('').allow(null);
const number = Joi.string().allow('').allow(null);
const floor = Joi.number().allow(null);
const apartment = Joi.string().allow('').allow(null);
const order = Joi.number();
const days = Joi.string().allow('').allow(null);
const observation = Joi.string().allow('').allow(null);

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
