const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const subscriberRouter = require('./subscribers.router');
const commentRouter = require('./comments.router');
const settingRouter = require('./settings.router');
const postsRouter = require('./posts.router');
const imagesRouter = require('./images.router');
const clinicsRouter = require('./clinics.router');
const setionsRouter = require('./sections.router');
const subsetionsRouter = require('./subsections.router');
const testimonialsRouter = require('./testimonials.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/subscribers', subscriberRouter);
  router.use('/comments', commentRouter);
  router.use('/settings', settingRouter);
  router.use('/posts', postsRouter);
  router.use('/images', imagesRouter);
  router.use('/clinics', clinicsRouter);
  router.use('/sections', setionsRouter);
  router.use('/subsections', subsetionsRouter);
  router.use('/testimonials', testimonialsRouter);
}

module.exports = routerApi;
