'use strict';
const faker = require('faker');

const createFakeBook = () => ({
  title: faker.random.words(4),
  author: `${faker.name.firstName()} ${faker.name.lastName()}`,
  createdAt: new Date(),
  updatedAt: new Date(),
})

module.exports = {
  up: async (queryInterface, Sequelize) => {

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let fakeBooks = [];
    const numBooks = 100;

    for (let i = 0; i < numBooks; i++){
      fakeBooks.push(createFakeBook())
    }

    return await queryInterface.bulkInsert('books', fakeBooks, {});
  },

    down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return await queryInterface.bulkDelete('books', null, {});
  }
};
