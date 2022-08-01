import { createOperation } from 'services/utils/utils';
import { postDailyRate } from '../../services/api/daily-rate';

export const getDailyRate = createOperation('daily/getRate', postDailyRate);
