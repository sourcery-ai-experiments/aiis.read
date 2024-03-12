import { create } from 'zustand';

interface ShareStoreProps {
  shareList: ShareProps[] | null;
  topList: TopUserProps[] | null;
  newList: TopUserProps[] | null;
  recentList: TopUserProps[] | null;
  holderList: HolderProps[] | null;
}

const useShareStore = create<ShareStoreProps>((set) => ({
  shareList: null,
  topList: null,
  newList: null,
  recentList: null,
  holderList: null,
}));

export default useShareStore;