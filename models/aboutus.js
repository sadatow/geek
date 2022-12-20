'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Aboutus extends Model {
        static associate(models) {}
    }
    Aboutus.init({
        body_tm: DataTypes.TEXT,
        body_ru: DataTypes.TEXT,
        body_en: DataTypes.TEXT,
        image:DataTypes.STRING
    }, {
        sequelize,
        tableName: "aboutus",
        modelName: 'Aboutus',
    });
    return Aboutus;
};