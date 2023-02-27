const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Test);
    }
  }
  Question.init({
    path: DataTypes.STRING,
    correctAnswer: DataTypes.STRING,
    testId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
