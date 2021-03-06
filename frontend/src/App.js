import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import SearchBox from './components/SearchBox';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchScreen from './screens/SearchScreen';
import ShippingAdressScreen from './screens/ShippingAdressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin || {});
  const { userInfo } = userSignin;
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <a className='brand' href='/'>
              Aspire{' '}
            </a>
          </div>
          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div>
            <Link to='/cart'>
              Carts
              {cartItems.length > 0 && (
                <span className='badage'>{cartItems.length}</span>
              )}
            </Link>

            {userInfo ? (
              <div className='dropdown'>
                <Link to='#'>
                  {userInfo.name}
                  <i className='fa fa-caret-down'></i>
                </Link>
                <ul className='dropdown-content'>
                  <li>
                    <Link to='/orderhistory'>Order History</Link>
                  </li>
                  <li>
                    <Link to='#signout' onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to='/signin'>Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/signin' component={SigninScreen}></Route>
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/register' component={RegisterScreen}></Route>
          <Route path='/shipping' component={ShippingAdressScreen}></Route>
          <Route path='/payment' component={PaymentMethodScreen}></Route>
          <Route path='/placeorder' component={PlaceOrderScreen}></Route>
          <Route path='/order/:id' component={OrderScreen}></Route>
          <Route path='/orderhistory' component={OrderHistoryScreen}></Route>

          <Route
            path='/search/name/:name?'
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path='/search/:name/pageNumber/:pageNumber'
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path='/productlist/pageNumber/:pageNumber'
            component={HomeScreen}
            exact
          ></Route>
        </main>

        <footer className='row center'>
          <img alt='Aspire' className='small-img' src='/images/4.jpg'></img>
          &nbsp;&nbsp;&nbsp;&nbsp; 2021 All Right reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
