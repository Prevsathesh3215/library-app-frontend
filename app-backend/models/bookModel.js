// const { DATE } = require("sequelize")
// const { sequelize } = require('./setup_db.js')
const Category = require('./categModel')
const { capitalizeOneWord, capitalizeWords } = require('../utils/capitalize')


module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('book', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      // defaultValue: 1001
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value){
        this.setDataValue('title', capitalizeWords(value))
      }
      
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value){
        this.setDataValue('author', capitalizeWords(value))
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value){
        this.setDataValue('genre', capitalizeOneWord(value))
      }
    },

    pubDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        validateCondition(value){
          if (value != 'Excellent' && value != 'excellent' && value != 'Good' && value != 'good' && value != 'Poor' && value != 'poor'){
            throw new Error('Invalid condition entry')
          }
        }
      },
      set(value){
        this.setDataValue('condition', capitalizeOneWord(value))
      }
    },
    FKCategID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'FKCategID'
      }
    },

    bookPDF: {
      type: DataTypes.BLOB('long'),
    }
  },{
    tableName: 'books',
    initialAutoIncrement: 1001,
  });

  Books.beforeCreate(async (book, options) => {
    switch(book.genre){
      case 'Horror':
        book.FKCategID = 15;
        break;
      case 'Fiction':
        book.FKCategID = 11;
        break;
      case 'Fantasy':
        book.FKCategID = 12;
        break;
      case 'Non-Fiction':
        book.FKCategID = 14;
        break;
      case 'Romance': 
        book.FKCategID =  17;
        break;
    }
  })



  return Books
}


