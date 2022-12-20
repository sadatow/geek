'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate({ News }) {
            this.belongsTo(News, { foreignKey: "newsId", as: "images" })
        }
    }
    Image.init({
        image_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        newsId: DataTypes.INTEGER,
        image: DataTypes.STRING,
    }, {
        sequelize,
        tableName: "images",
        modelName: 'Images',
    });
    return Image;
};