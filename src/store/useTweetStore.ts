import { create } from 'zustand';

interface ShareStoreProps {
  tweetList: TweetProps[] | null;
  tweetListTotal: number;
  tweetRewardList: TweetRewardProps[] | null;
  tweetRewardListTotal: number;
  tweetRewardTotalRewardAmount: string;
  rewardHistoryList: RewardHistoryProps[] | null;
  rewardHistoryListTotal: number;
  rewardHistoryTotalRewardAmount: string;
  tweetYourRank: any[] | null;
  rewardStage: { startedAt: string; endedAt: string } | null;
}

const useTweetStore = create<ShareStoreProps>((set) => ({
  tweetList: null,
  tweetListTotal: 0,
  tweetRewardList: null,
  tweetRewardListTotal: 0,
  tweetRewardTotalRewardAmount: '0',
  rewardHistoryList: null,
  rewardHistoryListTotal: 0,
  rewardHistoryTotalRewardAmount: '0',
  tweetYourRank: null,
  rewardStage: null,
}));

export default useTweetStore;
