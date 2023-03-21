const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string();
const content = Joi.string().allow('');
const image = Joi.string();
const alt_image = Joi.string();
const order = Joi.number();

const createServiceSchema = Joi.object({
  title: title.required(),
  content: content.required(),
  image: image.required(),
  alt_image: alt_image.required(),
  order,
});

const updateServiceSchema = Joi.object({
  title,
  content,
  image,
  alt_image,
  order,
});

const getServiceSchema = Joi.object({
  id,
});

module.exports = { createServiceSchema, updateServiceSchema, getServiceSchema };
