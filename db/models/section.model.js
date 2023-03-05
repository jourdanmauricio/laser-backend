const { Model, DataTypes, Sequelize } = require('sequelize');

const SECTION_TABLE = 'sections';

const SectionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  show: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  page: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  type: {
    allowNull: false,
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

class Section extends Model {
  static associate(models) {
    this.hasMany(models.Subsection, {
      as: 'subsections',
      foreignKey: 'section_id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SECTION_TABLE,
      modelName: 'Section',
      timestamps: false,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    };
  }
}

module.exports = { SECTION_TABLE, SectionSchema, Section };
