import { createOperation } from 'services/utils/utils';
import { postDailyRate, postDailyRateByUserId } from 'services/api/daily-rate';

export const getDailyRate = createOperation('daily/getRate', postDailyRate);
export const getDailyRateByUserId = createOperation('daily/getRateById', postDailyRateByUserId);
