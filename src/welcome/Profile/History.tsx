import React from 'react';
import { useToggle } from 'ahooks';
import { Button, Divider, Modal } from 'antd';

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

const History = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);

  return (
    <>
      <Button
        onClick={open}
        type="primary"
        ghost
        shape="round"
        className="!text-sm !w-[90px] !h-[28px]"
      >
        Claim History
      </Button>
      <Modal onCancel={close} open={isOpen} width={553} footer={null}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32] mt-[18px]">
            Buy Shares of Willaim
          </h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div className="mt-6 flex items-center w-full">
            <div className="flex items-center space-x-[10px]">
              <span className="text-[#2E2E32] text-xl font-bold">Reward:</span>
              <div className="flex flex-col space-y-[6px]">
                <span className="text-xl leading-[20px] font-medium">$294.3</span>
                <div className="flex items-center space-x-1">
                  <Icon />
                  <span className="text-[#919099] text-sm font-medium">0.2</span>
                </div>
              </div>
            </div>
          </div>

          <Divider />
        </div>
      </Modal>
    </>
  );
};

export default History;
