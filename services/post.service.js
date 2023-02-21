const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PostService {
  async create(data) {
    try {
      const newPost = await models.Post.create(data);
      return newPost;
    } catch (error) {
      throw boom.conflict('Error creando post');
    }
  }

  async find() {
    const rta = await models.Post.findAll();
    return rta;
  }

  async findOne(id) {
    const post = await models.Post.findByPk(id);
    if (!post) {
      throw boom.notFound('Post not found');
    }
    return post;
  }

  async findBySlug(slug) {
    const post = await models.Post.findOne({
      // include: ['user'],
      include: [
        {
          model: models.User,
          as: 'user',
          attributes: ['name', 'image'],
        },
      ],
      where: { slug },
    });
    if (!post) {
      throw boom.notFound('Post not found');
    }
    return post;
  }

  async update(id, changes) {
    const post = await this.findOne(id);
    const rta = await post.update(changes);
    return rta;
  }

  async delete(id) {
    const post = await this.findOne(id);
    await post.destroy();
    return { id };
  }
}

module.exports = PostService;
