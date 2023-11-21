import { combineReducers, applyMiddleware } from "redux"
import {legacy_createStore as createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import { apiSlice } from "./slices/apiSlice"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from "./reducers/productReducers"

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

const reducer = combineReducers({
    productList: productListReducer
})


const initialState = {}

const middleware = [thunk]

//const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
