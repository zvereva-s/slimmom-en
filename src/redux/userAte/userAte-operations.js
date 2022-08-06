import { createOperation } from 'services/utils/utils';
import { logout } from 'services/api/auth';
import * as userDayFood from 'services/api/userDayFood';

export const fetchDayInfo = createOperation('userAte/fetch', userDayFood.fetchDayInfo);
export const fetchUserInfo = createOperation('userAte/fetchUser', userDayFood.fetchUserInfo);

export const addDayProduct = createOperation('userAte/add', userDayFood.postDayProduct);
export const removeProduct = createOperation('userAte/remove', userDayFood.deleteEatenProduct);

export const logoutUser = createOperation('userAte/logout', logout)