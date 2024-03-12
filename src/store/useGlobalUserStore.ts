import { create } from 'zustand';

interface GlobalUserStoreProps {
  accounts: string[];
  balance: string;
}

const useGlobalUserStore = create<GlobalUserStoreProps>((set, get) => ({
  accounts: [],
  balance: '',
}));

export default useGlobalUserStore;
