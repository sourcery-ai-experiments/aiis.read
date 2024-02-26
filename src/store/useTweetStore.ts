import { create } from 'zustand';

interface ShareStoreProps {
  tweetList: ShareProps[] | null;
}

const useTweetStore = create<ShareStoreProps>((set) => ({
  tweetList: null,
}));

export default useTweetStore;
