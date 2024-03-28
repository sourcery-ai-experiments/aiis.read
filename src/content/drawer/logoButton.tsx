import React from 'react';

const LogoButton = () => {
  return (
    <div className="absolute right-0 m-0 h-[35px] w-[35px] cursor-pointer rounded-full">
      <img
        src="https://cdn-fe.s3.amazonaws.com/xfans/20240322-155619.png"
        className="mx-0 mt-[120px] h-[35px] w-[35px] cursor-pointer rounded-full p-0"
        alt="Logo"
        onClick={() => window.open('https://xfans.tech', '_blank')}
      />
    </div>
  );
};

export default LogoButton;
