import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useToggle } from 'ahooks';
import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';

import { BasicButton, PrimaryButton } from '../../components/Button';
import Modal from '../../components/Modal';
import { NumberDisplayer } from '../../components/NumberDisplayer';
import { useTweetReward } from '../../service/tweet';
import useTweetStore from '../../store/useTweetStore';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
    <g clipPath="url(#clip0_975_31820)">
      <path d="M5.00044 15.9124V11.9423L0.1427 9.07031L5.00044 15.9124Z" fill="#C7C7E0" />
      <path d="M5.01648 15.9124V11.9423L9.87431 9.07031L5.01657 15.9124H5.01648Z" fill="#A3A3D2" />
      <path d="M5.0006 10.9556V5.88867L0.0870361 8.11294L5.0006 10.9556Z" fill="#C7C7E0" />
      <path d="M5.01648 10.9556V5.88867L9.93004 8.11302L5.01648 10.9556Z" fill="#A3A3D2" />
      <path d="M0.0870361 8.11259L5.00051 0.0878906V5.88824L0.0870361 8.11259Z" fill="#C7C7E0" />
      <path d="M9.93008 8.11259L5.0166 0.0878906V5.88824L9.93008 8.11259Z" fill="#A3A3D2" />
    </g>
    <defs>
      <clipPath id="clip0_975_31820">
        <rect width="10" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const rows = [
  {
    date: '2023/02/01',
    creator: 'Devon Lane',
    rank: '#2',
    total: (
      <div className="flex items-center space-x-1">
        <Icon />
        <span className="text-[#0F1419] text-xs">0.234</span>
      </div>
    ),
    reward: (
      <div className="flex items-center space-x-1">
        <Icon />
        <span className="text-[#0F1419] text-xs">0.001</span>
      </div>
    ),
  },
  {
    date: '2023/01/18',
    creator: 'Steven Garcia',
    rank: '#45',
    total: (
      <div className="flex items-center space-x-1">
        <Icon />
        <span className="text-[#0F1419] text-xs">1.452</span>
      </div>
    ),
    reward: (
      <div className="flex items-center space-x-1">
        <Icon />
        <span className="text-[#0F1419] text-xs">5.01</span>
      </div>
    ),
  },
  {
    date: '2022/12/25',
    creator: 'Patricia Smith',
    rank: '#2',
    total: (
      <div className="flex items-center space-x-1">
        <Icon />
        <span className="text-[#0F1419] text-xs">3.24</span>
      </div>
    ),
    reward: (
      <div className="flex items-center space-x-1">
        <Icon />
        <span className="text-[#0F1419] text-xs">1.35</span>
      </div>
    ),
  },
];

const Claim = (props: { price?: string }) => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);
  const { tweetRewardList } = useTweetStore((state) => ({ ...state }));

  const { run: getReward } = useTweetReward();
  const totalPrice =
    tweetRewardList?.reduce((total, item) => total + Number(item.totalRewardAmount), 0) ?? 0;

  useEffect(() => {
    getReward();
  }, []);

  return (
    <>
      <BasicButton
        classes={{
          outlined: '!py-1 !px-3 !w-[90px]',
        }}
        onClick={open}
      >
        Claim
      </BasicButton>
      <Modal onClose={close} open={isOpen} width={626}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32]">Claim Reward</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div className="mt-6 flex items-center justify-between w-full">
            <div className="flex items-center space-x-[10px]">
              <span className="text-[#2E2E32] text-xl font-bold" style={{ letterSpacing: 1 }}>
                Reward:
              </span>
              <div className="flex flex-col space-y-2">
                <span className="text-xl leading-[20px] font-medium text-[#0F1419]">
                  $
                  {new BigNumber(totalPrice)
                    .dividedBy(new BigNumber(Math.pow(10, 18)))
                    .multipliedBy(new BigNumber(props.price ?? 0))
                    .toNumber()}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon />
                  <NumberDisplayer
                    className="text-[#919099] text-sm font-medium"
                    text={String(totalPrice) ?? ''}
                  />
                </div>
              </div>
            </div>

            <PrimaryButton
              classes={{
                contained: '!py-[14px] !px-[30px] !w-[170px]',
              }}
            >
              Claim
            </PrimaryButton>
          </div>

          <Divider
            sx={{
              marginTop: 3,
              width: '100%',
              borderColor: '#EBEEF0',
            }}
          />

          <TableContainer
            sx={{
              marginTop: 0,
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      borderColor: '#EBEEF0',
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: '#EBEEF0',
                    }}
                  >
                    Creator
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: '#EBEEF0',
                    }}
                  >
                    Rank
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: '#EBEEF0',
                    }}
                  >
                    Total Reward
                  </TableCell>
                  <TableCell
                    sx={{
                      borderColor: '#EBEEF0',
                    }}
                  >
                    Your Reward
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tweetRewardList?.map((row, i) => (
                  <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        borderColor: '#EBEEF0',
                      }}
                    >
                      {dayjs(row.claimedAt).format('YYYY/MM/DD HH:mm')}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: '#EBEEF0',
                      }}
                    >
                      {row.creator}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: '#EBEEF0',
                      }}
                    >
                      {row.rank}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: '#EBEEF0',
                      }}
                    >
                      <div className="flex items-center space-x-1">
                        <Icon />
                        <NumberDisplayer
                          className="text-[#0F1419] text-xs"
                          text={row.totalRewardAmount}
                        />
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: '#EBEEF0',
                      }}
                    >
                      <div className="flex items-center space-x-1">
                        <Icon />
                        <NumberDisplayer className="text-[#0F1419] text-xs" text={row.ethAmount} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Modal>
    </>
  );
};

export default Claim;
