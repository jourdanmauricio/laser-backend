'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const { CLINIC_TABLE } = require('./../models/clinic.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CLINIC_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      main: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cp: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      street: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      number: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      floor: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      apartment: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      order: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      alt_image: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      days: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      observation: {
        allowNull: true,
        type: DataTypes.STRING,
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
    await queryInterface.dropTable(CLINIC_TABLE);
  },
};
