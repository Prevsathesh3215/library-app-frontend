const { Sequelize, DataTypes } = require('sequelize')
const dbConfig = require('../configs/db_config.js')
require('dotenv').config()

// SET UP CONNECTION TO MYSQL THRU SEQUELIZE
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operationAliases: false,
    port: process.env.DB_PORT,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
      }
  }
)

//AUTHENTICATE CONNECTION
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require('../models/categModel.js')(sequelize, DataTypes)
db.books = require('../models/bookModel.js')(sequelize, DataTypes)
db.borrower = require('../models/borrowerModel.js')(sequelize, DataTypes)
db.regisUser = require('./regisUser.js')(sequelize, DataTypes)

db.categories.hasMany(db.books, { foreignKey: 'FKCategID' });
db.books.belongsTo(db.categories, { foreignKey: 'FKCategID' });

db.books.hasMany(db.borrower, { foreignKey: 'bookId' });
db.borrower.belongsTo(db.books, { foreignKey: 'bookId' });

sequelize.sync({ alter: true })
.then(() => {
  console.log('All tables created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

// console.log(sequelize)

module.exports = db;