'use strict';
const tableName = 'books';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        return await queryInterface.createTable('books', {

            // Columns of books table
            id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
              allowNull: false,
            },
            author: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            title: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE
            },
            updatedAt: {
              allowNull: false,
              type: Sequelize.DATE
            }
    });
    },

    down: async (queryInterface, Sequelize) => {

      return await queryInterface.dropTable('books');
  }
};