const { Model, DataTypes, Sequelize } = require('sequelize');

const SUBSECTION_TABLE = 'subsections';
const SECTION_TABLE = 'sections';

const SubsectionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
  name: {
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
};

class Subsection extends Model {
  static associate(models) {
    this.belongsTo(models.Section, {
      as: 'section',
      foreignKey: 'section_id',
    });
    //   this.hasOne(models.Customer, {
    //     as: 'customer',
    //     foreignKey: 'userId',
    //   });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUBSECTION_TABLE,
      modelName: 'Subsection',
      timestamps: false,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    };
  }
}

module.exports = { SUBSECTION_TABLE, SubsectionSchema, Subsection };
