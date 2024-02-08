import React, { FC } from 'react';

import { NextButton } from '../../components/buttons/loginButton';

import '../../tailwind.css';

interface SignInWithXPageProps {
  handleButtonClick: () => void; // 定义一个函数类型的属性
}

const SignInWithXPage: FC<SignInWithXPageProps> = ({ handleButtonClick }) => {
  return (
    <div className="w-full justify-center text-center items-center min-h-screen">
      <img
        className="mx-auto mt-[81px] mb-[32px] w-[120px] h-[120px]"
        src="https://ik.imagekit.io/pqilkfzt7wb/xfans/logo_SPGs-kd5v.png?updatedAt=1706859358184"
        alt="Logo"
      />
      <p className="text-[#0F1419] text-[24px] leading-[38px] font-bold text-center">
        Login to your account
      </p>
      <p className="text-[#5B7083] text-[14px] leading-[24px] font-normal text-center mb-[44px] px-[30px]">
        Empower early creators, make the creator economy thrive, and build a simple, yet excellent
        crypto social experience on Twitter.
      </p>
      <NextButton variant="contained" disableElevation onClick={handleButtonClick}>
        Login With X
      </NextButton>
    </div>
  );
};

export default SignInWithXPage;
