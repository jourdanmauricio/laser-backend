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

  async update(id, changes) {
    // console.log('UPD POST SERVICE');
    const post = await this.findOne(id);
    // console.log('POST', post);
    const rta = await post.update(changes);
    // console.log('RTA', rta);
    return rta;
  }

  async delete(id) {
    const post = await this.findOne(id);
    await post.destroy();
    return { id };
  }
}

module.exports = PostService;
