const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Question)
    }
  } Answer.init({
    path: DataTypes.STRING,
    valid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answer',
  }); return Answer;
};