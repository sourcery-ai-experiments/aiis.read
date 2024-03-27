import React, { useEffect } from 'react';
import { Drawer, Switch } from '@mui/material';
import { useRequest } from 'ahooks';

import ArrowBackIcon from '../../../components/icons/ArrowBackIcon';
import { success } from '../../../components/Toaster';
import { blockUser, getUserList } from '../../../service/community';

type Props = {
  open?: boolean;
  onClose(): void;
  subject?: string;
  isOwner: boolean;
};

export default function MembersDrawer({ isOwner = false, subject, open = false, onClose }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: userList = [], run: runGetUserList } = useRequest(() => getUserList(subject!), {
    manual: true,
  });

  useEffect(() => {
    if (open) {
      runGetUserList();
    }
  }, [open, runGetUserList]);
  return (
    <Drawer
      sx={{
        width: '433px',
        '& .MuiDrawer-paper': {
          width: '433px',
          border: 'none',
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <div className="relative h-full bg-[#FDFDFD] px-[16px] pr-[13px]">
        <header className="flex h-[64px] items-center justify-between">
          <div className="flex items-center font-bold text-[#0F1419]">
            <ArrowBackIcon className="cursor-pointer" onClick={onClose} />
            <span className="ml-[8px]">Members</span>
          </div>
        </header>
        {userList.map((item) => (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          <MemberItem
            key={item.address}
            disabled={!isOwner || item.address === subject}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            subject={subject!}
            user={item}
          />
        ))}
      </div>
    </Drawer>
  );
}

function MemberItem({
  disabled,
  user,
  subject,
}: {
  disabled: boolean;
  subject: string;
  user: CommunityUserInfo;
}) {
  function handleSwitchChange(checked: boolean) {
    if (checked) {
      blockUser(subject, user.address, true).then(() => {
        success('block successful');
      });
    } else {
      blockUser(subject, user.address, false).then(() => {
        success('unblock successful');
      });
    }
  }
  return (
    <div className="flex border-b border-[#EBEEF0] py-[8px] text-sm">
      <img className="h-[44px] w-[44px] rounded-full" src={user.avatar} alt="avatar" />
      <div className="ml-[14px] flex-1">
        <div className="font-bold text-[#0F1419]">{user.username}</div>
        <div className="text-[#919099]">
          <span className="text-sm">Holding</span>
          <span className="font- ml-[6px] text-base">{+user.shares / 100}</span>
        </div>
      </div>
      <div className="">
        <Switch
          disabled={disabled}
          defaultChecked={user.isBlocked}
          onChange={(_, checked) => handleSwitchChange(checked)}
        />
        <span className="font-medium text-[#0F1419]">Block</span>
      </div>
    </div>
  );
}
