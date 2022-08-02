import { createSlice } from '@reduxjs/toolkit';
import { getDayInfo, searchProductInfo, addDayProduct, removeEatenProduct } from './diary-operations';
import { pending, rejected } from 'services/utils/utils';

const initialState = {
    search: [],
    product: {},
    dateInfo: {},
    eatenProducts:[],

    loading: false,
    removeLoading: false,
    addLoading: false,
    error: null,
};

const diarySlice = createSlice({
    name: 'diary',
    initialState,
    extraReducers: {
        [getDayInfo.pending]: pending,
        [getDayInfo.rejected]: rejected,
        [getDayInfo.fulfilled]: (store, { payload }) => ({...store, loading: false, error: null, dateInfo: payload }),
        
        [searchProductInfo.pending]: pending,
        [searchProductInfo.rejected]: rejected,
        [searchProductInfo.fulfilled]: (store, { payload }) => ({ ...store, loading: false, error: null, search: payload }),
        
        [addDayProduct.pending]: pending,
        [addDayProduct.rejected]: rejected,
        [addDayProduct.fulfilled]: (store, { payload }) => ({ ...store, loading: false, error: null, eatenProducts: [...payload] }),
        
        [removeEatenProduct.pending]: pending,
        [removeEatenProduct.rejected]: rejected,
        [removeEatenProduct.fulfilled]:(store, { payload }) => ({ ...store, loading: false, error: null, eatenProducts: store.eatenProducts.filter(el => el.id !== payload.eatenProductId && el.data !== payload.dayId) }),

    }
})

export default diarySlice.reducer;