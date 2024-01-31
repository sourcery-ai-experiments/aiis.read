import React from 'react';
import { useToggle } from 'ahooks';
import { Button, Modal, Space } from 'antd';

import Avatar from '../assets/avatar.png';

import BuyModal from './BuyModal';
import SellModal from './SellModal';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
    <g clipPath="url(#clip0_410_42042)">
      <path d="M5.00056 16.9065V12.6882L0.142822 9.63672L5.00056 16.9065Z" fill="#C7C7E0" />
      <path d="M5.0166 16.9065V12.6882L9.87443 9.63672L5.01669 16.9065H5.0166Z" fill="#A3A3D2" />
      <path d="M5.00048 11.6404V6.25684L0.0869141 8.62012L5.00048 11.6404Z" fill="#C7C7E0" />
      <path d="M5.0166 11.6404V6.25684L9.93017 8.62021L5.0166 11.6404Z" fill="#A3A3D2" />
      <path d="M0.0869141 8.62L5.00039 0.09375V6.25662L0.0869141 8.62Z" fill="#C7C7E0" />
      <path d="M9.93008 8.62L5.0166 0.09375V6.25662L9.93008 8.62Z" fill="#A3A3D2" />
    </g>
    <defs>
      <clipPath id="clip0_410_42042">
        <rect width="10" height="17" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ProfileModal = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);

  return (
    <>
      <Button onClick={open} shape="round" className="!w-[184px] !h-[46px]">
        <span className="text-[15px] font-medium">Profile</span>
      </Button>
      <Modal onCancel={close} open={isOpen} width={626} footer={null}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32] mt-[18px]">Profile</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div className="flex mt-6 items-center justify-between w-full">
            <div className="flex items-center space-x-[14px]">
              <img src={Avatar} alt="avatar" className="w-[75px] h-[75px] rounded-full" />
              <div className="flex flex-col space-y-[6px]">
                <span className="text-[#0F1419] text-[20px] leading-[20px] font-bold">
                  Devonkokl
                </span>
                <span className="text-[#919099] text-[16px] leading-[16px] font-medium">@Idoc</span>
                <div className="flex items-center space-x-1">
                  <span className="text-[#2E2E32] text-sm font-bold">Floor Price:</span>
                  <Icon />
                  <span className="text-sm">0.2</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <BuyModal />
              <SellModal />
            </div>
          </div>

          <div className="mt-3 mb-6 h-[1px] bg-[#EBEEF0] w-full"></div>

          <div className="w-full">
            <Space size={30}>
              <Button type="primary" shape="round" className="!h-[34px] !bg-black">
                Holders (20)
              </Button>
              <Button shape="round" className="!h-[34px]">
                Holders (16)
              </Button>
              <Button shape="round" className="!h-[34px]">
                Tweet Ranking
              </Button>
            </Space>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProfileModal;
