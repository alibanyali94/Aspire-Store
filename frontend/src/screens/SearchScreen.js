import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Pagintion from '../components/Pagination';
import Product from '../components/product';

export default function SearchScreen() {
    const { name = '', pageNumber = 1 } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, } = productList;
    useEffect(() => {
        dispatch(listProducts({ pageNumber, name: name !== 'all' ? name : '' }));
    }, [dispatch, name, pageNumber,]);


    return (
        <div className="row center">

            <div className="row top">
                <div className="col-1">
                </div>
                <div className="col-3">
                    {loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <>
                            <h1 className="row top">Search Results For :{name} </h1>
                            {products.length === 0 && (
                                <div>

                                    <MessageBox>No Product Found</MessageBox></div>

                            )}


                            <div className="row center">

                                {products.map((product) => (
                                    <Product key={product._id} product={product}></Product>
                                ))}
                            </div>

                            <Pagintion />
                        </>
                    )}
                </div>

            </div>

        </div>

    );
}