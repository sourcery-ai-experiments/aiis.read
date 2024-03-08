import { create } from 'zustand';

interface GlobalUserStoreProps {
  accounts: string[];
  balance: string;
  getFormattedAddress: () => string;
}

const useGlobalUserStore = create<GlobalUserStoreProps>((set, get) => ({
  accounts: [],
  balance: '',
  getFormattedAddress: () => {
    const a = get().accounts;
    if (a.length <= 0) {
      return '';
    }
    const prefix = a[0].slice(0, 6);
    const suffix = a[0].slice(-6);
    return `${prefix}...${suffix}`;
  },
}));

export default useGlobalUserStore;
