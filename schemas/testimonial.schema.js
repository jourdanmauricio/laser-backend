const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const message = Joi.string();
const stars = Joi.string();
const order = Joi.number().integer();

const createTestimonialSchema = Joi.object({
  name: name.required(),
  message: message.required(),
  stars: stars.required(),
  order: order.required(),
});

const updateTestimonialSchema = Joi.object({
  name,
  message,
  stars,
  order,
});

const getTestimonialSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createTestimonialSchema,
  updateTestimonialSchema,
  getTestimonialSchema,
};
