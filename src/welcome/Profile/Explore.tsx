import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import useProfileModal from '../../store/useProfileModal';
import Avatar from '../assets/avatar.png';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
    <g clipPath="url(#clip0_209_9369)">
      <path d="M5.00032 17.4065V13.1882L0.142578 10.1367L5.00032 17.4065Z" fill="#C7C7E0" />
      <path d="M5.0166 17.4065V13.1882L9.87443 10.1367L5.01669 17.4065H5.0166Z" fill="#A3A3D2" />
      <path d="M5.00048 12.1399V6.75635L0.0869141 9.11963L5.00048 12.1399Z" fill="#C7C7E0" />
      <path d="M5.0166 12.1399V6.75635L9.93017 9.11972L5.0166 12.1399Z" fill="#A3A3D2" />
      <path d="M0.0869141 9.12L5.00039 0.59375V6.75662L0.0869141 9.12Z" fill="#C7C7E0" />
      <path d="M9.93008 9.12L5.0166 0.59375V6.75662L9.93008 9.12Z" fill="#A3A3D2" />
    </g>
    <defs>
      <clipPath id="clip0_209_9369">
        <rect width="10" height="17" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const Explore = () => {
  const list = Array(7).fill('');
  const { openProfile } = useProfileModal((state) => ({ ...state }));

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="px-4">
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
              label="Top"
              value="1"
              sx={{
                width: '25%',
                fontSize: 15,
                color: '#919099',
                fontWeight: 400,
                textTransform: 'none',
              }}
            />
            <Tab
              label="New"
              value="2"
              sx={{
                width: '25%',
                fontSize: 15,
                color: '#919099',
                fontWeight: 400,
                textTransform: 'none',
              }}
            />
            <Tab
              label="24h %"
              value="3"
              sx={{
                width: '25%',
                fontSize: 15,
                color: '#919099',
                fontWeight: 400,
                textTransform: 'none',
              }}
            />
            <Tab
              label="Activites"
              value="4"
              sx={{
                width: '25%',
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
          <ul>
            {list.map((item, i) => (
              <li key={i} className="pt-5 pb-2 flex items-center border-t border-t-[#EBEEF0]">
                <span className="text-[#0F1419]">1</span>
                <img
                  onClick={openProfile}
                  src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                  alt="avatar"
                  className="w-[44px] h-[44px] mx-[14px] rounded-full cursor-pointer"
                />
                <div className="flex-1 flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#0F1419] font-bold">JamesXYC@MAP Protocol -Bitcoin</span>
                    <span className="text-[#5B7083]">@IDOC</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-[6px]">
                      <span className="#919099">Price</span>
                      <Icon />
                      <span className="text-[#919099] text-[15px] font-medium">2.34</span>
                    </div>

                    <div className="flex items-center space-x-[6px]">
                      <span className="text-[#919099]">Tweet Avg Rank:</span>
                      <span className="text-[#919099] text-[15px] font-medium">#3</span>
                    </div>
                  </div>
                </div>
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
          <ul>
            {list.map((item, i) => (
              <li key={i} className="pt-5 pb-2 flex items-center border-t border-t-[#EBEEF0]">
                <span className="text-[#0F1419]">1</span>
                <img
                  onClick={openProfile}
                  src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                  alt="avatar"
                  className="w-[44px] h-[44px] mx-[14px] rounded-full cursor-pointer"
                />
                <div className="flex-1 flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#0F1419] font-bold">JamesXYC@MAP Protocol -Bitcoin</span>
                    <span className="text-[#5B7083]">@IDOC</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-[6px]">
                      <span className="#919099">Price</span>
                      <Icon />
                      <span className="text-[#919099] text-[15px] font-medium">2.34</span>
                    </div>

                    <div className="flex items-center space-x-[6px]">
                      <span className="text-[#919099]">Tweet Avg Rank:</span>
                      <span className="text-[#919099] text-[15px] font-medium">#3</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel
          value="3"
          sx={{
            padding: 0,
          }}
        >
          <ul>
            {list.map((item, i) => (
              <li key={i} className="pt-5 pb-2 flex items-center border-t border-t-[#EBEEF0]">
                <span className="text-[#0F1419]">1</span>
                <img
                  onClick={openProfile}
                  src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                  alt="avatar"
                  className="w-[44px] h-[44px] mx-[14px] rounded-full cursor-pointer"
                />
                <div className="flex-1 flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#0F1419] font-bold">JamesXYC@MAP Protocol -Bitcoin</span>
                    <span className="text-[#5B7083]">@IDOC</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-[6px]">
                      <span className="#919099">Price</span>
                      <Icon />
                      <span className="text-[#919099] text-[15px] font-medium">2.34</span>
                    </div>

                    <div className="flex items-center space-x-[6px]">
                      <span className="text-[#919099]">Tweet Avg Rank:</span>
                      <span className="text-[#919099] text-[15px] font-medium">#3</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel
          value="4"
          sx={{
            padding: 0,
          }}
        >
          <ul>
            {list.map((item, i) => (
              <li key={i} className="pt-[10px] pb-2 space-y-2 border-t border-t-[#EBEEF0]">
                <span className="text-[#A1A1AA]">2024/01/10 12:14</span>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-5 items-center">
                    <div className="flex flex-col items-center">
                      <img
                        onClick={openProfile}
                        src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                        alt="avatar"
                        className="w-9 h-9 rounded-full cursor-pointer"
                      />
                      <span className="text-[#919099]">@Devon</span>
                    </div>

                    <span className="font-bold">Bought</span>

                    <div className="flex flex-col items-center">
                      <img
                        onClick={openProfile}
                        src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                        alt="avatar"
                        className="w-9 h-9 rounded-full cursor-pointer"
                      />
                      <span className="text-[#919099]">@Devon</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[#16B364] text-base font-bold">+2 Shares</span>
                    <div className="space-x-1 flex items-center">
                      <Icon />
                      <span className="text-[#16B364] text-xs">- 0.2025</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default Explore;
