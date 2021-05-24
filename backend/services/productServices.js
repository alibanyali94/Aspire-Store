import data from "../data.js";
import Product from "../models/productModel.js";
export const getProducts = ({ ...nameFilter }, page) => {
    return Product.find({ ...nameFilter }).skip(4 * (page - 1)).limit(4);

}
export const productsCount = ({ ...nameFilter }) => {
    return Product.countDocuments({ ...nameFilter })
}
export const insertProducts = () => {

    return Product.insertMany(data.products)
}

export const getProduct = (id) => {
    return Product.findById(id)
}