
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import labnote from './store/reducer/labnote'
const Rootreducer =
    combineReducers({
        data: labnote
    });


export const store = configureStore({
    reducer: Rootreducer

})