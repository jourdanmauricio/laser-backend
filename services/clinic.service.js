const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ClinicService {
  async create(data) {
    try {
      const newClinic = await models.Clinic.create(data);
      return newClinic;
    } catch (error) {
      throw boom.conflict('Error creando clínica');
    }
  }

  async find() {
    const rta = await models.Clinic.findAll();
    return rta;
  }

  async findOne(id) {
    const clinic = await models.Clinic.findByPk(id);
    if (!clinic) {
      throw boom.notFound('Post not found');
    }
    return clinic;
  }

  async update(id, changes) {
    const clinic = await this.findOne(id);
    const rta = await clinic.update(changes);
    return rta;
  }

  async delete(id) {
    const clinic = await this.findOne(id);
    await clinic.destroy();
    return { id };
  }
}

module.exports = ClinicService;
