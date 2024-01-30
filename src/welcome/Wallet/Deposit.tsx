import React from 'react';
import { useToggle } from 'ahooks';
import { Button, Form, Modal } from 'antd';

const Deposit = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);

  return (
    <>
      <Button onClick={open} shape="round" className="!w-[184px] !h-[46px]">
        <span className="text-[15px] font-medium">Deposit</span>
      </Button>
      <Modal onCancel={close} open={isOpen} width={533} footer={null}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32] mt-[18px]">Deposit</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <Form layout="vertical" className="w-full !mt-6">
            <Form.Item
              name="network"
              label={<span className="text-[#919099] font-medium">Network</span>}
            >
              <div className="pl-[26px] py-[18px] rounded-[8px] bg-[#F7F9FA] text-base font-medium text-[#1A1D1F]">
                Blast
              </div>
            </Form.Item>
            <Form.Item
              name="address"
              label={<span className="text-[#919099] font-medium">Address</span>}
            >
              <div className="pl-[26px] py-[18px] rounded-[8px] bg-[#F7F9FA] text-base font-medium text-[#1A1D1F]">
                0x415eB....c2764fd
              </div>
            </Form.Item>
            <Form.Item
              name="Asset"
              label={<span className="text-[#919099] font-medium">Asset</span>}
            >
              <div className="pl-[26px] py-[18px] rounded-[8px] bg-[#F7F9FA] text-base font-medium text-[#1A1D1F]">
                ETH
              </div>
            </Form.Item>
          </Form>
          <div className="flex justify-between w-full mt-4">
            <Button shape="round" className="!w-[184px] !h-[46px]">
              <div className="flex space-x-2 items-center justify-center">
                <span className="text-[15px] font-medium">Go Back</span>
              </div>
            </Button>
            <Button type="primary" shape="round" className="!w-[184px] !h-[46px]">
              <span className="text-[15px] font-medium">Copy Address</span>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Deposit;
