const { Model, DataTypes, Sequelize } = require('sequelize');

const SERVICE_TABLE = 'services';

const ServiceSchema = {
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
};

class Service extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICE_TABLE,
      modelName: 'Service',
      timestamps: false,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    };
  }
}

module.exports = { SERVICE_TABLE, ServiceSchema, Service };
