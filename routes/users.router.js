const express = require('express');
const passport = require('passport');

const { checkAdminRole } = require('./../middlewares/auth.handler');
const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  updateUserSchema,
  createUserSchema,
  getUserSchema,
  updatePassUserSchema,
} = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  async (req, res, next) => {
    try {
      const users = await service.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = req.body;
      const updUser = await service.update(id, user);
      res.json(updUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/change-password/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(updatePassUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id, newPassword } = req.body;

      const rta = await service.updatePass(id, newPassword);
      res.status(200).json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
