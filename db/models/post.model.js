const { Model, DataTypes, Sequelize } = require('sequelize');

const POST_TABLE = 'posts';
const USER_TABLE = 'users';

const PostSchema = {
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
};

class Post extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
    //   this.hasOne(models.Customer, {
    //     as: 'customer',
    //     foreignKey: 'userId',
    //   });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: POST_TABLE,
      modelName: 'Post',
      timestamps: false,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    };
  }
}

module.exports = { POST_TABLE, PostSchema, Post };
