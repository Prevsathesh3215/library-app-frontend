// const { DATE } = require("sequelize")
// const { sequelize } = require('./setup_db.js')
// const { Sequelize, DataTypes } = require('sequelize')
const Books = require('./bookModel')
const { capitalizeOneWord } = require('../utils/capitalize')
const date = require('date-and-time')

module.exports = (sequelize, DataTypes) => {
  const Borrower = sequelize.define('borrower', {

    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'books',
        key: 'bookId'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value){
        this.setDataValue('name', capitalizeOneWord(value))
      }
    },
    contactInfo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        validateInfo(value){
          const checker = /[a-zA-Z!@#$%^&*(),.?":{}|<>\\?]/g
          if(value.match(checker)){
            console.log('checker is being run')
            throw new Error('Contact number must be numbers only.')
          }
        }

      }
    },
    PKborrowerID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    checkoutDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    initialAutoIncrement: 3001,
  });

  return Borrower
  
}

