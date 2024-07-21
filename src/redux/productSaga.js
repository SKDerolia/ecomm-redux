import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';
// takeEvery 

function* getProducts() {
    let data = yield fetch("http://localhost:3500/products");
    data = yield data.json()
    // console.warn("action Product List in Saga", data)
    yield put({ type: SET_PRODUCT_LIST, data: data })
    // console.log("API Called here")
}
// ab is action ko call kaise karna h iska ek or method hota h put

function* searchProduct(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result = yield result.json()
    console.warn("action Product List search in Saga", data)
    yield put({ type: SET_PRODUCT_LIST, data: result })
}


function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts) // takes 2 parameter -> 1st is when to be called, function call
    yield takeEvery(SEARCH_PRODUCT, searchProduct)
} //generator function

export default productSaga;