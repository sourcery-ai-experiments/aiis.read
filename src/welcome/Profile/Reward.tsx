import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import useProfileModal from '../../store/useProfileModal';

import Claim from './Claim';
import History from './History';
import { reward } from './mock';

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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="mx-6 flex items-center justify-between">
        <div className="flex space-x-[34px]">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex space-x-1 items-center">
              <Icon />
              <span className="text-xs text-[#0F1419] font-medium">12.4</span>
            </div>
            <span className="text-[#919099] text-[15px] font-medium">Pool</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="flex space-x-1 items-center">
              <Icon />
              <span className="text-xs text-[#0F1419] font-medium">0.4</span>
            </div>
            <span className="text-[#919099] text-[15px] font-medium">Your Reward</span>
          </div>
        </div>

        <div className="flex items-center space-x-[14px]">
          <Claim />
          <History />
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
            <ul className="py-[22px] border-t border-t-[#EBEEF0]">
              {reward.map((item, i) => (
                <li key={i} className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-[6px]">
                      <img
                        onClick={openProfile}
                        src={item.avatar}
                        alt=""
                        className="w-[44px] rounded-full cursor-pointer"
                      />
                      <div className="flex flex-col space-y-[2px]">
                        <span className="text-sm font-bold" style={{ fontVariant: 'small-caps' }}>
                          {item.nickname}
                        </span>
                        <span
                          className="text-xs text-[#919099]"
                          style={{ fontVariant: 'small-caps' }}
                        >
                          {item.time}
                        </span>
                      </div>
                    </div>

                    <span className="text-sm font-medium">#{i + 1}</span>
                  </div>

                  <p className="text-black text-xs leading-[20px]">{item.text}</p>

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
          </TabPanel>
          <TabPanel
            value="2"
            sx={{
              padding: 0,
            }}
          >
            <ul className="py-[22px] border-t border-t-[#EBEEF0]">
              <li key={0} className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-[6px]">
                    <img
                      onClick={openProfile}
                      src={
                        'https://s3-alpha-sig.figma.com/img/16a6/12ee/d2ba2a61114ee6dbdd48253fd9de078b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AnXDr~Ua225X4bghxl0KjbFys6HMq9bP0iG1w-usKrPP9f3BWWRseeyK7J4FzeBMq7Ck8vkQC1Flo8l5cyyRaIxQT1hdQC4Yeu3m7~U4iRQzi7DHIQAaZuETvYkkk5fQ~jKvXdkh8GtmHnzSMfn~5PT7lMAoHheVGkrxPQLUNuNGGiwTGvLGVIZEzRve~pJGKLEUtBjTl1QsR8SQCE6VL1nEz-ij2T2R~bmU6u7awqTCGeqxNiaGSi-a-zgE-df4pQplYGqxEGiHLl8V8~x8dG~87WjkIP3X5Qr-QMFIZWCfRF9upxYm0H1zeYWJzO-ihcIwmD34oP~2j~9BePw0Lw__'
                      }
                      alt=""
                      className="w-[44px] rounded-full cursor-pointer"
                    />
                    <div className="flex flex-col space-y-[2px]">
                      <span className="text-sm font-bold" style={{ fontVariant: 'small-caps' }}>
                        {reward[2].nickname}
                      </span>
                      <span
                        className="text-xs text-[#919099]"
                        style={{ fontVariant: 'small-caps' }}
                      >
                        {reward[3].time}
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-medium">#{reward[2].rank}</span>
                </div>

                <p className="text-black text-xs leading-[20px]">
                  This is one of the most incredible experiences in my investment life: reuniting
                  with a team after 7 years and backed them again as anon founders unknowingly 🥹
                  witnessed their tremendous growth across various domains
                </p>

                <Divider
                  sx={{
                    marginTop: 3,
                    width: '100%',
                    borderColor: '#EBEEF0',
                  }}
                />
              </li>
            </ul>
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default Reward;
