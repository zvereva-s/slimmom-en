import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';
;


export const createOperation = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const response = await request(data);
        return response;
      } catch (error) {
        
        if (error.response.data.message === "Product not found") {
          return rejectWithValue({data})
        }
        NotificationManager.error(`${error.response.data.message}`);
        return rejectWithValue({...error.message, status: error.status, response: error.response.data.message });
      }
    },
    { condition }
  );
};

export const pending = store => ({ ...store, loading: true, error: null });
export const rejected = (store, { payload }) => ({ ...store, loading: false, isLogin: false, error: { ...payload.status, ...payload.statusText }} );

export const dateRevers = date =>
  date.toLocaleDateString().replaceAll('.', '-').split('-').reverse().join('-');

export const convertDate = date => {
  const [year, mounth, day] = date.split('-');
  const newDate = new Date(year, mounth - 1, day);
  return newDate;
};
