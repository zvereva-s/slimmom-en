import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://slimmom-backend.goit.global/'
});

export async function postDailyRate(data) {
    const { response } = await instance.post('/daily-rate', data);
    return response;
} 