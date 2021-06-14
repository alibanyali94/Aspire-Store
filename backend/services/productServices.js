const data = require('../data');
const Product = require('../models/productModel.js');
const getProducts = ({ ...nameFilter }, page) => {
  return Product.find({ ...nameFilter })
    .skip(4 * (page - 1))
    .limit(4);
};
const productsCount = ({ ...nameFilter }) => {
  return Product.countDocuments({ ...nameFilter });
};
const insertProducts = () => {
  Product.removeAllListeners({});
  return Product.insertMany(data.products);
};

const getProduct = (id) => {
  return Product.findById(id);
};
module.exports = { getProducts, productsCount, insertProducts, getProduct };
