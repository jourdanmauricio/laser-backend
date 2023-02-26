const axios = require('axios');

const express = require('express');
const passport = require('passport');
const { checkAdminRole } = require('./../middlewares/auth.handler');
const SettingService = require('./../services/setting.service');
const PostService = require('./../services/post.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { config } = require('./../config/config');

const {
  createSettingSchema,
  // getSettingSchema,
} = require('./../schemas/setting.schema');

const URL_REVALIDATE = `${config.apiFrontend}/revalidate`;
const CONFIG_REVALIDATE = {
  headers: {
    revalidate: config.revalidateToken,
  },
};

const router = express.Router();
const service = new SettingService();
const postService = new PostService();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname, +'-' + Date.now());
    // cb(null, `${Date.now()}-${file.originalname}`);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get(
  '/',
  // passport.authenticate('jwt', { session: false }),
  // checkAdminRole,
  async (req, res, next) => {
    try {
      const settings = await service.find();
      res.json(settings);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(createSettingSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);

      await axios(URL_REVALIDATE, CONFIG_REVALIDATE);

      res.status(201).json(newCategory);
    } catch (error) {
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
      const file = config.domain + 'static/images/' + req.file.originalname;

      res.status(201).json({ image: file });
      // res.status(201).json({ image: filePath });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  // validatorHandler(updateSettingSchema, 'body'),
  async (req, res, next) => {
    try {
      const { data } = req.body;

      const setting = await service.updateAll(data);

      const posts = await postService.find();

      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);
      await axios(`${URL_REVALIDATE}?path=/blog`, CONFIG_REVALIDATE);
      for (const post of posts) {
        await axios(
          `${URL_REVALIDATE}?path=/blog/${post.slug}`,
          CONFIG_REVALIDATE
        );
      }

      res.json(setting);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
