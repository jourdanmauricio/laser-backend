const Joi = require('joi');

const id = Joi.number().integer();
const image = Joi.string().allow('');
const content = Joi.string();
const section_id = Joi.number().integer();

const createSubsectionSchema = Joi.object({
  image,
  content: content.required(),
  section_id: section_id.required(),
});

const updateSubsectionSchema = Joi.object({
  id,
  image,
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
