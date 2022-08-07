import { createAsyncThunk } from "@reduxjs/toolkit";

import { createOperation } from 'services/utils/utils';
import { login, signup, logout, getCurrent } from '../../services/api/auth';
import {postDailyRateByUserId} from '../../services/api/daily-rate'

export const signupRequest = createOperation('auth/signup', signup);
export const loginRequest = createOperation('auth/login', login);
export const logoutRequest = createOperation('auth/logout', logout);
export const authUserInfo = createOperation('auth/userInfo',postDailyRateByUserId)

export const getCurrentRequest=createAsyncThunk(
        'auth/current',
        async (_, { rejectWithValue , getState})=> {
            try {
            const { auth } = getState();
            const response = await getCurrent(auth.token);  
            return response;
         }
            catch (error) {
            return rejectWithValue(error.message)
        }
    },
    {condition: (_, { getState }) => {
        const { auth } = getState();
        if (!auth.token) {
            return false; 
           }
       }}
)