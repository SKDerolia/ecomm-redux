import { PRODUCT_LIST, SEARCH_PRODUCT } from './constant'

// https://jsonplaceholder.typicode.com/todos/1


export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT,
        query: query
    }
}

// export const setProductList = (data) => {
//     console.log("set action Product List in Action", data)
//     return {
//         type: ,
//         data: data
//     }
// }