import { useRequest } from 'ahooks';

import useGlobalUserStore from '../../store/useGlobalUserStore';
import { contractRequestHttp } from '../request';

const useWalletAccounts = () => {
  const result = useRequest(() => contractRequestHttp.get('/xfans/api/user/accounts'), {
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
type ClaimSuccessFunctionType = () => void;
type ClaimFailedFunctionType = () => void;

const useWalletClaimReward = (
  list: TweetRewardProps[] | null,
  success: ClaimSuccessFunctionType,
  failed: ClaimFailedFunctionType
) => {
  const result = useRequest(
    () =>
      contractRequestHttp.post('/xfans/api/pool/claim', {
        list,
      }),
    {
      manual: true,
      onSuccess: success,
      onError: failed,
    }
  );

  return result;
};

export { useWalletAccounts, useWalletClaimReward };
