const { Model, DataTypes, Sequelize } = require('sequelize');

const TESTIMONIAL_TABLE = 'testimonials';

const TestimonialSchema = {
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
  message: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  stars: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  order: {
    allowNull: false,
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

class Testimonial extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TESTIMONIAL_TABLE,
      modelName: 'Testimonial',
      timestamps: false,
    };
  }
}

module.exports = { TESTIMONIAL_TABLE, TestimonialSchema, Testimonial };
