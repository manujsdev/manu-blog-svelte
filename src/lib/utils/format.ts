import dayjs from 'dayjs';

export function formatDate(dateToFormat: string) {
  return dayjs(dateToFormat).format('MMM D, YYYY');
}
