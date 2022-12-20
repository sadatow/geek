'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    project_id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    body_tm: DataTypes.TEXT,
    body_ru: DataTypes.TEXT,
    body_en: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    tableName:"projects",
    modelName: 'Projects',
  });
  return Projects;
};