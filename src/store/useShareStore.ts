import { create } from 'zustand';

interface ShareStoreProps {
  shareList: ShareProps[] | null;
  topList: TopUserProps[] | null;
  newList: TopUserProps[] | null;
  recentList: TopUserProps[] | null;
  holderList: HolderProps[] | null;
  holderListTotal: number;
  holderingList: HolderProps[] | null;
  holderingListTotal: number;
}

const useShareStore = create<ShareStoreProps>((set) => ({
  shareList: null,
  topList: null,
  newList: null,
  recentList: null,
  holderList: null,
  holderListTotal: 0,
  holderingList: null,
  holderingListTotal: 0,
}));

export default useShareStore;
