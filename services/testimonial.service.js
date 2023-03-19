const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TestimonialService {
  constructor() {}

  async find() {
    const rta = await models.Testimonial.findAll();
    return rta;
  }

  async findOne(id) {
    const testimonial = await models.Testimonial.findByPk(id);
    if (!testimonial) {
      throw boom.notFound('Cliente no encontrado');
    }
    return testimonial;
  }

  async create(data) {
    const newTestimonial = await models.Testimonial.create(data);
    return newTestimonial;
  }

  async update(id, changes) {
    const testimonial = await this.findOne(id);
    const rta = await testimonial.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { id };
  }
}

module.exports = TestimonialService;
