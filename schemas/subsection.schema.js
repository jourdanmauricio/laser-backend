const Joi = require('joi');

const id = Joi.number().integer();
const image = Joi.string().allow('');
const alt_image = Joi.string().allow('');
const name = Joi.string();
const content = Joi.string();
const section_id = Joi.number().integer();

const createSubsectionSchema = Joi.object({
  image,
  alt_image,
  name: name.required(),
  content: content.required(),
  section_id: section_id.required(),
});

const updateSubsectionSchema = Joi.object({
  id,
  image,
  alt_image,
  name,
  content,
  section_id,
});

const getSubsectionSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createSubsectionSchema,
  updateSubsectionSchema,
  getSubsectionSchema,
};
