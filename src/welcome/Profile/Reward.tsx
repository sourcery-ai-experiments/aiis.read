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
              <span className="text-xs text-[#0F1419] font-medium">2</span>
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

      <div className="mt-2 mx-4">
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
            <ul className="mt-3 py-[10px]">
              {list.map((item, i) => (
                <li key={i} className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-[6px]">
                      <img
                        onClick={openProfile}
                        src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                        alt=""
                        className="w-[30px] rounded-full cursor-pointer"
                      />
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
            <ul className="mt-3 py-[10px]">
              <li key={0} className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-[6px]">
                    <img
                      onClick={openProfile}
                      src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                      alt=""
                      className="w-[30px] rounded-full cursor-pointer"
                    />
                    <div className="flex flex-col space-y-[2px]">
                      <span className="text-sm font-bold">Devon</span>
                      <span className="text-xs text-[#919099]">Jan 05 2024, 14:32</span>
                    </div>
                  </div>

                  <span className="text-sm font-medium">#3</span>
                </div>

                <p className="text-black text-xs leading-[20px]">
                  History is always extremely similar bitcoin is the invention of satoshi nakamoto,
                  Chinese people early to give him dry up ethereum is v god made
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
