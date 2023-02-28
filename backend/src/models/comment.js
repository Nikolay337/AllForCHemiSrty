const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.hasMany(models.Topic);
      Comment.hasMany(models.User);
    }
  }
  Comment.init({
    text: DataTypes.STRING,
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};