import { useRequest } from 'ahooks';

import useGlobalUserStore from '../../store/useGlobalUserStore';
import { contractRequestHttp } from '../request';

const useWalletAccounts = () => {
  const result = useRequest(() => contractRequestHttp.get('/xfans/api/shares/accounts'), {
    manual: true,
    onSuccess(response: any) {
      useGlobalUserStore.setState({
        accounts: response.accounts,
        balance: response.balance,
      });
    },
  });

  return result;
};

export { useWalletAccounts };
