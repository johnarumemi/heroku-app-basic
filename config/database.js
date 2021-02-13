const connection = require('../db/connection')

module.exports = {
  development: {
      ...connection
  },
  test: {
      ...connection
  },
  production: {
      ...connection
  }
}