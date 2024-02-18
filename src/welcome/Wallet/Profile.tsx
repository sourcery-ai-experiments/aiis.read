import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Modal from '../../components/Modal';
import useProfileModal from '../../store/useProfileModal';

import BuyModal from './BuyModal';
import SellModal from './SellModal';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
    <g clipPath="url(#clip0_410_42042)">
      <path d="M5.00056 16.9065V12.6882L0.142822 9.63672L5.00056 16.9065Z" fill="#C7C7E0" />
      <path d="M5.0166 16.9065V12.6882L9.87443 9.63672L5.01669 16.9065H5.0166Z" fill="#A3A3D2" />
      <path d="M5.00048 11.6404V6.25684L0.0869141 8.62012L5.00048 11.6404Z" fill="#C7C7E0" />
      <path d="M5.0166 11.6404V6.25684L9.93017 8.62021L5.0166 11.6404Z" fill="#A3A3D2" />
      <path d="M0.0869141 8.62L5.00039 0.09375V6.25662L0.0869141 8.62Z" fill="#C7C7E0" />
      <path d="M9.93008 8.62L5.0166 0.09375V6.25662L9.93008 8.62Z" fill="#A3A3D2" />
    </g>
    <defs>
      <clipPath id="clip0_410_42042">
        <rect width="10" height="17" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ProfileModal = () => {
  const { openProfile } = useProfileModal((state) => ({ ...state }));
  const rows = [
    {
      holder: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">Devon Lane</span>
        </div>
      ),
      shares: 3,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">1.002</span>
        </div>
      ),
    },
    {
      holder: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9lsT36Y6ti1wCGtYr6VAfuk0ThZ7zfLtIfDr75p2Ub0-1iUrD0mrbgjWIwnfmtfh06F8OuNjfd-NJzXTrKuwYqkOhcCQie5y4mchDi1rf4l9F55ETTo7ybPESnOV17zRxKa9GCh6Sre8W5vu4-YZZwupSiOvT9A7Fi-g6WJjSVQgRkPyvBG~xvFGn6ssDX6Ez0mG4pB9sOt~uy~1r5T6SOLrnVKBz3Qv1a9dt5aUyCHjHZ~wFyn4NAYWwfybQQ5fY51cOwmg6X6YnglsE0JnwsFY08fma2IUkLVLYpIMIUBqbwMhAip73a0GG9TL0wlNozEE5mYKteeC2W95RPxHQ__"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">Betty Moore</span>
        </div>
      ),
      shares: 12,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">2.012</span>
        </div>
      ),
    },
    {
      holder: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-PgtVkxH~VWHERF-owLSsC09jwWzMlIA83MuTKmxyxS0w6ezHeIHqYwP0n8LqDeteDXcg-h4ZCt1ibsO4wVXYQxboIeWRgDK6YI2NwqLF8UzGHHqJmJmjMs332gN0-RjCeIc01wnO0fQgKQziYRKDtNY4RGZIlEYa3kV03sXdKGBEkm-KsLgnEAwFdcqbTc-m1i-ZxFoVpc3vM9SG6~uo-CWBL5xxyPQme5OqMkmPUw~xvjW620aQaMpiQ-onAwQxeWXRPvPL0c4zXwq3NuTh5Omob8mbOowM9-Enna2-QqUhwuifzMxCsizIY6S-iBu0uVBWfO388p-5Y9ZK0kaw__"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">William Miller</span>
        </div>
      ),
      shares: 43,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">7.126</span>
        </div>
      ),
    },
  ];

  const holder16 = [
    {
      holder: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://s3-alpha-sig.figma.com/img/b0e6/1e6e/9e0b10bc7df7f8b016a4a4b14a72390c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbzfTy62BKZoEECa3NIt1~o1YdznKeE79nKfwJ2eLXuw2csMXa8DSL~AjX2hqfXcV5CaSKQgqPk0nBDdaH1QMzoyApx~2GZyLzYidWjfL~4mAjmWIyAls4NVpTdwgcLmlzONayjLLIiUCmZPGSCLRRr2uGxX1vFBf0A27xQPXL-6Em0g~ufRsv0YMPtBaOTxGxRI35ifobRhI2H7BK3fPHbXojr4L9OMRT3OAoG9FEAVYD0ik7uLeJO5FYCeFS2jb3Yswp6VoYiPKY8EbVSYEQPK-bzVvDzkS6r-lb6vEQq5TOnuvvcDVUncy3wAUSwSXj1fQA15XJhcVVA5qban9w__"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">Patricia Smith</span>
        </div>
      ),
      shares: 4,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">2.132</span>
        </div>
      ),
    },
    {
      holder: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://s3-alpha-sig.figma.com/img/a943/c456/1554d0938e310067d530a29ef6ff1664?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJNMzft~d6XupbZFvcLHyodBsjJTxF7efO9NOhhuM3umsQ6eQgcuugzffRuin4KDl7fOI4dSwu64XS5i2UcBXCCr~jiUsqf8afYa-rcLlTkS8mIC-p2N~OxV9bK1qPFhdGEbLF6Bv8r5KtXSeK5eWnmyUjDVLKjOM-2t7uPL8Z~Uc83MuZGGWiTiF2a16x~sKBwqSuOm7cFI85vzwB2xz1zOzn~dL7fwVVm52zbOuoqMg0v-oRi238IkEOgEt0Yup4Huk47ApntDZRzENu3devBDz~fqIBwQANqBXEG1Gq0lHdl7JgDem9oUTAUZjnHHqoOYIhmvDPPt~aVS0MXnpg__"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">Brenda Wilson</span>
        </div>
      ),
      shares: 16,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">3.612</span>
        </div>
      ),
    },
    {
      holder: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://s3-alpha-sig.figma.com/img/80e2/698e/d168cf144ccafa1e4ed54123a0b6d7a3?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ErPGgBW-siAsqlC7hQjIGBFbEXMKzHwZmAQKXuUYt4KlYYnkKwryJpoI~CnKN6AKqjiIyzZUP84Bmmq~qFcXDMor3hAQo6KdioyETNQeLJg3LxoKN~T3E4FeUStL99qDsUu334PMVTqgroF13-8esW7Dx3GqdnU7Dnj-lFIA0VwcfeBHZSm22qXp8Fb0Yha8PHC4XOZ2Z7jj0i1mfcxQXfMG~JU0SC-pRT2z2S19p06HUgFfKSYNemsAMVav-0hFLliWyMq5ed8uvoYlfe8XaURtDtnk59gz8cEX8nBaG-QNbCiWaDlXFqY5Kkl3XseFaRPZBacF2whoYMQfLpjFuA__"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">Laura Lewis</span>
        </div>
      ),
      shares: 23,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">3.191</span>
        </div>
      ),
    },
  ];

  const ranking = [
    {
      data: 'Jan 05 2023, 14:32',
      post: 'Introducing Blast: The only Ethereum L2 with native yield for ETH and stablecoins.',
      rank: 17,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">2.102</span>
        </div>
      ),
    },
    {
      data: 'Dec 07 2023, 21:36',
      post: 'Much like mastering the force of gravity in snowboarding, reflexivity serves as the gravitational force in the capital market',
      rank: 23,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">1.034</span>
        </div>
      ),
    },
    {
      data: 'Apr 10 2023, 17:36',
      post: 'Singapore crypto chads wanting to work with a team, def check out the role open at Primitive- Dovey and the crew are always on the cutting edge of developments.',
      rank: 45,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">1.126</span>
        </div>
      ),
    },
  ];

  const { open, closeProfile } = useProfileModal((state) => ({ ...state }));
  const [key, setKey] = useState(0);
  const list = [
    {
      text: 'Holders (20)',
    },
    {
      text: 'Holding',
    },
    {
      text: ' Tweet Ranking',
    },
  ];

  return (
    <>
      <Modal onClose={closeProfile} open={open} width={626}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32]">Profile</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div className="flex mt-6 items-center justify-between w-full">
            <div className="flex items-center space-x-[14px]">
              <img
                onClick={openProfile}
                src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                alt="avatar"
                className="w-[75px] h-[75px] rounded-full cursor-pointer"
              />
              <div className="flex flex-col space-y-[6px]">
                <span className="text-[#0F1419] text-[20px] leading-[20px] font-bold">
                  Devonkokl
                </span>
                <span className="text-[#919099] text-[16px] leading-[16px] font-medium">@Idoc</span>
                <div className="flex items-center space-x-1">
                  <span className="text-[#2E2E32] text-[14px] font-bold">Floor Price:</span>
                  <Icon />
                  <span className="text-[14px]">0.2</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <BuyModal />
              <SellModal />
            </div>
          </div>

          <div className="mt-3 mb-6 h-[1px] bg-[#EBEEF0] w-full"></div>

          <div className="w-full space-x-[30px] flex">
            {list.map((item, i) => (
              <div
                onClick={() => setKey(i)}
                key={item.text}
                className={`rounded-full py-2 px-[18px] font-medium leading-[18px] border border-[#0F1419] ${
                  key === i ? 'bg-[#2C2A2A] text-white' : 'text-[#0F1419] bg-white cursor-pointer'
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>

          {key === 0 && (
            <TableContainer
              sx={{
                marginTop: 2,
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Holder</TableCell>
                    <TableCell>Hold shares</TableCell>
                    <TableCell>Shares Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {row.holder}
                      </TableCell>
                      <TableCell>{row.shares}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {key === 1 && (
            <TableContainer
              sx={{
                marginTop: 2,
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Creator</TableCell>
                    <TableCell>Hold shares</TableCell>
                    <TableCell>Shares Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {holder16.map((row, i) => (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {row.holder}
                      </TableCell>
                      <TableCell>{row.shares}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {key === 2 && (
            <TableContainer
              sx={{
                marginTop: 2,
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Post</TableCell>
                    <TableCell>Rank</TableCell>
                    <TableCell>Reward</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ranking.map((row, i) => (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row" width={180}>
                        {row.data}
                      </TableCell>
                      <TableCell>{row.post}</TableCell>
                      <TableCell>#{row.rank}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProfileModal;
