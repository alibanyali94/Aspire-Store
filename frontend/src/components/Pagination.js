import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export default function Pagintion() {
    const { name = 'all', pageNumber = 1 } = useParams();
    const productList = useSelector((state) => state.productList);
    const { page, pages } = productList;
    const getFilterUrl = (filter) => {

        const filterPage = filter.page || pageNumber;
        const filterName = filter.name || name;

        return `/search/${filterName}/pageNumber/${filterPage}`;
    }
    return (
        <div className="row center pagination">
            {[...Array(pages).keys()].map((x) => (

                <Link
                    className={page === x + 1 ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}

                >
                    { x + 1}
                </Link >
            ))}
        </div >
    );
}