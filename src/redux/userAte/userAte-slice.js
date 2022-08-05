import { createSlice } from '@reduxjs/toolkit';

import { fetchDayInfo, fetchUserInfo, addDayProduct, removeProduct } from './userAte-operations';
import { pending, rejected } from 'services/utils/utils';
import { dateRevers } from 'services/utils/utils';

const initialState = {
    days: [],
    date: dateRevers(new Date()),

    loading: false,
    error: null,
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
            store.days = [...store.days.filter(({ _id }) => _id !== payload.response.id), {
                _id: payload.response.id,
                date: payload.date,
                eatenProducts: payload.response.eatenProducts,
                daySummary: payload.response.daySummary,
            }];
        },

        [fetchUserInfo.pending]: pending,
        [fetchUserInfo.rejected]: rejected,
        [fetchUserInfo.fulfilled]: (store, { payload }) => ({
            ...store, loading: false, error: null,
            days:[...payload.days],
        }),

        [addDayProduct.pending]: pending,
        [addDayProduct.rejected]: rejected,
        [addDayProduct.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.error = null;
            store.days = [...store.days, {
                ...store.days.find((el) => {        
                    if (el.date === payload.day.date || el.date === payload.newDay.date) {
                        el = {...el, ...payload.day} || {...el, ...payload.newDay};
                    }
                    return el;
                })
            }] || store.days.push(payload.day) || store.days.push(payload.newDay);
        },

        [removeProduct.pending]: pending,
        [removeProduct.rejected]: rejected,
        [removeProduct.fulfilled]: (store, { payload }) => {
            console.log('delete payload', payload);

            store.loading = false;
            store.error = null;
            store.days = [...store.days,
            { ...store.days.find((el) => el.date === payload.date || el.date === payload.newDaySummary).eatenProducts.filter(el => el.id !== payload.id || el.id !== payload.newDaySummary.id) }]
        },

    }
})

export default userAteSlice.reducer
