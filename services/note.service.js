const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class NoteService {
  async create(data) {
    try {
      const newNote = await models.Note.create(data);
      return newNote;
    } catch (error) {
      throw boom.conflict('Error creando la nota');
    }
  }

  async find() {
    const rta = await models.Note.findAll();
    return rta;
  }

  async findOne(id) {
    const note = await models.Note.findByPk(id);
    if (!note) {
      throw boom.notFound('Note not found');
    }
    return note;
  }

  async update(id, changes) {
    const note = await this.findOne(id);
    const rta = await note.update(changes);
    return rta;
  }

  async delete(id) {
    const note = await this.findOne(id);
    await note.destroy();
    return { id };
  }
}

module.exports = NoteService;
