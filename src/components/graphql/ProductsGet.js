import React from 'react'
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client';

const QUERY_ALL_PRODUCTS = gql`
    query getProducts{
        products {
            id
            name
            color
            price
            category
            brand
        }  
    }
`

const ProductsGet = () => {

    const { data, loading, refetch } = useQuery(QUERY_ALL_PRODUCTS)
    console.log(data, " data")

    return (
        <div>ProductsGet</div>
    )
}

export default ProductsGet