const { Model, DataTypes } = require('sequelize');

const NOTE_TABLE = 'notes';

const NoteSchema = {
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
  value: {
    allowNull: true,
    type: DataTypes.STRING,
  },
};

class Note extends Model {
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
      tableName: NOTE_TABLE,
      modelName: 'Note',
      timestamps: false,
    };
  }
}

module.exports = { Note, NoteSchema, NOTE_TABLE };
