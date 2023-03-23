const express = require('express');
// const passport = require('passport');
// const { checkAdminRole } = require('./../middlewares/auth.handler');

const NoteService = require('../services/note.service');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createNoteSchema,
  updateNoteSchema,
  getNoteSchema,
} = require('../schemas/note.schema');

const router = express.Router();
const noteService = new NoteService();

router.get('/', async (req, res, next) => {
  try {
    const notes = await noteService.find();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createNoteSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newNote = await noteService.create(body);

    res.status(201).json(newNote);
  }
);

router.put(
  '/:id',
  validatorHandler(updateNoteSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const note = await noteService.update(id, body);
      res.status(200).json(note);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getNoteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await noteService.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
