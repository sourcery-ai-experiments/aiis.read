import { create } from 'zustand';

interface ShareStoreProps {
  tweetList: TweetProps[] | null;
  tweetRewardList: TweetRewardProps[] | null;
  rewardHistoryList: RewardHistoryProps[] | null;
}

const useTweetStore = create<ShareStoreProps>((set) => ({
  tweetList: null,
  tweetRewardList: null,
  rewardHistoryList: null,
}));

export default useTweetStore;
