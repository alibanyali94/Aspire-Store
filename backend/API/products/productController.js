const {
  getProduct,
  getProducts,
  insertProducts,
  productsCount,
} = require('../../services/productServices.js');

exports.getProductsController = async (req, res) => {
  const pageSize = 4;
  const page = req.query.pageNumber || 1;
  const name = req.query.name || '';
  const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
  const count = await productsCount({ ...nameFilter });
  const products = await getProducts({ ...nameFilter }, page);
  res.send({ products, page, pages: Math.ceil(count / pageSize) });
};

exports.saveProductsController = async (req, res) => {
  const createdProduct = await insertProducts();
  res.send({ createdProduct });
};

exports.getProductController = async (req, res) => {
  const product = await getProduct(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
};
