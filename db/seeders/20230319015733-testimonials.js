'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'testimonials',
      [
        {
          name: 'Analia Lopez',
          message: 'OK',
          stars: '11110',
          order: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Karina Maceo',
          message: 'OK',
          stars: '11110',
          order: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Alejandra Martinez',
          message: 'OK',
          stars: '11110',
          order: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('testimonials', null, {});
  },
};
