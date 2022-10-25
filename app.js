const { Sequelize } = require('sequelize');

let sequelize

if(process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize('databasename', 'email', 'password', {
    host: 'host',
    dialect: 'postgres',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
} else {
  sequelize = new Sequelize('sequelizeok', 'me', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })
}

const initDb = () => {
  return sequelize.sync()
}

module.exports = {
  initDb, Product, User
}