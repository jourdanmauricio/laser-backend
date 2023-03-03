const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SectionService {
  async create(data) {
    try {
      const newSection = await models.Section.create(data);
      return newSection;
    } catch (error) {
      throw boom.conflict('Error creando section');
    }
  }

  async find() {
    const rta = await models.Section.findAll({
      include: ['subsections'],
    });
    return rta;
  }

  async findOne(id) {
    const section = await models.Section.findByPk(id);
    if (!section) {
      throw boom.notFound('Post not found');
    }
    return section;
  }

  async update(id, changes) {
    const section = await this.findOne(id);
    const rta = await section.update(changes);
    return rta;
  }

  async delete(id) {
    const section = await this.findOne(id);
    await section.destroy();
    return { id };
  }
}

module.exports = SectionService;
