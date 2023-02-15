const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Subscriber, SubscriberSchema } = require('./subscriber.model');
const { Comment, CommentSchema } = require('./comment.model');
const { Setting, SettingSchema } = require('./setting.model');
const { Post, PostSchema } = require('./post.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Subscriber.init(SubscriberSchema, Subscriber.config(sequelize));
  Comment.init(CommentSchema, Comment.config(sequelize));
  Setting.init(SettingSchema, Setting.config(sequelize));
  Post.init(PostSchema, Post.config(sequelize));

  // Customer.associate(sequelize.models);
  Post.associate(sequelize.models);
}

module.exports = setupModels;
