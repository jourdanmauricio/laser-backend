const axios = require('axios');

const express = require('express');
const passport = require('passport');
const { checkAdminRole } = require('./../middlewares/auth.handler');
const TestimonialService = require('./../services/testimonial.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { config } = require('./../config/config');

const {
  getTestimonialSchema,
  createTestimonialSchema,
  updateTestimonialSchema,
} = require('./../schemas/testimonial.schema');

const URL_REVALIDATE = `${config.apiFrontend}/revalidate`;
const CONFIG_REVALIDATE = {
  headers: {
    revalidate: config.revalidateToken,
  },
};

const router = express.Router();
const service = new TestimonialService();

router.get('/', async (req, res, next) => {
  try {
    const testimonials = await service.find();
    res.json(testimonials);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(createTestimonialSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTestimonial = await service.create(body);

      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);

      res.status(201).json(newTestimonial);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(updateTestimonialSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const testimonial = await service.update(id, body);

      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);

      res.status(200).json(testimonial);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getTestimonialSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const delId = await service.delete(id);

      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);

      res.status(200).json(delId);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
