const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ServiceService {
  async create(data) {
    try {
      const newService = await models.Service.create(data);
      return newService;
    } catch (error) {
      throw boom.conflict('Error creando el servicio');
    }
  }

  async find() {
    const rta = await models.Service.findAll();
    return rta;
  }

  async findOne(id) {
    const service = await models.Service.findByPk(id);
    if (!service) {
      throw boom.notFound('Service not found');
    }
    return service;
  }

  async update(id, changes) {
    const service = await this.findOne(id);
    const rta = await service.update(changes);
    return rta;
  }

  async delete(id) {
    const service = await this.findOne(id);
    await service.destroy();

    return { id };
  }
}

module.exports = ServiceService;
