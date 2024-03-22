import { useRequest } from 'ahooks';

import useUserStore from '../../store/useUserStore';
import http, { ResultData } from '../request';
import { XFANS_USERINFO } from '../../constants';
const useUserInfo = () => {
  const result = useRequest<ResultData<UserInfo>, unknown[]>(() => http.get('/api/user/me'), {
    manual: true,
    onSuccess(response) {
      useUserStore.setState({
        userInfo: response.data,
      });
      localStorage.setItem(XFANS_USERINFO, JSON.stringify(response.data));
    },
  });

  return result;
};

const useUserInvite = () => {
  const result = useRequest<ResultData<InviteResponse>, PageProps[]>(
    (params) => http.get('/api/user/invites', params),
    {
      manual: true,
      onSuccess(response) {
        useUserStore.setState({
          inviteInfo: response.data,
        });
      },
    }
  );

  return result;
};

export { useUserInfo, useUserInvite };
