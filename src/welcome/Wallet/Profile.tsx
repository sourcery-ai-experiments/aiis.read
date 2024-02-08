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
            src="https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUVlmyDBuGd4II7wipQawCSRUyyoxBtJyqdfXBhpYqcPag4kTlvgyDWZ-2IvcF~5kFNqNsf24923sNWKZ8nZL8WxOggJXrejcARhkzwh7G4DCpGN6PpPsbojbKJ3Qv4ZJqd~w6x7vVdcVi1dxsZtNpVzV7M47B9EatTp7nSzXRnMxVhYesCQ02PmC5UvV5TdvYdjQ0jQaNS3mQpebF1tg6UzD6A42UGZFkCZIgcdmekThAWPGexCCjfup9PRWQnQdf~0rdKewsn7LAwxPpR2IwSgivX2O~s46UKJjcVWy9wogq7QX9NAzQIUoV29DVzD18qR7AjB-byeBtuafKvGvg__"
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
            src="https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4zCtFmv0fiKRy1eD5~KtUJtyMMPY3KXydDxoe8jWJNN2V6tq1WDqUEvzwyiqW3~ixWv~tcoT3NWC3THoBYywjfv5NPYqarNyPGLmsajnMc-PdMc5IqFU8vAIrmmE2qXtY1ypEoIIcDo3G-IKKFilCN4M45XdYd6SGsnYTrqs-zVbb7K8cASTy-cwQK~eXjY7SSoGkT5EY1wF4XR7KXQzxn7zAI0pGRk46j75-yloV0oGlU3Z3uOnfF0Ol1DzvJKMZ-Lp-j2hOTwCDkCOZG5Ue-X1oviqzH~00fuDVD1QeToOhqBolzZ-BqyDz2BC-yBP2mvvcXtAE4sSQnY5ff3EA__"
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
            src="https://s3-alpha-sig.figma.com/img/b0e6/1e6e/9e0b10bc7df7f8b016a4a4b14a72390c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnbGI97jQAvsSduElyoEwhWDBy3ytk-UwcwPR4fNFQEGeEQV~28hanQuhf5r6umsnzldxFhwhONJyKMjTNU2r2st4byQ6livJ7w6D6wI6ZbYfm7MZIMfy5JnzMqplGZ5CWHjnzw84MCz8NlIHKnNlWjWKZajIc6izKmEAz9pMrPxCdOSFT~BTODNdLX9X8cQ52IVybWUQyDjieMs3g69nQrGSufNTGiAjlfO6ZOJj1-R5C7zpMmozB5NCDRCpyQjHuwK6bpVYKF3UomzKKTgts6gX1OcJFyLDoqdugwOiVUuz8GBT6AMunwKhFjIYWTewHsEJiM2evEe8ST1BAX5Yw__"
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
      data: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://s3-alpha-sig.figma.com/img/d138/c800/8678b73810e3250021201b1c109dfd71?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8kiFsfkEy6OxlDBABAKQ9SbzMCUFr1hJz9YucH2N69g-btcYP97j~lPyoYJC6fVOQGGXyr7G7OFMtS1hozUMvkuEsSvyV9f7ysmt6R4WggMeXVhVaEAvfQRqcOvaLvRvt831tVU-B1YR-7R7upWuuIH3B4iUmz6ot4evXmUEInB-NH~zVmkWl5E~kVKKXcX~uxgD8uV0ayHbjFsoxAlZMWbHuTQ2ai9nbBqTTXZfzlon6kOSIc1WVeKWK8qozVpvkp77GHQ1F3nM1HZbMTJZrNNMy8-G3vEJjQLTWHsNZt-3bUgRR5y4-fcPqkP1NHIZ1ezoko3YGY2HndqnzLMWw__"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">Laura Lewis</span>
        </div>
      ),
      post: 'Autonomous Worlds Ecosystem',
      rank: 17,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">2.102</span>
        </div>
      ),
    },
    {
      data: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsTTmZc0rLNJgBCpuHWLL5loeEOW6QmPzmNTyrl4bSellvqIS1ieS8bF5kVdkTSeFIi7g1n4rt5WO9xoPLawO71FBgjEbc368XmOSf4jkv3~46VYjLGBvoS3q2~VFMqmU-dK5bVBFk0Y8ayggsqIC4o90qCslk8nfmG2sggPPaeqfDM3fmTFd3sehCELMUEQIBooyeIsUJmU6kxGM-53QxtMrLYJQp774tDSGA9W4rQVtztpPWWqLOOtuXN4lZZMezMcP2WQZyJMOb2zdCY5VoNen6dUeXLqK9~JrfWP8DEqEbGSqbv86QQ1NR8SF-HZ-07kzznXDMP-Th47PJSaQw__"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">Brenda Wilson</span>
        </div>
      ),
      post: 'Autonomous Worlds Ecosystem',
      rank: 23,
      value: (
        <div className="flex items-center space-x-1">
          <Icon />
          <span className="text-[#0F1419] text-xs">1.034</span>
        </div>
      ),
    },
    {
      data: (
        <div className="flex items-center space-x-1">
          <img
            onClick={openProfile}
            src="https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4zCtFmv0fiKRy1eD5~KtUJtyMMPY3KXydDxoe8jWJNN2V6tq1WDqUEvzwyiqW3~ixWv~tcoT3NWC3THoBYywjfv5NPYqarNyPGLmsajnMc-PdMc5IqFU8vAIrmmE2qXtY1ypEoIIcDo3G-IKKFilCN4M45XdYd6SGsnYTrqs-zVbb7K8cASTy-cwQK~eXjY7SSoGkT5EY1wF4XR7KXQzxn7zAI0pGRk46j75-yloV0oGlU3Z3uOnfF0Ol1DzvJKMZ-Lp-j2hOTwCDkCOZG5Ue-X1oviqzH~00fuDVD1QeToOhqBolzZ-BqyDz2BC-yBP2mvvcXtAE4sSQnY5ff3EA__"
            alt=""
            className="w-5 rounded-full cursor-pointer"
          />
          <span className="text-[#0F1419] text-xs">Steven Garcia</span>
        </div>
      ),
      post: 'Autonomous Worlds Ecosystem',
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
      text: 'Holders (16)',
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
                    <TableCell>Data</TableCell>
                    <TableCell>Post</TableCell>
                    <TableCell>Rank</TableCell>
                    <TableCell>Reward</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ranking.map((row, i) => (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
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
