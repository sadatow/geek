'use strict';
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('aboutus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
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
        await queryInterface.dropTable('aboutus');
    }
};