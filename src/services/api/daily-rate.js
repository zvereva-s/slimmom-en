import axios from 'axios';
import instanceToken from './auth';

const instanceClear = axios.create({
    baseURL: 'https://slimmom-backend.goit.global/'
});

export async function postDailyRate(obj) {
    const { data } = await instanceClear.post('/daily-rate', obj);
    return data;
} 


export async function postDailyRateByUserId({data,userId}) {
    const { data:response } = await instanceToken.post(`/daily-rate/${userId}`, data);
    return response;
}

