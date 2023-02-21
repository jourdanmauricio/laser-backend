const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const AuthService = require('./../services/auth.service');

const { config } = require('./../config/config');

const service = new AuthService();

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role,
      };
      const token = jwt.sign(payload, config.jwtSecret);
      const userResponse = JSON.parse(JSON.stringify(user));
      userResponse.token = token;
      delete userResponse.password;
      delete userResponse.updatedAt;
      delete userResponse.createdAt;

      res.json({
        user: userResponse,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const rta = await service.sendRecovery(email);
    res.status(200).json(rta);
  } catch (error) {
    next(error);
  }
});

router.post('/change-password', async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const rta = await service.changePassword(token, password);
    res.status(200).json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
