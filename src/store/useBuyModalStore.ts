import { create } from 'zustand';

interface useBuyModalStoreProps {
  open: boolean;
}

const useBuyModalStore = create<useBuyModalStoreProps>((set) => ({
  open: false,
}));

export default useBuyModalStore;
