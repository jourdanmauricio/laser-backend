const axios = require('axios');

const express = require('express');
const passport = require('passport');
const { checkAdminRole } = require('./../middlewares/auth.handler');
const TestimonialService = require('./../services/testimonial.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { config } = require('./../config/config');

const {
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
// const postService = new PostService();

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

// router.put(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   checkAdminRole,
//   // validatorHandler(updateSettingSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { data } = req.body;

//       const setting = await service.updateAll(data);

//       // const posts = await postService.find();

//       await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);
//       await axios(`${URL_REVALIDATE}?path=/blog`, CONFIG_REVALIDATE);
//       // for (const post of posts) {
//       //   await axios(
//       //     `${URL_REVALIDATE}?path=/blog/${post.slug}`,
//       //     CONFIG_REVALIDATE
//       //   );
//       // }

//       res.json(setting);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;
