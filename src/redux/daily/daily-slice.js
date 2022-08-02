import { createSlice } from "@reduxjs/toolkit";
import { getDailyRate } from "./daily-operations";
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
        [getDailyRate.fulfilled]: (store, {payload})=>({...store, loading:false, userRate:payload}),
    }
})

export default dailySlice.reducer;