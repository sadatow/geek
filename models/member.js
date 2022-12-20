'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {

    static associate(models) {
    }
  }
  Member.init({
    member_id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    job: DataTypes.STRING,
    email: DataTypes.STRING,
    image:DataTypes.STRING
  }, {
    sequelize,
    tableName:"members",
    modelName: 'Member',
  });
  return Member;
};