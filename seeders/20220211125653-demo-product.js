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
    // create loop to generate 200 products
    for (let i = 0; i < 200; i++) {
      // create product
      await queryInterface.bulkInsert('products', [{
        user_id: Math.floor(Math.random() * 100) + 1,
        title: faker.commerce.productName(),
        desc: faker.lorem.paragraph(),
        price: Math.floor(Math.random() * 100000),
        image: faker.image.image(),
        qty: Math.floor(Math.random() * 100)
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
    await queryInterface.bulkDelete('Products', null, {});
  }
};
