import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://slimmom-backend.goit.global/'
});
const setToken = (token = '') => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = '';
}


export async function signup(data) {
    const { data: result } = await instance.post('/auth/register', data);
    return result;
}

export async function login(data) {
    const { data: result } = await instance.post('/auth/login', data);
    setToken(result.accessToken);
    return result;
}

export function logout() {
    setToken('');
}

export async function getCurrent(token) {
    try {
        setToken(token);
        const { data: result } = await instance.get('/user');

        console.log(result);
        return result;
    }
    catch (error) {
        setToken('');
        throw error;
    }
    
}

export default instance;