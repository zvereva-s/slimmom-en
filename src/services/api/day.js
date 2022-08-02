import instanceToken from './auth';

export async function postDayProduct(product) {
    const { data } = await instanceToken.post('/day', product);
    return data;
}
export async function deleteEatenProduct(product) {
    const { data } = await instanceToken.delete('/day', product);
    return data;
}
export async function fetchDayInfo(data) {
    const { data:resposne } = await instanceToken.post('/day/info', data);
    return resposne;
}