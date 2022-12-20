'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.bulkInsert(
            "aboutus", [{
                    body_tm: "body birinji tm",
                    body_ru: "body birinji ru",
                    body_en: "body birinji en",
                    createdAt: DataTypes.fn('now'),
                    updatedAt: DataTypes.fn('now'),
                },
                {
                    body_tm: "body ikinji tm",
                    body_ru: "body ikinji ru",
                    body_en: "body ikinji en",
                    createdAt: DataTypes.fn('now'),
                    updatedAt: DataTypes.fn('now'),
                }
            ], {}
        )
    },

    async down(queryInterface, DataTypes) {}
};