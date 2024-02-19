import useGlobalStore from '../store/useGlobalStore';
// import { message } from "antd";

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number) => {
  switch (status) {
    case 400:
      useGlobalStore.setState({
        message: '请求失败！请您稍后重试',
        messageType: 'error',
        messageOpen: true,
      });
      break;
    case 401:
      useGlobalStore.setState({ token: '' });
      useGlobalStore.setState({
        message: '登录失效！请您重新登录',
        messageType: 'error',
        messageOpen: true,
      });
      break;
    case 403:
      useGlobalStore.setState({
        message: '当前账号无权限访问！',
        messageType: 'error',
        messageOpen: true,
      });
      break;
    case 404:
      useGlobalStore.setState({
        message: '你所访问的资源不存在！',
        messageType: 'error',
        messageOpen: true,
      });
      break;
    case 405:
      useGlobalStore.setState({
        message: '请求方式错误！请您稍后重试',
        messageType: 'error',
        messageOpen: true,
      });
      break;
    case 408:
      useGlobalStore.setState({
        message: '请求超时！请您稍后重试',
        messageType: 'error',
        messageOpen: true,
      });
      break;
    case 500:
      useGlobalStore.setState({ message: '服务异常！', messageType: 'error', messageOpen: true });
      break;
    case 502:
      useGlobalStore.setState({ message: '网关错误！', messageType: 'error', messageOpen: true });
      break;
    case 503:
      useGlobalStore.setState({ message: '服务不可用！', messageType: 'error', messageOpen: true });
      break;
    case 504:
      useGlobalStore.setState({ message: '网关超时！', messageType: 'error', messageOpen: true });
      break;
    default:
      useGlobalStore.setState({ message: '请求失败！', messageType: 'error', messageOpen: true });
  }
};
