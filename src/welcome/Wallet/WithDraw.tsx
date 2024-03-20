import React, { useMemo, useState } from 'react';
import { styled, TextField as MTextField } from '@mui/material';
import { useToggle } from 'ahooks';
import { isAddress } from 'web3-validator';

import { BackButton, BasicButton, PrimaryButton } from '../../components/Button';
import ETHIcon from '../../components/icons/ETHIcon';
import Modal from '../../components/Modal';
import { NumberDisplayer } from '../../components/NumberDisplayer';
import NumberInput from '../../components/NumberInput';
import { ContractError } from '../../constants';
import useAccount from '../../hooks/useAccount';
import { transfer } from '../../service/contract/shares';
import useGlobalUserStore from '../../store/useGlobalUserStore';

const TextField = styled(MTextField)({
  width: '493px',
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: '#9A6CF9',
      borderRadius: '8px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9A6CF9',
      borderRadius: '8px',
    },
  },
});

const WithDraw = () => {
  const [isOpen, { setLeft: close, setRight: open }] = useToggle(false);
  const [, balance] = useAccount();
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('0');
  const addressHelperText = useMemo(() => {
    if (!isAddress(address)) {
      return ContractError.InvalidAddress;
    }
  }, [address]);

  // function handleAmountChange() {}

  function handleTransferClick() {
    transfer(address, amount);
  }

  return (
    <>
      <BasicButton
        classes={{
          outlined:
            '!py-[10px] !px-[38px] !w-[170px] !text-[#0F1419] !border-[#0F1419] hover:!border-[#9A6CF9]',
        }}
        onClick={open}
      >
        <span className="text-base font-medium">Withdraw</span>
      </BasicButton>
      <Modal
        onClose={close}
        open={isOpen}
        width={553}
        closebuttonstyle={{
          marginTop: '5px',
        }}
      >
        <div className="relative flex flex-col items-center">
          <h2 className="text-[24px] font-medium text-[#2E2E32]">Withdraw</h2>
          <div className="mt-[15px] h-[1px] w-[438px] bg-[#EBEEF0]"></div>
          <p className="my-6 text-sm text-black text-opacity-50">
            Send your ETH to another wallet address on the blast network
          </p>

          <div className="mb-6 w-full space-y-6">
            <TextField
              label="Enter Address"
              error={address !== '' && !isAddress(address)}
              helperText={addressHelperText}
              onChange={(event) => setAddress(event.target.value)}
            />
            <TextField
              label="Enter Amount"
              fullWidth
              value={amount}
              onChange={(event) => setAmount(event.target.value === '' ? '0' : event.target.value)}
            />
          </div>

          <div className="flex space-x-3 self-end">
            <span className="text-sm text-[#0F1419]">Wallet Balance: </span>
            <div className="flex items-center space-x-1">
              <ETHIcon />
              <NumberDisplayer
                className="text-base font-bold text-[#9A6CF9]"
                text={balance.toString()}
                isBigNumber={false}
              />
            </div>
          </div>
          <div className="my-[30px] flex w-full justify-between">
            <BackButton onButtonClick={close} />
            <PrimaryButton
              classes={{
                contained: '!py-[10px] !px-[38px] !w-[170px]',
              }}
              onClick={handleTransferClick}
            >
              <span className="text-[15px] font-medium">Transfer</span>
            </PrimaryButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WithDraw;
