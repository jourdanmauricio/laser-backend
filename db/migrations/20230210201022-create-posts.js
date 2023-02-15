'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const { POST_TABLE } = require('./../models/post.model');
const { USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(POST_TABLE, {
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
      resume: {
        allowNull: false,
        type: DataTypes.STRING,
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
      main: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: USER_TABLE, key: 'ID' },
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
    await queryInterface.dropTable(POST_TABLE);
  },
};
