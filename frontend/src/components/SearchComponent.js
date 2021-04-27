import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, searchProduct } from '../actions/productActions'



export default function SearchComponent() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList.products)

    const submitHandler = (event) => {

        const search = productList.filter(data => data.name.toLowerCase().includes(event.target.value.toLowerCase()));

        if (event.target.value !== '')

            dispatch(searchProduct(search))

        else
            dispatch(listProducts())



    }



    return (




        <input className="input" type="text" onChange={submitHandler} placeholder="Search Product.." name="search"></input>












    )

}