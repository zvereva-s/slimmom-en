import { createSlice } from '@reduxjs/toolkit';

import {
  fetchDayInfo,
  fetchUserInfo,
  addDayProduct,
  removeProduct,
  logoutUser,
  getDayInfoByDate,
} from './userAte-operations';
import { pending, rejected } from 'services/utils/utils';
import { dateRevers } from 'services/utils/utils';

const initialState = {
  days: [],
  date: dateRevers(new Date()),

  loading: false,
  error: null,
  removeError: null,
};

const userAteSlice = createSlice({
  name: 'userAte',
  initialState,

  extraReducers: {
    [fetchDayInfo.pending]: pending,
    [fetchDayInfo.rejected]: rejected,
    [fetchDayInfo.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.error = null;
      store.date = payload.date;
      store.days = [
        ...store.days.filter(({ _id }) => _id !== payload.response.id),
        {
          _id: payload.response.id,
          date: payload.date,
          eatenProducts: payload.response.eatenProducts,
          daySummary: payload.response.daySummary,
        },
      ];
    },

    [fetchUserInfo.pending]: pending,
    [fetchUserInfo.rejected]: rejected,
    [fetchUserInfo.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: null,
      days: [...payload.days],
    }),

    [addDayProduct.pending]: pending,
    [addDayProduct.rejected]: rejected,
    [addDayProduct.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.error = null;
      store.days = store.days.map(el => {
        if (el.date === payload[payload.day ? 'day' : 'newDay'].date) {
          return {
            ...el,
            ...payload[payload.day ? 'day' : 'newDay'],
            daySummary:
              payload[payload.daySummary ? 'daySummary' : 'newSummary'],
          };
        }
        return el;
      });
    },

    [removeProduct.pending]: pending,
    [removeProduct.rejected]: rejected,
    [removeProduct.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.error = null;
      store.days = store.days.map(day => {
        if (day.date === payload.newDaySummary.date) {
          return {
            ...day,
            eatenProducts: day.eatenProducts.filter(
              product => product.id !== payload.productId
            ),
          };
        }
        return day;
      });
    },

    [logoutUser.pending]: pending,
    [logoutUser.rejected]: rejected,
    [logoutUser.fulfilled]: () => ({ ...initialState }),

    [getDayInfoByDate.pending]: pending,
    [getDayInfoByDate.rejected]: rejected,
    [getDayInfoByDate.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.error = null;
      store.days = store.days.map(el => {
        if (el.date === payload.date) {
          return { ...el, daySummary: payload.response.daySummary };
        }
        return el;
      });
    },
  },
});

export default userAteSlice.reducer;
