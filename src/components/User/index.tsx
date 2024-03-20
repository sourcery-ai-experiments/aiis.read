import React from 'react';

interface UserNameProps {
  username?: string;
  twitterUsername?: string;
}

const UserName = (props: UserNameProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-[17px] font-bold text-[#0F1419]">{props.username}</span>
      <span className="mt-[1px] text-[14px] text-[#5B7083]">@{props.twitterUsername}</span>
    </div>
  );
};

export default UserName;
