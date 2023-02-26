const axios = require('axios');
const express = require('express');
// const passport = require('passport');
// const { checkAdminRole } = require('./../middlewares/auth.handler');

const { config } = require('./../config/config');
const ClinicService = require('../services/clinic.service');

const URL_REVALIDATE = `${config.apiFrontend}/revalidate`;
const CONFIG_REVALIDATE = {
  headers: {
    revalidate: config.revalidateToken,
  },
};

const validatorHandler = require('../middlewares/validator.handler');
const {
  createClinicSchema,
  updateClinicSchema,
  getClinicSchema,
} = require('../schemas/clinic.schema');

const router = express.Router();
const clinicService = new ClinicService();

router.get('/', async (req, res, next) => {
  try {
    const clinics = await clinicService.find();
    res.status(200).json(clinics);
  } catch (error) {
    next(error);
  }
});

// validatorHandler(getPostSchema, 'params'),
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const clinic = await clinicService.findBypk(id);
    res.status(200).json(clinic);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createClinicSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newClinic = await clinicService.create(body);

    await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);

    res.status(201).json(newClinic);
  }
);

router.put(
  '/:id',
  validatorHandler(updateClinicSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const clinic = await clinicService.update(id, body);

      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);

      res.status(200).json(clinic);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getClinicSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await clinicService.delete(id));
      await axios(URL_REVALIDATE, CONFIG_REVALIDATE);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
