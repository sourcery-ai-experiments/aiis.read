import React, { FC, useEffect, useRef, useState } from 'react';
import { useHover } from 'ahooks';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import { useTweetBatchUserInfo, useTweetVote } from '../../../service/tweet';
import useGlobalStore from '../../../store/useGlobalStore';
import useTweetStore from '../../../store/useTweetStore';
import * as toaster from '../../Toaster';

import '../../../tailwind.css';

dayjs.extend(isBetween);
interface VoteTwitterProps {
  twitterId: string;
  userName: string;
  time: string;
}

export const VoteTwitter: FC<VoteTwitterProps> = ({ twitterId, userName, time }) => {
  // const [voted, setVoted] = useState(false);
  const { userVote } = useGlobalStore((state) => ({ ...state }));
  const [userInfo, setUserInfo] = useState<any>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const { run: batchUserInfo } = useTweetBatchUserInfo(
    [userName],
    (result) => {
      setUserInfo(result?.data?.items?.[0]);
    },
    () => undefined
  );
  const { run: requestVote } = useTweetVote(
    twitterId,
    userName,
    () => {
      // setVoted(true);
      useGlobalStore.setState({
        userVote: {
          ...userVote,
          [twitterId]: true,
        },
      });
      toaster.success(toaster.ToastMessage.VOTE_SUCCESS);
    },
    () => {
      useGlobalStore.setState({
        userVote: {
          ...userVote,
          [twitterId]: false,
        },
      });
      toaster.success(toaster.ToastMessage.VOTE_FAILED);
    }
  );

  const isHover = useHover(ref);
  const { rewardStage } = useTweetStore((state) => ({ ...state }));
  const isPast = dayjs(time).isBetween(rewardStage?.startedAt, rewardStage?.endedAt);

  useEffect(() => {
    batchUserInfo(userInfo);
  }, []);

  return (
    <>
      {userInfo?.isActive && Number(userInfo?.sharesHeldByCurrentUser) > 0 && isPast ? (
        <div
          ref={ref}
          className="!z-[999] ml-[55px] w-auto !cursor-pointer items-center justify-center text-center"
          onClick={(e) => {
            requestVote();
            toaster.success(toaster.ToastMessage.VOTE_SUCCESS);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {userVote?.[twitterId] || isHover ? <VoidedIcon /> : <VoidIcon />}
        </div>
      ) : null}
    </>
  );
};

const VoidIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <g clipPath="url(#clip0_707_19677)">
      <path
        d="M16.5689 17.775H1.52094C0.854941 17.775 0.314941 17.235 0.314941 16.569V11.331C0.314941 10.665 0.854941 10.125 1.52094 10.125H5.57994V11.025H1.52094C1.35894 11.025 1.21494 11.169 1.21494 11.331V16.569C1.21494 16.731 1.35894 16.875 1.52094 16.875H16.5689C16.7309 16.875 16.8749 16.731 16.8749 16.569V11.331C16.8749 11.169 16.7309 11.025 16.5689 11.025H11.3399V10.125H16.5689C17.2349 10.125 17.7749 10.665 17.7749 11.331V16.569C17.7749 17.235 17.2349 17.775 16.5689 17.775Z"
        fill="#5B7083"
      />
      <path
        d="M8.44182 13.8601C8.30682 13.8601 8.16282 13.8061 8.06382 13.7071L2.73582 8.37011C2.52882 8.16311 2.52882 7.82111 2.73582 7.60511L9.62082 0.720105C9.71982 0.621105 9.85482 0.558105 9.99882 0.558105C10.1428 0.558105 10.2778 0.612105 10.3768 0.720105L15.7048 6.04811C15.9118 6.25511 15.9118 6.59711 15.7048 6.81311L8.81982 13.6981C8.72082 13.8061 8.57682 13.8601 8.44182 13.8601ZM3.62682 7.99211L8.44182 12.8071L14.8138 6.43511L9.99882 1.62011L3.62682 7.99211Z"
        fill="#9A6CF9"
      />
      <path
        d="M8.68514 9.43203C8.45114 9.43203 8.21714 9.34203 8.03714 9.17103L8.02814 9.16203L6.57014 7.68603C6.39914 7.50603 6.39914 7.22703 6.57014 7.04703C6.75014 6.87603 7.02914 6.87603 7.20914 7.04703L8.66714 8.51403C8.68514 8.52303 8.69414 8.52303 8.70314 8.52303L10.8631 6.36303C11.0431 6.18303 11.3221 6.18303 11.5021 6.36303C11.6821 6.54303 11.6821 6.82203 11.5021 7.00203L9.34214 9.16203C9.16214 9.34203 8.92814 9.43203 8.68514 9.43203Z"
        fill="#9A6CF9"
      />
      <rect
        x="0.814941"
        y="10.625"
        width="16.46"
        height="6.6499"
        rx="0.5"
        fill="#F6F5FB"
        stroke="#9A6CF9"
      />
      <path
        d="M13.5452 14.0851H4.54521C4.29321 14.0851 4.09521 13.8871 4.09521 13.6351C4.09521 13.3831 4.29321 13.1851 4.54521 13.1851H13.5452C13.7972 13.1851 13.9952 13.3831 13.9952 13.6351C13.9952 13.8871 13.7972 14.0851 13.5452 14.0851Z"
        fill="#9A6CF9"
      />
    </g>
    <defs>
      <clipPath id="clip0_707_19677">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const VoidedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <g clipPath="url(#clip0_707_19695)">
      <path
        d="M16.5689 17.775H1.52094C0.854941 17.775 0.314941 17.235 0.314941 16.569V11.331C0.314941 10.665 0.854941 10.125 1.52094 10.125H5.57994V11.025H1.52094C1.35894 11.025 1.21494 11.169 1.21494 11.331V16.569C1.21494 16.731 1.35894 16.875 1.52094 16.875H16.5689C16.7309 16.875 16.8749 16.731 16.8749 16.569V11.331C16.8749 11.169 16.7309 11.025 16.5689 11.025H11.3399V10.125H16.5689C17.2349 10.125 17.7749 10.665 17.7749 11.331V16.569C17.7749 17.235 17.2349 17.775 16.5689 17.775Z"
        fill="#5B7083"
      />
      <rect x="0.314941" y="10.125" width="17.46" height="7.6499" rx="1" fill="#B18BFF" />
      <path
        d="M8.44182 13.8601C8.30682 13.8601 8.16282 13.8061 8.06382 13.7071L2.73582 8.37011C2.52882 8.16311 2.52882 7.82111 2.73582 7.60511L9.62082 0.720105C9.71982 0.621105 9.85482 0.558105 9.99882 0.558105C10.1428 0.558105 10.2778 0.612105 10.3768 0.720105L15.7048 6.04811C15.9118 6.25511 15.9118 6.59711 15.7048 6.81311L8.81982 13.6981C8.72082 13.8061 8.57682 13.8601 8.44182 13.8601ZM3.62682 7.99211L8.44182 12.8071L14.8138 6.43511L9.99882 1.62011L3.62682 7.99211Z"
        fill="#9A6CF9"
      />
      <path d="M8.5 13L3.5 8L10 1.5L15 6.5L8.5 13Z" fill="#9A6CF9" />
      <path
        d="M8.68514 9.43203C8.45114 9.43203 8.21714 9.34203 8.03714 9.17103L8.02814 9.16203L6.57014 7.68603C6.39914 7.50603 6.39914 7.22703 6.57014 7.04703C6.75014 6.87603 7.02914 6.87603 7.20914 7.04703L8.66714 8.51403C8.68514 8.52303 8.69414 8.52303 8.70314 8.52303L10.8631 6.36303C11.0431 6.18303 11.3221 6.18303 11.5021 6.36303C11.6821 6.54303 11.6821 6.82203 11.5021 7.00203L9.34214 9.16203C9.16214 9.34203 8.92814 9.43203 8.68514 9.43203Z"
        fill="white"
      />
      <path
        d="M13.5452 14.0851H4.54521C4.29321 14.0851 4.09521 13.8871 4.09521 13.6351C4.09521 13.3831 4.29321 13.1851 4.54521 13.1851H13.5452C13.7972 13.1851 13.9952 13.3831 13.9952 13.6351C13.9952 13.8871 13.7972 14.0851 13.5452 14.0851Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_707_19695">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
