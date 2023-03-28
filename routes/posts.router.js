const axios = require('axios');
const express = require('express');
const passport = require('passport');
const { checkAdminRole } = require('./../middlewares/auth.handler');

// const multer = require('multer');
const { config } = require('./../config/config');

const URL_REVALIDATE = `${config.apiFrontend}/revalidate`;
const CONFIG_REVALIDATE = {
  headers: {
    revalidate: config.revalidateToken,
  },
};

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images');
//   },
//   filename: function (req, file, cb) {
//     // cb(null, file.fieldname, +'-' + Date.now());
//     // cb(null, `${Date.now()}-${file.originalname}`);
//     cb(null, file.originalname);
//   },
// });

const PostService = require('../services/post.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createPostSchema,
  updatePostSchema,
  getPostSchema,
} = require('../schemas/post.schema');

const router = express.Router();
const postService = new PostService();

router.get('/', async (req, res, next) => {
  try {
    const posts = await postService.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

// validatorHandler(getPostSchema, 'params'),
router.get('/:slug', async (req, res, next) => {
  try {
    const { slug } = req.params;
    const posts = await postService.findBySlug(slug);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(createPostSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newPost = await postService.create(body);

    await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);
    await axios(
      `${URL_REVALIDATE}?path=/blog/${req.body.slug}`,
      CONFIG_REVALIDATE
    );

    res.status(201).json(newPost);
  }
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(updatePostSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const post = await postService.update(id, body);

      await axios(`${URL_REVALIDATE}?path=/`, CONFIG_REVALIDATE);
      await axios(
        `${URL_REVALIDATE}?path=/blog/${req.body.slug}`,
        CONFIG_REVALIDATE
      );

      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdminRole,
  validatorHandler(getPostSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await axios(URL_REVALIDATE, CONFIG_REVALIDATE);
      res.status(200).json(await postService.delete(id));
    } catch (error) {
      next(error);
    }
  }
);
// const upload = multer({ storage: storage });

// router.post(
//   '/upload-file',
//   passport.authenticate('jwt', { session: false }),
//   checkAdminRole,
//   upload.single('image'),
//   async (req, res, next) => {
//     try {
//       const file = config.domain + 'static/images/' + req.file.originalname;

//       res.status(201).json({ image: file });
//       // res.status(201).json({ image: filePath });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;
