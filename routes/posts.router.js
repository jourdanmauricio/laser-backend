const express = require('express');
const multer = require('multer');
const { config } = require('./../config/config');

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

router.post(
  '/',
  validatorHandler(createPostSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newPost = await postService.create(body);
    res.status(201).json(newPost);
  }
);

router.put(
  '/:id',
  validatorHandler(updatePostSchema, 'body'),
  async (req, res, next) => {
    console.log('UPDATE POST');
    try {
      const body = req.body;
      const { id } = req.params;

      const post = await postService.update(id, body);
      res.status(200).json(post);
    } catch (error) {
      console.log('ERRRRRRRRR', error);
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getPostSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await postService.delete(id));
    } catch (error) {
      next(error);
    }
  }
);
const upload = multer({ storage: storage });

router.post(
  '/upload-file',
  // passport.authenticate('jwt', { session: false }),
  // checkAdminRole,
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

module.exports = router;
