const axios = require('axios');
const express = require('express');
// const passport = require('passport');
// const { checkAdminRole } = require('./../middlewares/auth.handler');

const { config } = require('./../config/config');

const URL_REVALIDATE = `${config.apiFrontend}/revalidate`;
const CONFIG_REVALIDATE = {
  headers: {
    revalidate: config.revalidateToken,
  },
};

const SubsectionService = require('../services/subsection.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createSubsectionSchema,
  updateSubsectionSchema,
  getSubsectionSchema,
} = require('../schemas/subsection.schema');

const router = express.Router();
const subsectionService = new SubsectionService();

router.get('/', async (req, res, next) => {
  try {
    const posts = await subsectionService.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createSubsectionSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newPost = await subsectionService.create(body);

    await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);

    res.status(201).json(newPost);
  }
);

router.put(
  '/:id',
  validatorHandler(updateSubsectionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const subsection = await subsectionService.update(id, body);

      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);

      res.status(200).json(subsection);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getSubsectionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await subsectionService.delete(id));
      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
