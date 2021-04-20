import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, searchProduct } from '../actions/productActions'


export default function SearchComponent() {
    const dispatch = useDispatch();
    const s = useSelector(state => state.productList.products)



    return (

        <input className="input" type="text" placeholder="Search Product.." name="search" onChange={(event) => {


            const newArr = s.filter(data => data.name.toLowerCase().includes(event.target.value.toLowerCase()));
            if (event.target.value !== '')

                dispatch(searchProduct(newArr))
            else
                dispatch(listProducts())



        }}
        />




    )
}
