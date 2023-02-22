const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    static associate(models) {
      Test.belongsTo(models.Topic)
      Test.hasMany(models.Question)
    }
  }
  Test.init({
    name: DataTypes.STRING,
    topicId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};
