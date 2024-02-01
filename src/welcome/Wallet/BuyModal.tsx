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

const BuyModal = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);

  return (
    <>
      <PrimaryButton
        onClick={open}
        classes={{
          contained: '!w-[86px] !px-[30px] !py-[10px]',
        }}
      >
        Buy
      </PrimaryButton>
      <Modal onClose={close} open={isOpen} width={553}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32]">Buy Shares of Willaim</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div className="mt-6 flex items-center self-start space-x-[6px]">
            <span className="text-[#2E2E32] font-bold text-xl">Price:</span>
            <Icon />
            <span className="text-xl font-medium">0.2</span>
          </div>

          <div className="mt-6 rounded-[8px] border border-[#EBECED] py-5 px-6 flex items-center justify-between w-full">
            <span className="font-medium">Amount</span>
            <span className="font-medium">2</span>
          </div>

          <div className="mt-4 flex items-center space-x-1 self-end">
            <span className="text-sm">Minimum unit: </span>
            <span className="text-sm font-medium">0.1 </span>
          </div>

          <Divider
            sx={{
              marginTop: 3,
              width: '100%',
              borderColor: '#EBEEF0',
            }}
          />

          <div className="space-y-4 w-full">
            <div className="flex items-center justify-between">
              <span className="text-[#919099] text-lg font-medium">From</span>
              <span className="text-lg font-medium">0x41...64fd</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#919099] text-lg font-medium">To</span>
              <span className="text-lg font-medium">0x41...64fd</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Transaction Fee</span>
              <div className="flex items-center space-x-1">
                <Icon />
                <span className="text-lg font-medium">0.002</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Est. Gas Fee</span>
              <div className="flex items-center space-x-1">
                <Icon />
                <span className="text-lg font-medium">0.002</span>
              </div>
            </div>
          </div>

          <Divider
            sx={{
              marginTop: 3,
              width: '100%',
              borderColor: '#EBEEF0',
            }}
          />

          <div className="space-y-4 w-full">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">You Pay(Including Fees)</span>
              <div className="flex items-center space-x-1">
                <Icon />
                <span className="text-2xl font-bold">0.052</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#919099] text-lg font-medium">Wallet Balance</span>
              <div className="flex items-center justify-center bg-[#F5F5F5] rounded-full space-x-1 px-5 py-1">
                <Icon />
                <span className="text-lg font-medium">20.2928</span>
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
              <span className="text-[15px] font-medium">Buy</span>
            </PrimaryButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BuyModal;
