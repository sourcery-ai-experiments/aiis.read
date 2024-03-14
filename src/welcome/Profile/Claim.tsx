import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useToggle } from 'ahooks';
import dayjs from 'dayjs';
import { NumberDisplayer } from '../../components/NumberDisplayer';
import { BasicButton, PrimaryLoadingButton } from '../../components/Button';
import Modal from '../../components/Modal';
import { useTweetReward } from '../../service/tweet';
import useTweetStore from '../../store/useTweetStore';
import useUserStore from '../../store/useUserStore';
import { useWalletClaimReward } from '../../service/wallet';

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

const Claim = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);
  const { tweetRewardList } = useTweetStore((state) => ({ ...state }));
  const { run: getReward } = useTweetReward();
  const { userInfo } = useUserStore((state) => ({ ...state }));

  /*
  (index=2,address=0x9eB08EE3f22bFe5c75FBa5cdd7465eE4c162e07E,amount=1000000000000, proof=["877c7a6afac7a1fb0ef4579e11d4585cb37842b5f0031649cc0528d902a82596","702a8c1786ae8aef1ee2322a325247897950a17c8de6d04edb78e096b272f0c4","e43a4e96371d12aba133cc4349d77d570db6b2776a37c9d5cd2e1e25acdbde08"])
  (index=3,address=0x9eB08EE3f22bFe5c75FBa5cdd7465eE4c162e07E,amount=1000000000000, proof=["0637bbffaf6f1ec2bd5fc12238f0a24cee574963524781f8db2390486e5b2396","5f095dea6356c6651198e485ef419cec5f167fcebebeef886acf714f4234e744","e43a4e96371d12aba133cc4349d77d570db6b2776a37c9d5cd2e1e25acdbde08"])
  (index=4,address=0x9eB08EE3f22bFe5c75FBa5cdd7465eE4c162e07E,amount=1000000000000, proof=["d6b667c9ea2e66dfab42a8c85b14ac0e70886f1206306cdd472b3793aea5d788","5f095dea6356c6651198e485ef419cec5f167fcebebeef886acf714f4234e744","e43a4e96371d12aba133cc4349d77d570db6b2776a37c9d5cd2e1e25acdbde08"])
  (index=5,address=0x9eB08EE3f22bFe5c75FBa5cdd7465eE4c162e07E,amount=1000000000000, proof=["5cd70a734862fe4715ebbeeeda058344b92599ce7a5ad6b172ece947318c6c38"])
  */
  const { loading, run: claimReward } = useWalletClaimReward(
    tweetRewardList,
    () => {
      getReward();
    },
    () => {
      getReward();
    }
  );

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
          <div className="mt-[15px] h-[1px] w-[438px] bg-[#EBEEF0]"></div>

          <div className="mt-6 flex w-full items-center justify-between">
            <div className="flex items-center space-x-[10px]">
              <span className="text-xl font-bold text-[#2E2E32]" style={{ letterSpacing: 1 }}>
                Reward:
              </span>
              <div className="flex flex-col space-y-2">
                <span className="text-xl font-medium leading-[20px] text-[#0F1419]">$294.3</span>
                <div className="flex items-center space-x-1">
                  <Icon />
                  <span className="text-sm font-medium text-[#919099]">
                    <NumberDisplayer
                      className="text-xs font-medium text-[#0F1419]"
                      text={userInfo?.rewardUnClaimed}
                    />
                  </span>
                </div>
              </div>
            </div>

            <PrimaryLoadingButton
              classes={{
                contained: '!py-[14px] !px-[30px] !w-[170px]',
              }}
              onClick={() => {
                claimReward();
              }}
              disabled={loading}
              loading={loading}
              loadingPosition="end"
              endIcon={<span />}
            >
              Claim
            </PrimaryLoadingButton>
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
                      {dayjs(row.createdAt).format('YYYY/MM/DD HH:mm')}
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
                        <span className="text-xs text-[#0F1419]">
                          <NumberDisplayer text={row.totalRewardAmount} />
                        </span>
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderColor: '#EBEEF0',
                      }}
                    >
                      <div className="flex items-center space-x-1">
                        <Icon />
                        <span className="text-xs text-[#0F1419]">
                          <NumberDisplayer text={row.ethAmount} />
                        </span>
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
