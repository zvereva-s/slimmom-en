import { createSlice } from "@reduxjs/toolkit";
import { getDailyRate, getDailyRateByUserId } from "./daily-operations";
import { pending, rejected } from 'services/utils/utils';

const initialState = {
    userRate: {},
    loading: false,
    error: null,
};

const dailySlice = createSlice({
    name: 'daily',
    initialState,
    extraReducers: {
        [getDailyRate.pending]: pending,
        [getDailyRate.rejected]: rejected,
        [getDailyRate.fulfilled]: (store, { payload }) => ({ ...store, loading: false, userRate: payload }),

        [getDailyRateByUserId.pending]: pending,
        [getDailyRateByUserId.rejected]: rejected,
        [getDailyRateByUserId.fulfilled]: (store, { payload }) => {
            return ({ ...store, loading: false, userRate: payload })},

    }
})

export default dailySlice.reducer;