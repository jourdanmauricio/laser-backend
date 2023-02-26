const { Model, DataTypes, Sequelize } = require('sequelize');

const CLINIC_TABLE = 'clinics';

const ClinicSchema = {
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
};

class Clinic extends Model {
  // static associate(models) {
  //   this.belongsTo(models.User, { as: 'user' });
  //   this.hasMany(models.Order, {
  //     as: 'orders',
  //     foreignKey: 'customerId',
  //   });
  // }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLINIC_TABLE,
      modelName: 'Clinic',
      timestamps: false,
    };
  }
}

module.exports = { Clinic, ClinicSchema, CLINIC_TABLE };
