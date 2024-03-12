import React from 'react';

/**
 * 从内容中间裁剪而不是末尾裁剪的组件，可以让省略号出现在中间
 */
export type TruncateTextProps = {
  text: string;
  /**
   * 前半部分内容长度
   * @default 4
   */
  startLength?: number;
  /**
   * 后半部分内容长度
   * @default 4
   */
  endLength?: number;
};
export default function TruncateText({ text, startLength = 4, endLength = 4 }: TruncateTextProps) {
  const startStr = text.substring(0, startLength);
  const endStr = text.substring(text.length - endLength);
  return <span>{truncateText({ text, startLength, endLength })}</span>;
}

export function truncateText({ text, startLength = 4, endLength = 4 }: TruncateTextProps) {
  if (text == null) return '0x0';
  const startStr = text.substring(0, startLength);
  const endStr = text.substring(text.length - endLength);
  return `${startStr}...${endStr}`;
}
