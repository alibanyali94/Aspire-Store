import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import { userSigninReducer } from './reducers/userReducer'

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('UserInfo')
            ? JSON.parse(localStorage.getItem('UserInfo'))
            : null,
    }, cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    }
}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;