const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Topic);
      Comment.belongsTo(models.User);
    }
  }
  Comment.init({
    text: DataTypes.STRING,
    topicId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};