import Product from "../models/productModel.js";
import data from '../data.js';

export const getProductsController = async (req, res) => {
    const pageSize = 4;
    const page = req.query.pageNumber || 1;
    const name = req.query.name || '';
    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};

    // counts the number of documents that match name fillter
    const count = await Product.countDocuments({
        ...nameFilter
    })

    //get products that match fillter of search name and pagination
    const products = await Product.find({
        ...nameFilter,
    }).skip(pageSize * (page - 1))
        .limit(pageSize);

    res.send({ products, page, pages: Math.ceil(count / pageSize) });

}

export const saveProductsController = async (req, res) => {
    await Product.remove({});
    const createdProduct = await Product.insertMany(data.products);
    res.send({ createdProduct });
}

export const getProductController = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
}