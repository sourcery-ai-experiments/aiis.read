import dayjs from 'dayjs';

export function formatTime(seconds: any) {
  if (seconds < 60) {
    return seconds + 's';
  } else if (seconds < 3600) {
    return Math.floor(seconds / 60) + 'm';
  } else if (seconds < 86400) {
    return Math.floor(seconds / 3600) + 'h';
  } else if (seconds < 2592000) {
    return Math.floor(seconds / 86400) + 'd';
  } else if (seconds < 31536000) {
    return Math.floor(seconds / 2592000) + 'M';
  } else {
    return Math.floor(seconds / 31536000) + 'y';
  }
}

export function getTimeDistanceFromDate(date: any) {
  const now = dayjs();
  const targetDate = dayjs(date);

  const secondsDiff = now.diff(targetDate, 'second');

  return formatTime(secondsDiff);
}
