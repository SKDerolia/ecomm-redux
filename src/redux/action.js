import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant'

export const addtoCart = (data) => {
    console.log("action addtoCart", data)
    return {
        type: ADD_TO_CART,
        data: data  // yaha se dataBase me jata h
    }
}

export const removeFromCart = (data) => {
    console.log("action removeFromCart", data)
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}

export const EmptyCart = () => {
    console.log("action emptyCart")
    return {
        type: EMPTY_CART
    }
}

// we can have removetoCart, updatetoCart bi ho sakta h un sabke liye ek hi reducer to kaam me aayega