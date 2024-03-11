import React from 'react';
import BigNumber from 'bignumber.js';

/**
 * 展示 bignumber 组件
 *
 * eg. 0.0{4}5252
 */
export function NumberDisplayer({ text = '0' }: { text?: string }) {
  const number = new BigNumber(text).dividedBy(new BigNumber(Math.pow(10, 18))).toFixed();
  const [valueBeforeDot, valueAfterDot] = number.split('.');
  let value;
  if (valueAfterDot == null) {
    value = '00';
  } else if (BigNumber(valueBeforeDot).gte(1)) {
    value = BigNumber(`0.${valueAfterDot}`).toFixed(2).split('.')[1];
  } else if (
    BigNumber(valueBeforeDot).isLessThan(1) &&
    BigNumber(`0.${valueAfterDot}`).gte(0.0001)
  ) {
    // 展示完整, 四舍五入
    value = BigNumber(`0.${valueAfterDot}`).toFixed(4).split('.')[1];
  } else {
    const lastZeroIndex = valueAfterDot.lastIndexOf('0');
    const zeroCount = valueAfterDot.substring(0, lastZeroIndex + 1).length;
    const noneZeroValue = valueAfterDot.substring(lastZeroIndex + 1);
    const [, noneZeroRealValue] = (+`0.${noneZeroValue}`).toFixed(4).split('.');
    value = `0{${zeroCount}}${noneZeroRealValue}`;
  }
  return (
    <span>
      {valueBeforeDot}.{value}
    </span>
  );
}
