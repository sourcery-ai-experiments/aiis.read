import React, { useEffect, useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import dayjs from 'dayjs';
import { CenterLoading } from '../../components/Loading';
import { ListEmpty } from '../../components/Empty';
import { NumberDisplayer } from '../../components/NumberDisplayer';
import { useTweetList, useTweetYourRank } from '../../service/tweet';
import { usePoolBalance } from '../../service/wallet';
import useProfileModal from '../../store/useProfileModal';
import useShareStore from '../../store/useShareStore';
import useTweetStore from '../../store/useTweetStore';
import useUserStore from '../../store/useUserStore';

import Claim from './Claim';
import History from './History';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
    <g clipPath="url(#clip0_467_29546)">
      <path d="M4.50041 11.9338V8.95625L0.728516 6.80225L4.50041 11.9338Z" fill="#C7C7E0" />
      <path d="M4.5127 11.9338V8.95625L8.28465 6.80225L4.51276 11.9338H4.5127Z" fill="#A3A3D2" />
      <path d="M4.49981 8.21619V4.41602L0.68457 6.08421L4.49981 8.21619Z" fill="#C7C7E0" />
      <path d="M4.5127 8.21619V4.41602L8.32793 6.08428L4.5127 8.21619Z" fill="#A3A3D2" />
      <path d="M0.68457 6.08493L4.49974 0.0664062V4.41667L0.68457 6.08493Z" fill="#C7C7E0" />
      <path d="M8.32787 6.08493L4.5127 0.0664062V4.41667L8.32787 6.08493Z" fill="#A3A3D2" />
    </g>
    <defs>
      <clipPath id="clip0_467_29546">
        <rect width="7.76471" height="12" fill="white" transform="translate(0.617188)" />
      </clipPath>
    </defs>
  </svg>
);

