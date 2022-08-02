import axios from 'axios';
import instanceToken from './auth';

const instanceClear = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
});

export async function postDailyRate(obj) {
  const { data } = await instanceClear.post('/daily-rate', obj);
  return data;
}

export async function postDailyRateByUserId(userID, obj) {
  const { data } = await instanceToken.post(`/daily-rate/${userID}`, obj);
  return data;
}
