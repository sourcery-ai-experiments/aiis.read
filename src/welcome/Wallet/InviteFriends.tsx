import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TableFooter, TablePagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useToggle } from 'ahooks';

import { BasicButton } from '../../components/Button';
import Modal from '../../components/Modal';
import TruncateText from '../../components/TruncateText';
import { ROWS_PER_PAGE } from '../../constants';
import { useUserInvite } from '../../service/user';
import useGlobalStore from '../../store/useGlobalStore';
import useGlobalUserStore from '../../store/useGlobalUserStore';
import useUserStore from '../../store/useUserStore';

const Copy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M4.3335 4.14419V2.60449C4.3335 2.08673 4.75323 1.66699 5.271 1.66699H13.396C13.9138 1.66699 14.3335 2.08673 14.3335 2.60449V10.7295C14.3335 11.2473 13.9138 11.667 13.396 11.667H11.8389"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.729 4.33301H2.604C2.08624 4.33301 1.6665 4.75274 1.6665 5.27051V13.3955C1.6665 13.9133 2.08624 14.333 2.604 14.333H10.729C11.2468 14.333 11.6665 13.9133 11.6665 13.3955V5.27051C11.6665 4.75274 11.2468 4.33301 10.729 4.33301Z"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinejoin="round"
    />
  </svg>
);

const InviteFriends = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);
  const accounts = useGlobalUserStore((state) => state.accounts);
  const [page, setPage] = useState(0);

  const { run: getInvite, loading } = useUserInvite();
  const { inviteInfo } = useUserStore((state) => ({ ...state }));

  useEffect(() => {
    getInvite({ offset: page * ROWS_PER_PAGE, limit: ROWS_PER_PAGE });
  }, [getInvite, page]);

  function handlePageChange(nextPage: number) {
    setPage(nextPage);
  }

  return (
    <>
      <BasicButton
        onClick={open}
        classes={{
          outlined: '!h-[40px]',
        }}
      >
        <span className="text-[15px] font-medium">Invite Friends</span>
      </BasicButton>
      <Modal onClose={close} open={isOpen} width={553}>
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32]">Invite Friends</h2>
          <div className="mt-[15px] h-[1px] w-[438px] bg-[#EBEEF0]"></div>

          <div
            className="relative mt-6 w-full rounded-[8px] border border-[#EBECED] bg-[#F7F9FA] py-[10px]"
            style={{ boxShadow: '3px 2px 3.5px 0px rgba(0, 0, 0, 0.05)' }}
          >
            <div className="flex">
              <div className="w-1/2">
                <div className="flex flex-col items-center space-y-[14px]">
                  <span className="text-sm font-medium text-[#919099]">Your Invite</span>
                  <span className="text-xl font-bold leading-[20px] text-[#1A1D1F]">
                    {inviteInfo?.inviteCount}
                  </span>
                </div>
              </div>
              <div className="absolute left-1/2 top-[12px] h-[50px] w-[1px] bg-[#EBECED]"></div>
              <div className="w-1/2">
                <div className="flex flex-col items-center space-y-[14px]">
                  <span className="text-sm font-medium text-[#919099]">Invite Points</span>
                  <span className="text-xl font-bold leading-[20px] text-[#1A1D1F]">
                    {inviteInfo?.earnedPoints}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex h-[56px] w-full overflow-hidden rounded-[8px] border border-[#EBECED] text-base">
            <div className="flex flex-1 items-center pl-[26px] font-medium text-[#1A1D1F]">
              <TruncateText text={accounts[0] ?? ''} startLength={7} endLength={7} />
            </div>
            <CopyToClipboard
              text={accounts[0] ?? ''}
              onCopy={() => {
                useGlobalStore.setState({
                  messageOpen: true,
                  messageType: 'succes',
                  message: 'copy successfully',
                });
              }}
            >
              <div className="flex w-[186px] cursor-pointer items-center justify-center bg-[#9A6CF9]">
                <div className="flex items-center space-x-2">
                  <span className="text-white">Copy Invite Code</span>
                  <Copy />
                </div>
              </div>
            </CopyToClipboard>
          </div>

          <TableContainer
            sx={{
              marginTop: 2,
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>invite Points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inviteInfo?.items == null || inviteInfo?.items.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="!text-center">
                      no records found
                    </TableCell>
                  </TableRow>
                ) : (
                  inviteInfo.items.map((row, i) => (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {row.invitedAt}
                      </TableCell>
                      <TableCell>{row.invitedUsername}</TableCell>
                      <TableCell>{row.points}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
              {(inviteInfo?.inviteCount ?? 0) > ROWS_PER_PAGE && (
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      disabled={loading}
                      count={inviteInfo?.inviteCount ?? 0}
                      page={page}
                      onPageChange={(_, nextPage) => handlePageChange(nextPage)}
                      rowsPerPage={ROWS_PER_PAGE}
                      rowsPerPageOptions={[]}
                    />
                  </TableRow>
                </TableFooter>
              )}
            </Table>
          </TableContainer>
        </div>
      </Modal>
    </>
  );
};

export default InviteFriends;
