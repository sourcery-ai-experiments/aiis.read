import { create } from 'zustand';

interface ShareStoreProps {
  shareList: ShareProps[] | null;
  rankList: ShareProps[] | null;
  newList: ShareProps[] | null;
  recentList: ShareProps[] | null;
}

const useShareStore = create<ShareStoreProps>((set) => ({
  shareList: null,
  rankList: null,
  newList: null,
  recentList: null,
}));

export default useShareStore;
