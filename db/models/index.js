const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Subscriber, SubscriberSchema } = require('./subscriber.model');
const { Comment, CommentSchema } = require('./comment.model');
const { Setting, SettingSchema } = require('./setting.model');
const { Post, PostSchema } = require('./post.model');
const { Clinic, ClinicSchema } = require('./clinic.model');
const { Testimonial, TestimonialSchema } = require('./testimonial.model');
const { Service, ServiceSchema } = require('./service.model');
const { Note, NoteSchema } = require('./note.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Subscriber.init(SubscriberSchema, Subscriber.config(sequelize));
  Comment.init(CommentSchema, Comment.config(sequelize));
  Setting.init(SettingSchema, Setting.config(sequelize));
  Post.init(PostSchema, Post.config(sequelize));
  Clinic.init(ClinicSchema, Clinic.config(sequelize));
  Testimonial.init(TestimonialSchema, Testimonial.config(sequelize));
  Service.init(ServiceSchema, Service.config(sequelize));
  Note.init(NoteSchema, Note.config(sequelize));

  // Customer.associate(sequelize.models);
  Post.associate(sequelize.models);
}

module.exports = setupModels;
