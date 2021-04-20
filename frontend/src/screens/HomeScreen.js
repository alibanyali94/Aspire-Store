import React, { useEffect } from 'react';

import Product from '../components/product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import SearchComponent from '../components/SearchComponent';

export default function HomeScreen() {
  const s = useSelector((state) => state.productList)
  const { search } = s;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;





  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>



      ) :

        (

          <div className="row center">

            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        )}
    </div>

  );
}

