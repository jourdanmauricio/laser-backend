'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const { SUBSECTION_TABLE } = require('./../models/subsection.model');
const { SECTION_TABLE } = require('./../models/section.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(SUBSECTION_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      section_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: SECTION_TABLE, key: 'ID' },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable(SUBSECTION_TABLE);
  },
};
