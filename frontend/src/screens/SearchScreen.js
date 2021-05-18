import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/product';

export default function SearchScreen(props) {
    const { name = 'all', pageNumber = 1 } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;
    useEffect(() => {
        dispatch(listProducts({ pageNumber, name: name !== 'all' ? name : '' }));
    }, [dispatch, name, pageNumber,]);
    const getFilterUrl = (filter) => {
        const filterPage = filter.page || pageNumber;
        const filterName = filter.name || name;
        return `/search/name/${filterName}/pageNumber/${filterPage}`;
    }
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
                            {products.length === 0 && (
                                <MessageBox>No Product Found</MessageBox>
                            )}
                            <div className="row center">
                                {products.map((product) => (
                                    <Product key={product._id} product={product}></Product>
                                ))}
                            </div>
                            <div className="row center pagination">
                                {[...Array(pages).keys()].map((x) => (
                                    <Link
                                        className={x + 1 === page ? 'active' : ''}
                                        key={x + 1}
                                        to={getFilterUrl({ page: x + 1 })}
                                    >
                                        {x + 1}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>

            </div>

        </div>

    );
}