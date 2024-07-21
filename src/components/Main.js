import React, { useEffect, useState } from 'react';
import { addtoCart, removeFromCart, EmptyCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';

const Main = () => {

    const [page, setPage] = useState(1)

    const result = useSelector((state) => state.productData)
    console.log("main Component ", result)

    const dispatch = useDispatch();
    // const product = {
    //     name: 'Samsung',
    //     type: 'Mobile',
    //     price: 10000,
    //     color: 'Black'
    // }

    useEffect(() => {
        dispatch(productList())
    }, [])

    const handlePageChane = (pageNumber) => {
        setPage(pageNumber)
    }
    return (
        <div>
            {/* <div><button onClick={() => dispatch(addtoCart(product))}>Add to Cart</button>
                <div><button onClick={() => dispatch(removeFromCart(product))}>Remove from Cart</button></div>
                <div><button onClick={() => dispatch(EmptyCart())}>Empty Cart</button></div>
            </div> */}

            {/* <div><button onClick={() => dispatch(productList())}>Get Product List</button></div> */}
            {/* <span>{result}</span> */}

            <div className='product-container'>
                {
                    result.slice(page * 4 - 4, page * 4).map((item) => {
                        return (
                            <div className='product-item' key={item.id}>
                                <br />
                                <div> ID: {item.id} </div>
                                <div> Name: {item.name}</div>
                                <div> Color: {item.color}</div>
                                <div> Price: {item.price}</div>
                                <div> Category: {item.category}</div>
                                <div> Brand: {item.brand}</div>
                                <br />
                                <div>
                                    <button onClick={() => dispatch(addtoCart(item))} >Add to Cart</button>
                                    <button onClick={() => dispatch(removeFromCart(item.id))} >Remove from Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {result.length > 0 && <div className='pagination'>
                <span onClick={() => handlePageChane(page - 1)}>◀</span>
                <span>{page}</span>
                <span onClick={() => handlePageChane(page + 1)}>▶</span>

            </div>}


        </div>
    )
}

export default Main