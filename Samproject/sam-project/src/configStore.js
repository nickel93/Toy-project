import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './store/reducer/user'

const RootReducer = combineReducers({
    user: user,
});

export const store = configureStore({
    reducer: RootReducer
});
