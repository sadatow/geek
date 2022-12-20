'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('news', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      news_id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      header_tm: {
        type: DataTypes.TEXT
      },
      header_ru: {
        type: DataTypes.TEXT
      },
      header_en: {
        type: DataTypes.TEXT
      },
      body_tm: {
        type: DataTypes.TEXT
      },
      body_ru: {
        type: DataTypes.TEXT
      },
      body_en: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.STRING
      },
      isActive: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('news');
  }
};