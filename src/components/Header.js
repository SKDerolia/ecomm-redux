import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction'

const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch()

    const hadnleInputChange = (event) => {
        dispatch(productSearch(event.target.value))
    }

    console.log("header comp ", result)
    return (

        <div className='header'>
            <Link to='/'>
                <h1 className='logo'>E-Comm</h1>
            </Link>
            <div className='search-box'>
                <input type='text' placeholder='Search for Products'
                    onChange={hadnleInputChange}
                />

            </div>
            <Link to="/cart">

                <div className='cart-div'>
                    <span>{result.length}</span>
                    {/* <img src='' */}
                </div>
            </Link>
        </div>
    )
}

export default Header