import instanceToken from './auth';

export async function searchProductInfo(product) {
  const { data } = await instanceToken.get('/product', {
    params: {
      search: product,
    },
  });
  return data;
}
export async function postDayProduct(product) {
  const { data } = await instanceToken.post('/day', product);
  return data;
}
export async function deleteEatenProduct(product) {
  const { data } = await instanceToken.delete('/day', { data: product });
  return { ...data, productId: product.eatenProductId };
}
export async function fetchDayInfo(date) {
  const { data: response } = await instanceToken.post('/day/info', { date });
  return { response, date };
}
export async function fetchUserInfo() {
  const { data: result } = await instanceToken.get('/user');
  return result;
}
