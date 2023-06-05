'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate({News}) {
      this.belongsTo(News, {as:"news",foreignKey:"newsId"})
    }
  }
  Video.init({
    video_id: DataTypes.UUID,
    video: DataTypes.STRING,
    newsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};