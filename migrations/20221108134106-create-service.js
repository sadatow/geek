'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      service_id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      name_tm: {
        type: DataTypes.STRING
      },
      name_ru: {
        type: DataTypes.STRING
      },
      name_en: {
        type: DataTypes.STRING
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
    await queryInterface.dropTable('services');
  }
};