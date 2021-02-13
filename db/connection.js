// Connection details for DATABASE
require('dotenv').config()

const connection = {
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    logging: console.log // or use false
}

module.exports = connection
