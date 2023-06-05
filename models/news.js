'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate({ Images,Video}) {
      this.hasMany(Images,{ foreignKey:"newsId",as:"images"})
      this.hasMany(Video,{ foreignKey:"newsId",as:"video"})
    }
  }
  News.init({
    news_id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    header_tm: DataTypes.TEXT,
    header_ru: DataTypes.TEXT,
    header_en: DataTypes.TEXT,
    body_tm: DataTypes.TEXT,
    body_ru: DataTypes.TEXT,
    body_en: DataTypes.TEXT,
    image: DataTypes.STRING,
    type:DataTypes.STRING,
    isActive:DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName:"news",
    modelName: 'News',
  });
  return News;
};