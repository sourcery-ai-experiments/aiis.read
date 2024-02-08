import React, { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import { NextButton } from '../../components/buttons/loginButton';

import '../../tailwind.css';

const InviteCodeInput = styled(TextField)({
  width: '302px',
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
      borderRadius: '12px',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
      borderRadius: '12px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
      borderRadius: '12px',
    },
  },
});

interface InvitePageProps {
  handleButtonClick: (inviteCode: string) => void; // 修改函数类型以接收邀请码作为参数
}

const InvitePage: FC<InvitePageProps> = ({ handleButtonClick }) => {
  const [inviteCode, setInviteCode] = useState(''); // 添加状态来存储邀请码

  const handleNextButtonClick = () => {
    // 在点击事件中获取输入值并调用传入的函数
    if (inviteCode.trim() !== '') {
      handleButtonClick(inviteCode); // 传递邀请码给父组件的函数
    } else {
      // 如果邀请码为空，可以在这里添加提示或者错误处理
      alert('Invite code is required.');
    }
  };
  return (
    <div className="w-full px-[34px] justify-center text-center items-center min-h-screen">
      <p className=" mt-[81px] text-[#0F1419] text-[24px] leading-[38px] font-bold text-center">
        Invite Code
      </p>
      <p className="text-[#5B7083] my-[44px]  text-[14px] leading-[24px] font-normal text-center mb-[44px]">
        To complete the registration you need to enter an invitation code, we released a small
        number of invitation codes during the beta period, see our tweets
      </p>
      <InviteCodeInput
        value={inviteCode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInviteCode(e.target.value)}
        label="Please enter the invitation code"
        id="custom-css-outlined-input"
      />
      <div className="h-[44px]" />
      <NextButton variant="contained" disableElevation onClick={handleNextButtonClick}>
        Next
      </NextButton>
    </div>
  );
};

export default InvitePage;
