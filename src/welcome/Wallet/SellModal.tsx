import React from 'react';
import { Divider } from '@mui/material';
import { useToggle } from 'ahooks';

import { BasicButton, PrimaryButton } from '../../components/Button';
import Modal from '../../components/Modal';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
    <g clipPath="url(#clip0_365_20589)">
      <path d="M7.50072 23.8686V17.9135L0.214111 13.6055L7.50072 23.8686Z" fill="#C7C7E0" />
      <path d="M7.52466 23.8686V17.9135L14.8114 13.6055L7.52479 23.8686H7.52466Z" fill="#A3A3D2" />
      <path d="M7.50084 16.4334V8.83301L0.130493 12.1694L7.50084 16.4334Z" fill="#C7C7E0" />
      <path d="M7.52466 16.4334V8.83301L14.895 12.1695L7.52466 16.4334Z" fill="#A3A3D2" />
      <path d="M0.130493 12.1689L7.50071 0.131836V8.83236L0.130493 12.1689Z" fill="#C7C7E0" />
      <path d="M14.8951 12.1689L7.5249 0.131836V8.83236L14.8951 12.1689Z" fill="#A3A3D2" />
    </g>
    <defs>
      <clipPath id="clip0_365_20589">
        <rect width="15" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Icon1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
    <g clipPath="url(#clip0_365_21061)">
      <path d="M5.00032 17.4065V13.1882L0.142578 10.1367L5.00032 17.4065Z" fill="#C7C7E0" />
      <path d="M5.0166 17.4065V13.1882L9.87443 10.1367L5.01669 17.4065H5.0166Z" fill="#A3A3D2" />
      <path d="M5.00048 12.1404V6.75684L0.0869141 9.12012L5.00048 12.1404Z" fill="#C7C7E0" />
      <path d="M5.0166 12.1404V6.75684L9.93017 9.12021L5.0166 12.1404Z" fill="#A3A3D2" />
      <path d="M0.0869141 9.12L5.00039 0.59375V6.75662L0.0869141 9.12Z" fill="#C7C7E0" />
      <path d="M9.93008 9.12L5.0166 0.59375V6.75662L9.93008 9.12Z" fill="#A3A3D2" />
    </g>
    <defs>
      <clipPath id="clip0_365_21061">
        <rect width="10" height="17" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const Left = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3.68799 8H12.438"
      stroke="#2E2E32"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.37499 11.75L3.625 8L7.37499 4.25"
      stroke="#2E2E32"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SellModal = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);

  return (
    <>
      <BasicButton
        onClick={open}
        classes={{
          outlined: '!w-[86px] !px-[30px] !py-[10px]',
        }}
      >
        Sell
      </BasicButton>
      <Modal onClose={close} open={isOpen} width={553}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32]">Sell Shares of Willaim</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div className="mt-6 flex items-center w-full justify-between text-black">
            <div className="flex items-center space-x-[6px]">
              <span className="text-[#2E2E32] font-bold text-xl">Price:</span>
              <Icon />
              <span className="text-xl font-medium">0.2</span>
            </div>

            <div className="flex items-center space-x-[6px]">
              <span className="text-[#2E2E32] font-bold text-xl">You Own:</span>
              <span className="text-xl font-medium">5</span>
            </div>
          </div>

          <div className="mt-6 text-black rounded-[8px] border border-[#EBECED] py-5 px-6 flex items-center justify-between w-full">
            <span className="font-medium">Amount</span>
            <span className="font-medium">2</span>
          </div>

          <div className="mt-4 text-black flex items-center space-x-1 self-end">
            <span className="text-sm">Minimum unit: </span>
            <span className="text-sm font-medium">0.1 </span>
          </div>

          <Divider
            sx={{
              marginTop: 3,
              width: '100%',
              borderColor: '#EBEEF0',
              borderStyle: 'dashed',
            }}
          />

          <div className="space-y-4 mt-5 text-black w-full">
            <div className="flex items-center justify-between">
              <span className="text-[#919099] text-lg font-medium">From</span>
              <span className="text-lg font-medium">0x53...63re</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#919099] text-lg font-medium">To</span>
              <span className="text-lg font-medium">0x25...52fd</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Transaction Fee</span>
              <div className="flex items-center space-x-1">
                <Icon1 />
                <span className="text-lg font-medium">0.002</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Est. Gas Fee</span>
              <div className="flex items-center space-x-1">
                <Icon1 />
                <span className="text-lg font-medium">0.001</span>
              </div>
            </div>
          </div>

          <Divider
            sx={{
              marginTop: 3,
              width: '100%',
              borderColor: '#EBEEF0',
              borderStyle: 'dashed',
            }}
          />

          <div className="space-y-4 mt-5 text-black w-full">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">You Pay(Including Fees)</span>
              <div className="flex items-center space-x-1">
                <Icon1 />
                <span className="text-2xl font-bold">0.052</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#919099] text-lg font-medium">Wallet Balance</span>
              <div className="flex items-center justify-center bg-[#F5F5F5] rounded-full space-x-1 px-5 py-1">
                <Icon1 />
                <span className="text-lg font-medium">30.24</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full my-[30px]">
            <BasicButton
              classes={{
                outlined: '!py-[10px] !px-[38px] !w-[170px] !text-[#0F1419] !border-[#0F1419]',
              }}
              onClick={close}
            >
              <div className="flex space-x-2 items-center justify-center">
                <Left />
                <span className="text-[15px] font-medium">Go Back</span>
              </div>
            </BasicButton>
            <PrimaryButton
              classes={{
                contained: '!py-[10px] !px-[38px] !w-[170px]',
              }}
            >
              <span className="text-[15px] font-medium">Sell</span>
            </PrimaryButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SellModal;
