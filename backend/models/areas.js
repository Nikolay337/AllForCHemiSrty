'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Areas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Areas.init({
    title: DataTypes.STRING,
    pathName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Areas',
  });
  return Areas;
};