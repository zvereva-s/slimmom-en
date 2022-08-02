import { createOperation } from 'services/utils/utils';
import * as diaryApi from 'services/api/diari';

export const getDayInfo = createOperation('diary/fetch', diaryApi.fetchDayInfo);

export const searchProductInfo = createOperation('diary/search', diaryApi.searchProductInfo);

export const addDayProduct = createOperation('diary/add');

export const removeEatenProduct = createOperation('diary/remove');
