'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mainpage',
    [{
      text_tm:"Developing businessusing best tools  Efficient digital solutions",
      text_en:"Developing businessusing best tools  Efficient digital solutions",
      text_ru:"Developing businessusing best tools  Efficient digital solutions",
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now'),
    }]
    ,{}
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
