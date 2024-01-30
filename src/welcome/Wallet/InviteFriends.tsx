import React from 'react';
import { useToggle } from 'ahooks';
import { Button, Col, Modal, Row, Table } from 'antd';

const Copy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M4.3335 4.14419V2.60449C4.3335 2.08673 4.75323 1.66699 5.271 1.66699H13.396C13.9138 1.66699 14.3335 2.08673 14.3335 2.60449V10.7295C14.3335 11.2473 13.9138 11.667 13.396 11.667H11.8389"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.729 4.33301H2.604C2.08624 4.33301 1.6665 4.75274 1.6665 5.27051V13.3955C1.6665 13.9133 2.08624 14.333 2.604 14.333H10.729C11.2468 14.333 11.6665 13.9133 11.6665 13.3955V5.27051C11.6665 4.75274 11.2468 4.33301 10.729 4.33301Z"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinejoin="round"
    />
  </svg>
);

const InviteFriends = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);

  return (
    <>
      <Button onClick={open} shape="round" className="!w-[184px] !h-[46px]">
        <span className="text-[15px] font-medium">InviteFriends</span>
      </Button>
      <Modal onCancel={close} open={isOpen} width={493} footer={null}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32] mt-[18px]">Invite Friends</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div
            className="mt-6 w-full bg-[#F7F9FA] rounded-[8px] border border-[#EBECED] py-[10px] relative"
            style={{ boxShadow: '3px 2px 3.5px 0px rgba(0, 0, 0, 0.05)' }}
          >
            <Row>
              <Col span={12}>
                <div className="flex flex-col items-center space-y-[14px]">
                  <span className="text-[#919099] text-sm font-medium">Your Invite</span>
                  <span className="text-[#1A1D1F] text-xl leading-[20px] font-bold">5</span>
                </div>
              </Col>
              <div className="h-[50px] w-[1px] bg-[#EBECED] absolute left-1/2 top-[12px]"></div>
              <Col span={12}>
                <div className="flex flex-col items-center space-y-[14px]">
                  <span className="text-[#919099] text-sm font-medium">Invite Points</span>
                  <span className="text-[#1A1D1F] text-xl leading-[20px] font-bold">0.05</span>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mt-6 w-full flex rounded-[8px] border border-[#EBECED] h-[56px] overflow-hidden">
            <div className="pl-[26px] text-[#1A1D1F] font-medium flex-1 flex items-center">
              0x415eB....c2764fd
            </div>
            <div className="flex items-center justify-center bg-[#9A6CF9] w-[186px] cursor-pointer">
              <div className="flex space-x-2 items-center">
                <span className="text-white">Copy Invite Code</span>
                <Copy />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Table />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default InviteFriends;
