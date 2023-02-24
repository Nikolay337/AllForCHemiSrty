const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
      Topic.hasMany(models.File);
      Topic.hasOne(models.Test);
    }
  }
  Topic.init({
    title: DataTypes.STRING,
    path: DataTypes.STRING,
    area: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
