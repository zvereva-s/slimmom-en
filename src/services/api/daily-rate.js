import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://slimmom-backend.goit.global/'
});

export async function postDailyRate(obj) {
    const { data } = await instance.post('/daily-rate', obj);
    return data;
} 