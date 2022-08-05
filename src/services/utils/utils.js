import { createAsyncThunk } from '@reduxjs/toolkit';

export const createOperation = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const response = await request(data);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
    { condition }
  );
};

export const pending = store => ({ ...store, loading: true, error: null });
export const rejected = (store, { payload }) => ({...store, loading: false, isLogin: false, error: {...payload.status, ...payload.statusText}});

export const dateRevers = date =>
  date.toLocaleDateString().replaceAll('.', '-').split('-').reverse().join('-');

export const convertDate = date => {
  const [year, mounth, day] = date.split('-');
  const newDate = new Date(year, mounth - 1, day);
  return newDate;
};
