import React, { FC, useEffect, useState } from 'react';

import useProfileModal from '../../../store/useProfileModal';

import '../../../tailwind.css';

interface UserPagePriceProps {
  price: string;
  id: string;
}

export const UserPagePrice: FC<UserPagePriceProps> = ({ price, id }) => {
  const [elementWidth, setElementWidth] = useState<number | null>(null);

  useEffect(() => {
    const getElementWidthByXPath = (xpath: string): number | null => {
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
    };

    const xpath =
      '/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div/div[2]/div[1]/div/div[1]/div/div';

    const width = getElementWidthByXPath(xpath);
    setElementWidth(width);
  }, []); // This effect runs only once after the initial render

  console.log(elementWidth);

  const useWidth = elementWidth != null ? elementWidth : 0;
  const { openProfile } = useProfileModal((state) => ({ ...state }));

  return (
    <span
      id={id}
      onClick={openProfile}
      style={{ left: `${useWidth + 12}px` }}
      className="absolute top-[-1px] flex h-[25px] w-[110px] grow-0 cursor-pointer items-center justify-center rounded-full bg-[#9A6CF9] !px-[17px] text-center"
    >
      <svg
        width="11"
        height="17"
        viewBox="0 0 11 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_195_10161)">
          <path d="M5.5005 16.9065V12.6882L0.156982 9.63672L5.5005 16.9065Z" fill="white" />
          <path
            d="M5.51807 16.9065V12.6882L10.8617 9.63672L5.51816 16.9065H5.51807Z"
            fill="#E6DDDD"
          />
          <path d="M5.50062 11.6399V6.25635L0.0957031 8.61963L5.50062 11.6399Z" fill="white" />
          <path d="M5.51807 11.6399V6.25635L10.923 8.61972L5.51807 11.6399Z" fill="#E6DDDD" />
          <path d="M0.0957031 8.62L5.50053 0.09375V6.25662L0.0957031 8.62Z" fill="white" />
          <path d="M10.9231 8.62L5.51831 0.09375V6.25662L10.9231 8.62Z" fill="#E6DDDD" />
        </g>
        <defs>
          <clipPath id="clip0_195_10161">
            <rect width="11" height="17" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p className="ml-[4px] text-[12px] font-medium text-white">{price}</p>
    </span>
  );
};
