const connection = require('../db/connection')

module.exports = {
  development: {
      ...connection,
  },
  test: {
      ...connection
  },
  production: {
      ...connection,
      use_env_variable: 'DATABASE_URL',
      dialectOptions: {
          ssl: {
              rejectUnauthorized: false, // <<<<<<< YOU NEED THIS TO FIX UNHANDLED REJECTION
          },
      },
  }
}