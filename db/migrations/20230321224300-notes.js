'use strict';

const { DataTypes } = require('sequelize');
const { NOTE_TABLE } = require('./../models/note.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(NOTE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable(NOTE_TABLE);
  },
};
