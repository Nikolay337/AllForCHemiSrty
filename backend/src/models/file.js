const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate(models) {
      File.belongsTo(models.Topic, { foreignKey: 'topicId' });
    }
  }
  File.init({
    path: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
  
};