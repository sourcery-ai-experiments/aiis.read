import React, { FC } from 'react';

import { NextButton, VerifyButton } from '../../components/buttons/loginButton';

import '../../tailwind.css';

interface CongratulationPageProps {
  handleButtonClick: () => void; // 定义一个函数类型的属性
}

const CongratulationPage: FC<CongratulationPageProps> = ({ handleButtonClick }) => {
  return (
    <div className="w-full justify-center text-center items-center min-h-screen">
      <p className="text-[#0F1419] text-[24px] leading-[38px] font-bold text-center mt-[81px] mb-[44px]">
        Congratulations!
      </p>
      <p className="text-[#5B7083] text-[14px] leading-[24px] font-normal text-center mb-[21px]">
        Complete the following tasks to activate your account
      </p>
      <div className="flex px-[58px]">
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.201305H7.09819L13.6592 8.98639L21.8261 0L23.7666 0.0335508L14.6267 10.2502L24 22.7987H16.9046L10.712 14.612L3.14694 23H1.2374L9.77267 13.4153L0 0.201305ZM6.42888 1.49866H2.6801L17.678 21.4678H21.3593L6.42888 1.49866Z"
            fill="#121516"
          />
        </svg>
        <p className="text-[#5B7083] text-[14px] w-[207px] mx-[16px] leading-[24px] font-normal text-center mb-[21px]">
          Follow @xFans on X
        </p>
        <VerifyButton variant="contained" disableElevation onClick={() => undefined}>
          verify
        </VerifyButton>
      </div>
      <div className="flex px-[58px] mb-[44px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6399 4 12.9954 4.92345 12 6.3369C11.0046 4.92345 9.36015 4 7.5 4Z"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-[#5B7083] text-[14px] w-[207px] mx-[16px] leading-[24px] font-normal text-center mb-[21px]">
          Like tweets on X
        </p>
        <VerifyButton variant="contained" disableElevation onClick={() => undefined}>
          GO
        </VerifyButton>
      </div>
      <NextButton variant="contained" disableElevation onClick={handleButtonClick}>
        Start
      </NextButton>
    </div>
  );
};

export default CongratulationPage;