const Reward = () => {
  const { openProfile } = useProfileModal((state) => ({ ...state }));
  const list = Array(7).fill('');
  const [value, setValue] = React.useState('1');
  const [poolBalance, setPoolBalance] = React.useState('0');
  const { run: getTweet, loading: loadingTweetList } = useTweetList();
  const { run: getYourRank, loading: loadingTweetYourRank } = useTweetYourRank();
  const { tweetList, tweetRewardTotalRewardAmount, tweetYourRank } = useTweetStore((state) => ({
    ...state,
  }));
  const [loadingx, setLoadingx] = useState(true);
  const { userInfo } = useUserStore((state) => ({ ...state }));
  const currentIndex = tweetList
    ? tweetList?.findIndex((item) => item.author?.twitterId === userInfo?.twitterId)
    : -1;
  const { ethPrice } = useShareStore((state) => ({ ...state }));

  const { loading, run: fetchPool } = usePoolBalance(
    (balance) => {
      setPoolBalance(balance);
    },
    () => {
      setPoolBalance('0');
    }
  );

  const fetchMap: Record<any, any> = {
    1: getTweet,
    2: getYourRank,
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    fetchMap[newValue]();
  };

  useEffect(() => {
    if (value === '1') {
      getTweet();
    } else if (value === '2') {
      getYourRank();
    }
    fetchPool();
  }, []);

  useEffect(() => {
    if (loadingTweetList || loadingTweetYourRank) {
      setLoadingx(true);
      setTimeout(() => {
        setLoadingx(false);
      }, 500);
    }
  }, [loadingTweetList, loadingTweetYourRank]);

  return (
    <>
      <div className="mx-6 flex items-center justify-between">
        <div className="flex space-x-[10px]">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-1">
              <Icon />
              <NumberDisplayer className="text-xs font-medium text-[#0F1419]" text={poolBalance} />
            </div>
            <span className="text-[15px] font-medium text-[#919099]">Pool</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-1">
              <Icon />
              <NumberDisplayer
                className="text-xs font-medium text-[#0F1419]"
                text={tweetRewardTotalRewardAmount}
              />
            </div>
            <span className="text-[15px] font-medium text-[#919099]">Your Reward</span>
          </div>
        </div>

        <div className="flex items-center space-x-[14px]">
          <Claim price={ethPrice?.price} />
          <History price={ethPrice?.price} />
        </div>
      </div>

      <Divider
        sx={{
          marginTop: 2,
          marginLeft: 2,
          marginRight: 2,
          borderColor: '#EBEEF0',
        }}
      />

      <div className="mx-4">
        <TabContext value={value}>
          <Box>
            <TabList
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#9A6CF9',
                },
                '& .Mui-selected': {
                  fontWeight: 700,
                  color: '#9A6CF9 !important',
                },
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                label="Weekly rank"
                value="1"
                sx={{
                  width: '50%',
                  fontSize: 15,
                  color: '#919099',
                  fontWeight: 400,
                  textTransform: 'none',
                }}
              />
              <Tab
                label="Your rank"
                value="2"
                sx={{
                  width: '50%',
                  fontSize: 15,
                  color: '#919099',
                  fontWeight: 400,
                  textTransform: 'none',
                }}
              />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              padding: 0,
            }}
          >
            {loadingTweetList || loadingx ? (
              <CenterLoading />
            ) : tweetList == null || tweetList.length === 0 ? (
              <div className="flex flex-col items-center">
                <ListEmpty className="mt-[50px]" />
                <p className="xfans-font-sf mt-[10px] text-[#00000080]">
                  You haven&apos;t bought any shares yet.
                </p>
              </div>
            ) : (
              <ul className="border-t border-t-[#EBEEF0] py-[22px]">
                {tweetList?.map((item, i) => (
                  <li key={i} className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-[6px]">
                        <img
                          onClick={() => openProfile(item?.author)}
                          src={item.author?.avatar}
                          alt=""
                          className="w-[44px] cursor-pointer rounded-full"
                        />
                        <div className="flex flex-col space-y-[2px]">
                          <span className="text-sm font-bold" style={{ fontVariant: 'small-caps' }}>
                            {item.author?.username}
                          </span>
                          <span
                            className="text-xs text-[#919099]"
                            style={{ fontVariant: 'small-caps' }}
                          >
                            {dayjs(item.createdAt).locale('en').format('MMM DD YYYY, HH:mm')}
                          </span>
                        </div>
                      </div>

                      <span className="text-sm font-medium">#{item.rank}</span>
                    </div>

                    <p
                      className="cursor-pointer text-xs leading-[20px] text-black"
                      onClick={() => {
                        window.open(
                          `https://twitter.com/${item?.author?.twitterUsername}/status/${item?.id}`,
                          '_blank'
                        );
                      }}
                    >
                      {item.text}
                    </p>

                    <Divider
                      sx={{
                        marginTop: 3,
                        width: '100%',
                        borderColor: '#EBEEF0',
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </TabPanel>
          <TabPanel
            value="2"
            sx={{
              padding: 0,
            }}
          >
            {loadingTweetYourRank || loadingx ? (
              <CenterLoading />
            ) : tweetYourRank == null || tweetYourRank.length === 0 ? (
              <div className="flex flex-col items-center">
                <ListEmpty className="mt-[50px]" />
                <p className="xfans-font-sf mt-[10px] text-[#00000080]">
                  No records found. Vote to join weekly rankings.
                </p>
              </div>
            ) : (
              <ul className="border-t border-t-[#EBEEF0] py-[22px]">
                {tweetYourRank?.map((item, i) => (
                  <li key={i} className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-[6px]">
                        <img
                          onClick={() => openProfile(item?.author)}
                          src={item.author?.avatar}
                          alt=""
                          className="w-[44px] cursor-pointer rounded-full"
                        />
                        <div className="flex flex-col space-y-[2px]">
                          <span className="text-sm font-bold" style={{ fontVariant: 'small-caps' }}>
                            {item.author?.username}
                          </span>
                          <span
                            className="text-xs text-[#919099]"
                            style={{ fontVariant: 'small-caps' }}
                          >
                            {dayjs(item.createdAt).locale('en').format('MMM DD YYYY, HH:mm')}
                          </span>
                        </div>
                      </div>

                      <span className="text-sm font-medium">#{item.rank}</span>
                    </div>

                    <p
                      className="cursor-pointer text-xs leading-[20px] text-black"
                      onClick={() => {
                        window.open(
                          `https://twitter.com/${item?.author?.twitterUsername}/status/${item?.id}`,
                          '_blank'
                        );
                      }}
                    >
                      {item.text}
                    </p>

                    <Divider
                      sx={{
                        marginTop: 3,
                        width: '100%',
                        borderColor: '#EBEEF0',
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default Reward;
