import React, { useEffect, useState } from 'react';

import { ListEmpty } from '../../components/Empty';
import { getList } from '../../service/community';

import ChatRoomDrawer from './community/ChatRoomDrawer';
import StackModal from './community/StackModal';

const Community = () => {
  const [isChatRootOpen, setIsChatRootOpen] = useState(false);
  const [lockedCommunities, setLockedCommunities] = useState<Community[]>([]);
  const [unlockedCommunities, setUnlockedCommunities] = useState<Community[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);

  useEffect(() => {
    getList(0).then(setLockedCommunities);
    getList(1).then(setUnlockedCommunities);
  }, []);

  function handleStakeModalClose() {
    setSelectedCommunity(null);
    // 刷新列表获取最新状态
    getList(0).then(setLockedCommunities);
    getList(1).then(setUnlockedCommunities);
  }

  if (lockedCommunities.length === 0 && unlockedCommunities.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <ListEmpty className="mt-[50px]" />
        <p className="mt-[10px] text-[#00000080]">You haven&apos;t bought any shares yet.</p>
      </div>
    );
  }

  function renderUnlocked() {
    if (unlockedCommunities.length === 0)
      return (
        <div className="flex flex-col items-center">
          <ListEmpty className="mt-[50px]" />
          <p className="mt-[10px] text-[#00000080]">No unlocked communities available.</p>
        </div>
      );

    return (
      <ul>
        {unlockedCommunities.map((item, i) => (
          <li
            key={i}
            className={`px-1 py-[10px] ${
              i === unlockedCommunities.length - 1 ? '' : 'border-b border-b-[#EBEEF0]'
            }`}
            onClick={() => setIsChatRootOpen(true)}
          >
            <div className="ml-3 flex cursor-pointer items-center">
              <img src={item.ownerUser.avatar} alt="" className="w-[44px] rounded-full" />
              <div className="ml-[28px] flex-1 overflow-hidden">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <span className="w-[210px] text-sm font-medium text-black">
                      {item.ownerUser.username}‘s Community
                    </span>
                    <span className="ml-10 text-xs font-normal text-[#A1A1AA]">21:22</span>
                  </div>
                  {/* TODO 用真实数据 */}
                  <p className="truncate text-xs text-[#5B7083]">new message</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  function renderLocked() {
    if (lockedCommunities.length === 0) return null;

    return (
      <>
        <p className="mt-[100px] text-center text-[15px] font-medium text-[#9A6CF9]">
          The Following Are Locked Communities
        </p>

        <div>
          <ul className="mt-4 space-y-[10px]">
            {lockedCommunities.map((item, i) => (
              <li
                key={i}
                className="relative flex cursor-pointer items-center space-x-[14px] overflow-hidden rounded-[8px] bg-[#F7F9FA] py-2 px-3"
                onClick={() => setSelectedCommunity(item)}
              >
                <img src={item.ownerUser.avatar} alt="avatar" className="w-[44px] rounded-full" />
                <div className="flex w-full flex-col">
                  <span className="text-sm font-medium text-black">
                    {item.ownerUser.username}‘s Community
                  </span>
                  <div className="flex items-start justify-between">
                    <span className="text-xs text-[#5B7083]">
                      Unlock Requires Staking: {+item.requiredStakedShares / 100}
                    </span>
                    <span className="text-xs text-[#5B7083]">
                      Staked: {+item.stakedShares / 100}
                    </span>
                  </div>
                </div>
                <LockBackgroundIcon className="absolute top-0 left-[-14px]" />
                <LockIcon className="absolute top-[3px] left-[-11px]" />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return (
    <div className="xfans-scrollbar relative flex min-h-0 flex-1 flex-col overflow-y-auto px-4">
      {renderUnlocked()}
      {renderLocked()}
      {selectedCommunity && selectedCommunity.status === 0 && (
        <StackModal community={selectedCommunity} onClose={handleStakeModalClose} />
      )}
      {selectedCommunity && selectedCommunity.status === 1 && (
        <ChatRoomDrawer
          community={selectedCommunity}
          open={isChatRootOpen}
          onClose={() => setIsChatRootOpen(false)}
        />
      )}
    </div>
  );
};

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1007_12838)">
        <path
          d="M8.33333 4.58301H1.66667C1.43655 4.58301 1.25 4.76956 1.25 4.99967V8.74967C1.25 8.97979 1.43655 9.16634 1.66667 9.16634H8.33333C8.56345 9.16634 8.75 8.97979 8.75 8.74967V4.99967C8.75 4.76956 8.56345 4.58301 8.33333 4.58301Z"
          stroke="#0F1419"
          strokeWidth="0.833333"
          strokeLinejoin="round"
        />
        <path
          d="M2.91699 4.58301V2.91634C2.91699 1.76575 3.84974 0.833008 5.00033 0.833008C6.15091 0.833008 7.08366 1.76575 7.08366 2.91634V4.58301"
          stroke="#0F1419"
          strokeWidth="0.833333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 6.25V7.5"
          stroke="#0F1419"
          strokeWidth="0.833333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1007_12838">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LockBackgroundIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H22C22 9.38884 14.3888 17 5 17H0V0Z" fill="#BBBAFB" />
    </svg>
  );
}

export default Community;
