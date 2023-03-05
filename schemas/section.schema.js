const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const title = Joi.string();
const show = Joi.boolean();
const page = Joi.string().allow('');
const type = Joi.string();

const createSectionSchema = Joi.object({
  name: name.required(),
  title: title.required(),
  show: show.required(),
  page,
  type: type.required(),
});

const updateSectionSchema = Joi.object({
  name,
  title,
  show,
  page,
  type,
});

const getSectionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createSectionSchema, updateSectionSchema, getSectionSchema };
