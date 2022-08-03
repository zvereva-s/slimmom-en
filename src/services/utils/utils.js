import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';

export const createOperation = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const response = await request(data);
        return response;
      } catch (error) {
        NotificationManager.error(`Something goes wrong...`);
        return rejectWithValue(error);
      }
    },
    { condition }
  );
};

export const pending = store => ({ ...store, loading: true, error: null });
export const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload,

  removeLoading: false,
  addLoading: false,
});

export const dateRevers = date =>
  date.toLocaleDateString().replaceAll('.', '-').split('-').reverse().join('-');

export const convertDate = date => {
  const [year, mounth, day] = date.split('-');
  const newDate = new Date(year, mounth - 1, day);
  return newDate;
};
