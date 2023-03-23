const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const value = Joi.string();

const getNoteSchema = Joi.object({
  id: id.required(),
});

const createNoteSchema = Joi.object({
  name: name.required(),
  value: value.required(),
});

const updateNoteSchema = Joi.object({
  name,
  value,
});

module.exports = {
  getNoteSchema,
  createNoteSchema,
  updateNoteSchema,
};
