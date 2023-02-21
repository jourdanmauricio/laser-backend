const boom = require('@hapi/boom');
const cloudinary = require('cloudinary').v2;

const { config } = require('./../config/config');

cloudinary.config(config.cloudinary);

class PostService {
  async getAllCloudinary() {
    const { resources } = await cloudinary.search
      .expression('folder:laura_rodriguez')
      .sort_by('public_id', 'desc')
      .execute();

    // const publicIds = resources.map((file) => file.public_id);
    // return publicIds;
    return resources;
  }

  async createCloudinary(imagePath, originalname) {
    const res = await cloudinary.uploader.upload(imagePath, {
      folder: 'laura_rodriguez',
      public_id: originalname,
      //  use_filename: true,
      // unique_filename: false,
      overwrite: true,
    });

    return res;
  }

  async deleteCloudinary(public_id) {
    const deleteId = await cloudinary.uploader.destroy(public_id);
    if (deleteId.result !== 'ok') {
      throw boom.notFound('Image not found');
    }
    return deleteId;
  }
}

module.exports = PostService;
