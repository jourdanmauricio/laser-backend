'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const { SERVICE_TABLE } = require('./../models/service.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(SERVICE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      alt_image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      order: {
        allowNull: true,
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable(SERVICE_TABLE);
  },
};
