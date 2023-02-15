const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string();
const resume = Joi.string();
const content = Joi.string().allow('');
const image = Joi.string();
const alt_image = Joi.string();
const order = Joi.number();
const main = Joi.boolean();
const user_id = Joi.number();

const createPostSchema = Joi.object({
  title: title.required(),
  resume: resume.required(),
  content: content.required(),
  image: image.required(),
  alt_image: alt_image.required(),
  order,
  main: main.required(),
  user_id: user_id.required(),
});

const updatePostSchema = Joi.object({
  title,
  resume,
  content,
  image,
  alt_image,
  order,
  main,
  user_id,
});

const getPostSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPostSchema, updatePostSchema, getPostSchema };
