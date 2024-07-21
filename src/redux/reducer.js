import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant'

// we can have removetoCart, updatetoCart bi ho sakta h un sabke liye ek hi reducer to kaam me aayega
export const cartData = (data = [], action) => { //initial data, or is action(second parameter) me hamara   
    //type or data hoga action ka jo hamne banaya h 
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer ADD_TO_CART", action)
            return [action.data, ...data]

        case REMOVE_FROM_CART:
            console.warn("reducer REMOVE_FROM_CART", action)
            // let newdata = data.slice(0, -1)
            const remainingItem = data.filter((item) => item.id != action.data)
            console.log("remaining Item", remainingItem)
            return [...remainingItem];

        case EMPTY_CART:
            console.warn("reducer EMPTY_CART", action)
            data = []
            return [...data]

        default:
            return data

    }

}