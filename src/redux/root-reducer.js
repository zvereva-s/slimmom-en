import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

import authReducer from 'redux/auth/auth-slice';


const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
}

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth:persistAuthReducer, 
})

export default rootReducer;