const axios = require('axios');
const express = require('express');
// const passport = require('passport');
// const { checkAdminRole } = require('./../middlewares/auth.handler');

const { config } = require('../config/config');

const URL_REVALIDATE = `${config.apiFrontend}/revalidate`;
const CONFIG_REVALIDATE = {
  headers: {
    revalidate: config.revalidateToken,
  },
};

const ServiceService = require('../services/service.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createServiceSchema,
  updateServiceSchema,
  getServiceSchema,
} = require('../schemas/service.schema');

const router = express.Router();
const serviceService = new ServiceService();

router.get('/', async (req, res, next) => {
  try {
    const services = await serviceService.find();
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createServiceSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newService = await serviceService.create(body);

    await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);
    res.status(201).json(newService);
  }
);

router.put(
  '/:id',
  validatorHandler(updateServiceSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const service = await serviceService.update(id, body);

      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);
      res.status(200).json(service);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getServiceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const delId = await serviceService.delete(id);
      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);
      console.log('delId', delId);
      res.status(200).json(delId);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
