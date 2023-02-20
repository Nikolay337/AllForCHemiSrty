const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answear extends Model {
    static associate(models) {
      Answear.belongsTo(models.Question)
    }
  }
  Answear.init({
    text: DataTypes.STRING,
    valid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Answear',
  });
  return Answear;
};