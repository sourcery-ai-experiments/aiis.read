import React from 'react';
import Dialog from '@mui/material/Dialog';
import { useToggle } from 'ahooks';
import { Button, Form, Input, Modal } from 'antd';

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

const WithDraw = () => {
  const [form] = Form.useForm();
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);
  const onFinish = () => {
    console.log();
  };

  return (
    <>
      <Button onClick={open} shape="round" className="!w-[184px] !h-[46px]">
        <span className="text-[15px] font-medium">Withdraw</span>
      </Button>
      <Modal onCancel={close} open={isOpen} width={533} footer={null}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32] mt-[18px]">Withdraw</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>
          <p className="my-6 text-black text-opacity-50 text-sm">
            Send your ETH to another wallet address on the blast network
          </p>

          <Form onFinish={onFinish} className="w-full">
            <Form.Item name="address">
              <Input placeholder="Enter Address" />
            </Form.Item>
            <Form.Item name="amout">
              <Input placeholder="Enter Amount" />
            </Form.Item>
          </Form>
          <div className="flex self-end space-x-3">
            <span className="text-sm text-[#0F1419]">Wallet Balance: </span>
            <div className="flex space-x-1 items-center">
              <Icon />
              <span className="text-[#0F1419] font-medium text-sm">0.02</span>
            </div>
          </div>
          <div className="flex justify-between w-full mt-[60px]">
            <Button shape="round" className="!w-[184px] !h-[46px]">
              <div className="flex space-x-2 items-center justify-center">
                <Left />
                <span className="text-[15px] font-medium">Go Back</span>
              </div>
            </Button>
            <Button type="primary" shape="round" className="!w-[184px] !h-[46px]">
              <span className="text-[15px] font-medium">Transfer</span>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WithDraw;
