'use strict';

// import faker
const { faker } = require('@faker-js/faker');
// set locale to id_ID
faker.locale = 'id_ID';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   // create loop to generate 100 users
    for (let i = 0; i < 100; i++) {
      // create user
      await queryInterface.bulkInsert('users', [{
        fullName: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
