// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'; // if using redux toolkit
import combineReducers from './rootReducer'
import productSaga from './productSaga'
import createSagaMiddleware from 'redux-saga'

// const store = createStore(combineReducers)


const sagaMiddleware = createSagaMiddleware()
const store = configureStore(
    {
        reducer: combineReducers,
        middleware: () => [sagaMiddleware]
    }
)

sagaMiddleware.run(productSaga)
export default store;