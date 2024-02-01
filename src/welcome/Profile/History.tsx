import React from 'react';
import { Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useToggle } from 'ahooks';

import { BasicButton } from '../../components/Button';
import Modal from '../../components/Modal';

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
];

const History = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);

  return (
    <>
      <BasicButton
        variant="outlined"
        disableRipple
        classes={{
          outlined: '!py-1 !px-3 !w-[90px]',
        }}
        onClick={open}
      >
        History
      </BasicButton>
      <Modal onClose={close} open={isOpen} width={626}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32]">Claim History</h2>
          <div className="mt-[15px] w-[438px] bg-[#EBEEF0] h-[1px]"></div>

          <div className="mt-6 flex items-center w-full">
            <div className="flex items-center space-x-[10px]">
              <span className="text-[#2E2E32] text-xl font-bold">Reward:</span>
              <div className="flex flex-col space-y-[6px]">
                <span className="text-xl leading-[20px] font-medium">$294.3</span>
                <div className="flex items-center space-x-1">
                  <Icon />
                  <span className="text-[#919099] text-sm font-medium">0.2</span>
                </div>
              </div>
            </div>
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
                {rows.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        borderColor: '#EBEEF0',
                      }}
                    >
                      {row.date}
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
                      {row.total}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: '#EBEEF0',
                      }}
                    >
                      {row.reward}
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

export default History;
