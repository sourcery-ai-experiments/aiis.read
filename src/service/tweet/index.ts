import { useRequest } from 'ahooks';

import useGlobalUserStore from '../../store/useGlobalUserStore';
import useTweetStore from '../../store/useTweetStore';
import http, { ResultData } from '../request';

const useTweetList = () => {
  const result = useRequest<ResultData<ItemsResponse<TweetProps>>, TweetRequest[]>(
    (params) => http.get('/api/twitter/tweets', params),
    {
      manual: true,
      onSuccess(response) {
        useTweetStore.setState({
          tweetList: response.data.items,
          tweetListTotal: response.data.total,
        });
      },
    }
  );

  return result;
};

const useTweetReward = () => {
  const result = useRequest<
    ResultData<ItemsResponse<TweetRewardProps> & { totalRewardAmount: string }>,
    PageProps[]
  >((params) => http.get('/api/twitter/rewards', { status: 1, ...params }), {
    manual: true,
    onSuccess(response) {
      useTweetStore.setState({
        tweetRewardList: response.data.items,
        tweetRewardListTotal: response.data.total,
        tweetRewardTotalRewardAmount: response.data.totalRewardAmount,
      });
    },
  });

  return result;
};

const useTweetRewardHistory = () => {
  const result = useRequest<
    ResultData<ItemsResponse<RewardHistoryProps> & { totalRewardAmount: string }>,
    PageProps[]
  >((params) => http.get('/api/twitter/reward/claim-history', params), {
    manual: true,
    onSuccess(response) {
      useTweetStore.setState({
        rewardHistoryList: response.data.items,
        rewardHistoryListTotal: response.data.total,
        rewardHistoryTotalRewardAmount: response.data.totalRewardAmount,
      });
    },
  });

  return result;
};

type VoteSuccessFunctionType = () => void;

const useTweetVote = (
  tweetId: string,
  tweetAuthorUsername: string,
  success: VoteSuccessFunctionType,
  error: VoteSuccessFunctionType
) => {
  const result = useRequest<ResultData<ItemsResponse<TweetRewardProps>>, unknown[]>(
    () =>
      http.post('/api/twitter/report', {
        tweetId: tweetId,
        tweetAuthorUsername: tweetAuthorUsername,
      }),
    {
      manual: true,
      onSuccess: success,
      onError: error,
    }
  );

  return result;
};

type BatchUserInfoSuccessFunctionType = (result: any) => void;
const useTweetBatchUserInfo = (
  twitterUsernames: string[],
  success: BatchUserInfoSuccessFunctionType,
  error: VoteSuccessFunctionType
) => {
  const result = useRequest<ResultData<ItemsResponse<TweetRewardProps>>, unknown[]>(
    () =>
      http.get('/api/user/batch', {
        twitterUsernames: JSON.stringify(twitterUsernames),
      }),
    {
      manual: true,
      onSuccess: success,
      onError: error,
    }
  );

  return result;
};

const useTweetYourRank = () => {
  const { accounts } = useGlobalUserStore((state) => ({
    ...state,
  }));
  const result = useRequest<ResultData<ItemsResponse<TweetProps>>, TweetRequest[]>(
    () =>
      http.get('/api/twitter/tweets', {
        holder: accounts?.[0] ?? '',
      }),
    {
      manual: true,
      onSuccess(response) {
        useTweetStore.setState({
          tweetYourRank: response.data.items,
        });
      },
    }
  );

  return result;
};

const useTweetRewardStage = () => {
  const result = useRequest<ResultData<{ startedAt: string; endedAt: string }>, unknown[]>(
    () => http.get('/api/twitter/reward/current-stage'),
    {
      manual: false,
      onSuccess(response) {
        useTweetStore.setState({
          rewardStage: response.data,
        });
      },
    }
  );

  return result;
};

export {
  useTweetBatchUserInfo,
  useTweetList,
  useTweetReward,
  useTweetRewardHistory,
  useTweetRewardStage,
  useTweetVote,
  useTweetYourRank,
};
