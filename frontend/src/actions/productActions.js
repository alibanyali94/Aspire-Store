import Axios from "axios";

import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, SEARCH_PRODUCT } from "../constants/productConstants"

//HomeScreen
export const listProducts = (name = '') => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    })
    try {
        const { data } = await Axios.get(`/api/products?name=${name}`);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) { dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message }) }
}

//Search
export const searchProduct = (name = '') => async (dispatch) => {

    dispatch({ type: SEARCH_PRODUCT, payload: name })
}

//productList

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
        const { data } = await Axios.get(`/api/products/${productId}`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}