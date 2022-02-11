'use strict';

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
    // create loop to generate 200 pivot product category
    for (let i = 0; i < 200; i++) {
      // create pivot product category
      await queryInterface.bulkInsert('productcategories', [{
        product_id: Math.floor(Math.random() * 200) + 1,
        category_id: Math.floor(Math.random() * 8) + 1
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
    await queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
