'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/database')[env]; // extract development, test or production configs
const db = {};

// Connection to database stored in sequelize instance
let sequelize;
if (config.use_env_variable) {
    // uses URI if available
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    // uses options in config to perform setup
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; // db connection
db.Sequelize = Sequelize; // class

module.exports = db;
