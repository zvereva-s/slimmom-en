import { createOperation } from 'services/utils/utils';
import * as userDayFood from 'services/api/userDayFood';

export const fetchDayInfo = createOperation('userAte/fetch', userDayFood.fetchDayInfo);
export const fetchUserInfo = createOperation('userAte/fetchUser', userDayFood.fetchUserInfo);

export const addDayProduct = createOperation('userAte/add', userDayFood.postDayProduct);
export const removeProduct = createOperation('userAte/remove', userDayFood.deleteEatenProduct);