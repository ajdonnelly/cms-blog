// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comments');

// create associations

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Post, Comment };
