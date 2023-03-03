'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'sections',
      [
        {
          name: 'Sobre mi',
          show: false,
          page: '/',
          type: 'TEXT',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('sections', null, {});
  },
};
