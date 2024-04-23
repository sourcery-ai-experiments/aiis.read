/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { NumberDisplayer } from '../../components/NumberDisplayer';
import useAccount from '../../hooks/useAccount';
import { useUserInfo } from '../../service/user';
import useProfileModal from '../../store/useProfileModal';

import Community from './Community';
import Explore from './Explore';
import Reward from './Reward';

const Profile = (props: { handleButtonClick?: () => void }) => {
  const [key, setKey] = useState('explore');
  const { run: getUserInfo } = useUserInfo();
  const { userInfo } = useAccount();
  const { openProfile } = useProfileModal((state) => ({ ...state }));

  const tapMap = [
    {
      title: 'explore',
      onClick: () => setKey('explore'),
    },
    {
      title: 'community',
      onClick: () => setKey('community'),
    },
    {
      title: 'reward',
      onClick: () => setKey('reward'),
    },
  ];

  function renderTabPane(key: string) {
    if (key === 'explore') return <Explore />;
    if (key === 'community') return <Community />;
    if (key === 'reward') return <Reward />;
    return null;
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between px-[15px] py-[10px]">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-fe.s3.amazonaws.com/xfans/20240328-153101.png"
            alt="logo"
            className="w-[32px] cursor-pointer rounded-full"
            onClick={() => window.open('https://xfans.tech', '_blank')}
          />
        </div>

        <div
          className="flex items-center text-[15px] text-[#919099] hover:cursor-pointer"
          onClick={() => openProfile(userInfo, 1)}
        >
          <span className="xfans-font-sf mr-1">Holding:</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
          >
            <g clipPath="url(#clip0_567_8441)">
              <path d="M5.00032 16.9065V12.6882L0.142578 9.63672L5.00032 16.9065Z" fill="#C7C7E0" />
              <path
                d="M5.0166 16.9065V12.6882L9.87443 9.63672L5.01669 16.9065H5.0166Z"
                fill="#A3A3D2"
              />
              <path
                d="M5.00048 11.6399V6.25635L0.0869141 8.61963L5.00048 11.6399Z"
                fill="#C7C7E0"
              />
              <path d="M5.0166 11.6399V6.25635L9.93017 8.61972L5.0166 11.6399Z" fill="#A3A3D2" />
              <path d="M0.0869141 8.62L5.00039 0.09375V6.25662L0.0869141 8.62Z" fill="#C7C7E0" />
              <path d="M9.93008 8.62L5.0166 0.09375V6.25662L9.93008 8.62Z" fill="#A3A3D2" />
            </g>
            <defs>
              <clipPath id="clip0_567_8441">
                <rect width="10" height="17" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <NumberDisplayer className="ml-1" text={userInfo?.holdValue} />
        </div>

        <div
          onClick={() => props.handleButtonClick?.()}
          className="flex cursor-pointer items-center justify-center rounded-full border border-black px-4 py-1 text-[15px] font-medium"
        >
          Wallet
        </div>
      </div>

      <div className="my-[14px] mx-4 flex items-center justify-between rounded-full bg-[#F8F4F0] py-[10px] px-[14px]">
        {tapMap.map((item, i) => (
          <div
            key={i}
            onClick={item.onClick}
            className={`flex w-[100px] items-center justify-center text-[15px] font-semibold capitalize ${
              key === item.title
                ? 'rounded-full bg-[#2C2A2A] px-[18px] py-[10px] text-[#FAFAFA]'
                : 'cursor-pointer text-[#0F1419]'
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>

      {renderTabPane(key)}
    </div>
  );
};

export default Profile;
