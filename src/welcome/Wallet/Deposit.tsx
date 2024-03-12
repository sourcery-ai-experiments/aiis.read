import React from 'react';
import { useToggle } from 'ahooks';

import { BasicButton, PrimaryButton } from '../../components/Button';
import Modal from '../../components/Modal';
import TruncateText from '../../components/TruncateText';
import useGlobalUserStore from '../../store/useGlobalUserStore';

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

const Deposit = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);
  const accounts = useGlobalUserStore((state) => state.accounts);

  return (
    <>
      <BasicButton
        classes={{
          outlined:
            '!py-[10px] !px-[38px] !w-[170px] !text-[#0F1419] !border-[#0F1419] hover:!border-[#9A6CF9]',
        }}
        onClick={open}
      >
        Deposit
      </BasicButton>
      <Modal onClose={close} open={isOpen} width={553}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32]">Deposit</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div className="w-full mt-6 space-y-[14px]">
            <div className="flex flex-col space-y-[14px]">
              <span className="text-[#919099] text-base font-medium">Network</span>
              <div className="pl-[26px] py-[18px] rounded-[8px] bg-[#F7F9FA] text-base font-medium text-[#1A1D1F]">
                Blast
              </div>
            </div>
            <div className="flex flex-col space-y-[14px]">
              <span className="text-[#919099] text-base font-medium">Address</span>
              <div className="pl-[26px] py-[18px] rounded-[8px] bg-[#F7F9FA] text-base font-medium text-[#1A1D1F]">
                {accounts[0] ?? '0x0'}
              </div>
            </div>
            <div className="flex flex-col space-y-[14px]">
              <span className="text-[#919099] text-base font-medium">Asset</span>
              <div className="pl-[26px] py-[18px] rounded-[8px] bg-[#F7F9FA] text-base font-medium text-[#1A1D1F]">
                ETH
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full my-[30px]">
            <BasicButton
              classes={{
                outlined: '!py-[10px] !px-[38px] !w-[184px] !text-[#0F1419] !border-[#0F1419]',
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
                contained: '!py-[10px] !px-[38px] !w-[184px]',
              }}
            >
              <span className="text-[15px] font-medium">Copy Address</span>
            </PrimaryButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Deposit;
