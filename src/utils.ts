import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';
import { OAUTH2, XFANS_MIN_WIDTH, XFANS_CONTENT_WIDTH } from './constants';

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

export function getBigNumberString(numStr: string) {
  return new BigNumber(numStr)
    .dividedBy(new BigNumber(Math.pow(10, 18)))
    .toNumber()
    .toLocaleString(undefined, { maximumFractionDigits: 20 });
}

export function getElementWidthByXPath(xpath: string): number | null {
  const element = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue as HTMLElement;

  if (element) {
    return element.offsetWidth;
  } else {
    console.error('Element not found with the given XPath');
    return null;
  }
}

export function getElementRightByXPath(xpath: string): number | null {
  const element = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue as HTMLElement;
  if (element) {
    const rect = element.getBoundingClientRect();

    // 计算元素的右侧绝对位置
    const rightPosition = rect.right;
    return rightPosition;
  } else {
    console.error('Element not found with the given XPath');
    return null;
  }
}

export const caculateDrawerWidth = () => {
  if (window.location.href.includes(OAUTH2)) {
    return XFANS_MIN_WIDTH;
  }
  // 首页信息流dom
  const xPath = '/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div';
  const right = getElementRightByXPath(xPath);

  if (right === null) {
    return XFANS_MIN_WIDTH;
  }
  return Math.max(window.innerWidth - right, XFANS_MIN_WIDTH);
};

export const caculateBackWidth = () => {
  return caculateDrawerWidth() - XFANS_CONTENT_WIDTH;
};
