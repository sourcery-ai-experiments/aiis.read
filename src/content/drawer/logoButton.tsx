import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

const LogoButton = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="absolute right-0 top-[120px] m-0 h-[35px] w-[35px] cursor-pointer rounded-full"
    >
      <img
        src="https://cdn-fe.s3.amazonaws.com/xfans/20240328-153101.png"
        className="mx-0 h-[35px] w-[35px] cursor-pointer rounded-full p-0"
        alt="Logo"
      />
    </div>
  );
};

export default LogoButton;
