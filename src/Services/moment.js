import moment from 'moment';
import 'moment/locale/ru';

export const toDaysDate = moment().format().slice(0, 10);
const yearAndMonth = toDaysDate.slice(0, 8);
const day = Number(toDaysDate.slice(-2)) + 1;
export const tomorrowsDate = `${yearAndMonth}${day.toString().length === 2 ? '' : '0'}${day}`;

export const getStartDateFormat = (date) => {
  return moment(date || toDaysDate).format().slice(0, 10);
}

export const getEndDateFormat = (date) => {
  return moment(date || tomorrowsDate).format().slice(0, 10);
}

export const getDateFromDT = (date, format) => {
  return moment(date * 1000).locale('ru').format(format);
};
