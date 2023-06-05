'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "news",
      "video",
      {type:Sequelize.STRING})
      await queryInterface.addColumn(
        "news",
        "type",
        {type:Sequelize.STRING,defaultValue:"image"}

    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
