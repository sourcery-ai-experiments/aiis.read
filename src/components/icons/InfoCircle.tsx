import { SVGProps } from 'react';

export function InfoCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2046_18544)">
        <path
          d="M9 16.5C11.071 16.5 12.9461 15.6605 14.3033 14.3033C15.6605 12.9461 16.5 11.071 16.5 9C16.5 6.92895 15.6605 5.05395 14.3033 3.6967C12.9461 2.33947 11.071 1.5 9 1.5C6.92895 1.5 5.05395 2.33947 3.6967 3.6967C2.33947 5.05395 1.5 6.92895 1.5 9C1.5 11.071 2.33947 12.9461 3.6967 14.3033C5.05395 15.6605 6.92895 16.5 9 16.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 7.15579C9.51776 7.15579 9.9375 6.73605 9.9375 6.21829C9.9375 5.70053 9.51776 5.28079 9 5.28079C8.48224 5.28079 8.0625 5.70053 8.0625 6.21829C8.0625 6.73605 8.48224 7.15579 9 7.15579Z"
          fill="currentColor"
        />
        <path
          d="M9 8.68362L9 11.7564"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2046_18544">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
