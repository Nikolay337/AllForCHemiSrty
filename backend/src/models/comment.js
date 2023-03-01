const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Topic);
    }
  }
  Comment.init({
    text: DataTypes.STRING,
    name: DataTypes.STRING,
    topicId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};