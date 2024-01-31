import React from 'react';
import { Button, Divider, Tabs } from 'antd';

import Avatar from '../assets/avatar.png';

import Claim from './Claim';
import History from './History';

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

const Reward = () => {
  const list = Array(7).fill('');

  const tabMap = [
    {
      title: 'Weekly rank',
    },
    {
      title: 'Your rank',
    },
  ];

  return (
    <>
      <div className="mx-[10px] flex items-center justify-between">
        <div className="flex space-x-[34px]">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex space-x-1 items-center">
              <Icon />
              <span className="text-xs">2</span>
            </div>
            <span className="text-[#919099] text-[15px] font-medium">Pool</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="flex space-x-1 items-center">
              <Icon />
              <span className="text-xs">0.4</span>
            </div>
            <span className="text-[#919099] text-[15px] font-medium">Your Reward</span>
          </div>
        </div>

        <div className="flex items-center space-x-[14px]">
          <Claim />
          <History />
        </div>
      </div>

      <div className="mt-2 flex items-center justify-around border-y border-y-[#EBEEF0]">
        <Tabs
          defaultActiveKey="1"
          centered
          tabBarGutter={100}
          items={tabMap.map((item, i) => {
            const id = String(i + 1);
            return {
              label: item.title,
              key: id,
              children: (
                <ul className="mt-3 py-[10px]">
                  {list.map((item, i) => (
                    <li key={i} className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[6px]">
                          <img src={Avatar} alt="" className="w-[30px] rounded-full" />
                          <div className="flex flex-col space-y-[2px]">
                            <span className="text-sm font-bold">Devon</span>
                            <span className="text-xs text-[#919099]">Jan 05 2024, 14:32</span>
                          </div>
                        </div>

                        <span className="text-sm font-medium">#3</span>
                      </div>

                      <p className="text-black text-xs leading-[20px]">
                        History is always extremely similar bitcoin is the invention of satoshi
                        nakamoto, Chinese people early to give him dry up ethereum is v god made
                      </p>

                      <Divider />
                    </li>
                  ))}
                </ul>
              ),
            };
          })}
        />
      </div>
    </>
  );
};

export default Reward;
