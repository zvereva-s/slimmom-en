import { createSlice } from '@reduxjs/toolkit';
import {
  signupRequest,
  loginRequest,
  logoutRequest,
  getCurrentRequest,
} from '../auth/auth-operations';
import { pending, rejected } from 'services/utils/utils';

const initialState = {
  user: {},
  userInfo: {
    todaySummary: {},
    notAllowedProducts: [],
  },
  token: '',
  isLogin: false,

  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => {
  console.log(payload);
  store.loading = false;
  store.error = null;
  store.user = {
    email: payload.user.email,
    username: payload.user.username,
    id: payload.user.id,
  };
  store.userInfo = {
    todaySummary: payload.todaySummary,
    notAllowedProducts: payload.user.userData.notAllowedProducts,
  };
  store.token = payload.accessToken;
  store.isLogin = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signupRequest.pending]: pending,
    [signupRequest.rejected]: rejected,
    [signupRequest.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.error = null;
      store.user = payload;
      store.isLogin = false;
    },

    [loginRequest.pending]: pending,
    [loginRequest.rejected]: rejected,
    [loginRequest.fulfilled]: fulfilled,

    [logoutRequest.pending]: pending,
    [loginRequest.rejected]: rejected,
    [logoutRequest.fulfilled]: () => ({ ...initialState }),

    [getCurrentRequest.pending]: pending,

    [getCurrentRequest.rejected]: rejected,
    [getCurrentRequest.fulfilled]: (store, { payload }) => {
      console.log('current', payload);
      return {
        ...store,
        loading: false,
        error: null,
        user: {
          email: payload.email,
          username: payload.username,
          id: payload.id,
        },
        userInfo: {
          todaySummary: payload.daySummary,
          notAllowedProducts: payload.userData.notAllowedProducts,
        },
        isLogin: true,
      };
    },
    //
  },
});
export default authSlice.reducer;
