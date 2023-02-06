'use strict';
const bcrypt = require('bcrypt');
const { config } = require('./../../config/config');

module.exports = {
  async up(queryInterface) {
    const passHash = await bcrypt.hash(config.adminPass, 10);
    return queryInterface.bulkInsert(
      'users',
      [
        {
          email: config.adminEmail,
          password: passHash,
          role: config.adminRole,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
