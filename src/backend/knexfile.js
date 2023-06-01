const dotenv = require('dotenv')
dotenv.config({path: '../../.env' })

module.exports = {
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    port : process.env.DB_PORT,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },

  migrations: {
    tableName: 'knex_migrations'
  }

};