'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      member_id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING
      },
      job: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      image:{
        type:DataTypes.STRING
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
    await queryInterface.dropTable('members');
  }
};