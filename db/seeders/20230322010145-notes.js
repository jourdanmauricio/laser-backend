'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkDelete('notes', null, {});
    return queryInterface.bulkInsert(
      'notes',
      [
        {
          name: 'Background Color',
          value: '#ffffff',
        },
        {
          name: 'Color de texto',
          value: '#000000',
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('testimonials', null, {});
  },
};
