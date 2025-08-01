/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(LocalizedFormat);
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const fullMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/* eslint-disable @typescript-eslint/no-unused-vars */
export const getShortDayName = () => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const today = new Date().getDay();
  return days[today];
};

export const getTimeWithMerridean = (date: string) => {
  if (!date) return '';
  return dayjs(date).format('h:mm A');
};

export const getFormattedDate = (date?: string) => {
  if (!date) return '';
  return dayjs(date).format('LL');
};

export const formatDate = (
  dateValue: any = Date.now(),
  forInputTag?: boolean,
  showTime?: boolean
): string => {
  if (!dateValue) return '';
  const date = new Date(dateValue);
  const year = date.getFullYear();
  const monthAbbreviated = months[date.getMonth()];
  // const monthFull = fullMonths[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');

  if (forInputTag) {
    return dayjs(date).format('DD MMMM YYYY');
  } else if (showTime) {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 in 12-hour clock
    const time = `${formattedHours}:${minutes} ${ampm}`;
    return time;
  } else {
    const monthName = monthAbbreviated;

    return `${year}-${monthName}-${day}`;
  }
};
