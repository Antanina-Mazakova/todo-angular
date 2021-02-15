import * as moment from 'moment';

export const getTimestamp = (date?: string): number => (moment(date)).startOf('day').valueOf();

