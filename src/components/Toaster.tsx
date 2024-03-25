import React from 'react';
import { createPortal } from 'react-dom';
import { Snackbar } from '@mui/material';
import useGlobalStore from '../store/useGlobalStore';

// toaster
const XFANS_TOASTER_SUCCESS = 'xfans_toaster_success';
const XFANS_TOASTER_ERROR = 'xfans_toaster_error';

export enum ToastMessage {
  VOTE_SUCCESS = '投票成功',
  VOTE_FAILED = '注册失败!',
  CONGRATULATION = 'congratulation!',
  INVITE_CODE_ERROR = 'invite code error',
  REQUEST_FAILURE_RETRY = '请求失败！请您稍后重试',
  LOGIN_FAILURE_RETRY = '登录失效！请您重新登录',
  NO_PERMISSION = '当前账号无权限访问！',
  NO_RESOURCE = '你所访问的资源不存在！',
  REQUEST_METHOD_ERROR = '请求方式错误！请您稍后重试',
  REQUEST_TIMEOUT_RETRY = '请求超时！请您稍后重试',
  NETWORK_ERROR_RETRY = '网络错误！请您稍后重试',
  SERVICE_ERROR = '服务异常！',
  GATEWAY_ERROR = '网关错误！',
  SERVICE_UNAVALIABLE = '服务不可用！',
  GATEWAY_TIMEOUT = '网关超时！',
  REQUEST_FAILURE = '请求失败！',
  CLAIM_FAILURE = 'Claim 失败',
  CLAIM_SUCCESS = 'Claim 成功',
  TRAMSACTION_COMPLETED = 'Transaction completed',
  COPY_SUCCESS = 'copy successfully',
  // CLAIM_SUCCESS = 'Claim 成功',
  // CLAIM_SUCCESS = 'Claim 成功',
  // CLAIM_SUCCESS = 'Claim 成功',
  // CLAIM_SUCCESS = 'Claim 成功',
}

export function success(message: string) {
  useGlobalStore.setState({
    message,
    messageType: XFANS_TOASTER_SUCCESS,
    messageOpen: true,
  });
}

export function error(message: string) {
  useGlobalStore.setState({
    message,
    messageType: XFANS_TOASTER_ERROR,
    messageOpen: true,
  });
}

export default function Toaster() {
  const { message, messageType, messageOpen, closeMessage } = useGlobalStore();

  return createPortal(
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={messageOpen}
      onClose={closeMessage}
      message={message}
      key={message}
      autoHideDuration={3000}
    >
      <div
        className={`flex items-center rounded-[15px] border bg-white px-6 py-5 text-black ${
          messageType === XFANS_TOASTER_SUCCESS ? 'border-[#56B671]' : 'border-[#FF645E]'
        }`}
      >
        {messageType === XFANS_TOASTER_SUCCESS ? <Succes /> : <Error />}
        <span className="ml-1 text-[20px] font-medium">{message}</span>
      </div>
    </Snackbar>,
    document.body
  );
}

const Succes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path
      d="M15.0003 26.1109C21.1368 26.1109 26.1114 21.1363 26.1114 14.9998C26.1114 8.86328 21.1368 3.88867 15.0003 3.88867C8.86377 3.88867 3.88916 8.86328 3.88916 14.9998C3.88916 21.1363 8.86377 26.1109 15.0003 26.1109Z"
      fill="#00C566"
    />
    <path
      d="M10.5557 15.0003L13.889 18.3337L20.5557 11.667"
      stroke="white"
      strokeWidth="2.22222"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Error = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path
      d="M15.0005 9.99902V14.999M15.0005 19.999H15.013M27.5005 14.999C27.5005 21.9026 21.9041 27.499 15.0005 27.499C8.09693 27.499 2.50049 21.9026 2.50049 14.999C2.50049 8.09546 8.09693 2.49902 15.0005 2.49902C21.9041 2.49902 27.5005 8.09546 27.5005 14.999Z"
      stroke="#F04438"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
