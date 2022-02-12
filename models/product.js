'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user"
      })
      Product.belongsToMany(models.Category, {
        as: "categories",
        through: {
          model: "ProductCategory",
          as: "product_categories"
        },
        foreignKey: "productId"
      })
    }
  }
  Product.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};