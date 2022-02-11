'use strict';

const { default: faker } = require("@faker-js/faker");

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
   // create loop to generate 100 profiles
    for (let i = 0; i < 100; i++) {
      // create profile
      await queryInterface.bulkInsert('profiles', [{
        user_id: i + 1,
        phone: faker.phone.phoneNumber(),
        gender: ['Laki-Laki', 'Perempuan'][Math.floor(Math.random() * 2)],
        address: faker.address.streetAddress()
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
    await queryInterface.bulkDelete('Profiles', null, {})
  }
};
