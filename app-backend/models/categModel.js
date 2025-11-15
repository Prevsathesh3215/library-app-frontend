// const { DATE } = require("sequelize")
// const { sequelize } = require('./setup_db.js')
// const { Sequelize, DataTypes } = require('sequelize')

// console.log(sequelize)
const zlib = require('zlib')
const { capitalizeOneWord, capitalizeWords } = require('../utils/capitalize')

module.exports = (sequelize, DataTypes) => {

  const Categories = sequelize.define('category', {
    FKCategID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value){
        this.setDataValue('name', capitalizeOneWord(value))
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      set(value){
        const compressed = zlib.deflateSync(value).toString('base64');
        this.setDataValue('description', compressed);
      },

      get(){
        const rawValue = this.getDataValue('description');
        const uncompressed = zlib.inflateSync(Buffer.from(rawValue, 'base64'));
        const value =  uncompressed.toString();

        return capitalizeWords(value);
      }
    },
    aboutCateg: {
      type: DataTypes.VIRTUAL,
      get(){
        return this.name + ": " +  this.description;
      }
    }
  },
  {
    tableName: 'categories',
    paranoid: true
  });
  return Categories
}

  


