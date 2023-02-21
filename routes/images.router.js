const express = require('express');
const passport = require('passport');
const { checkAdminRole } = require('./../middlewares/auth.handler');
const router = express.Router();

// const { config } = require('./../config/config');

const multer = require('multer');

const ImageService = require('./../services/image.service');
const service = new ImageService();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, 'newImage');
  },
});

const upload = multer({ storage: storage });

router.get(
  '/',
  // passport.authenticate('jwt', { session: false }),
  // checkAdminRole,
  async (req, res, next) => {
    try {
      const images = await service.getAllCloudinary();
      res.status(200).json(images);
    } catch (error) {
      console.log('ERRRRORRRRR', error);
      next(error);
    }
  }
);

router.post(
  '/upload-file',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  upload.single('image'),
  async (req, res, next) => {
    try {
      const newImage = await service.createCloudinary(
        req.file.path,
        req.file.originalname.split('.')[0]
      );

      res.status(201).json({ image: newImage });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  // upload.single('image'),
  async (req, res, next) => {
    try {
      const { public_id } = req.body;
      await service.deleteCloudinary(public_id);

      res.status(200).json({ image: 'deleted' });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
