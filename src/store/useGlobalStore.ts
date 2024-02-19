import { create } from 'zustand';

interface GlobalStoreProps {
  token: string;
  message: string;
  messageType: string;
  messageOpen: boolean;
  closeMessage: () => void;
}

const useGlobalStore = create<GlobalStoreProps>((set) => ({
  token: '',
  message: '',
  messageType: '',
  messageOpen: false,
  closeMessage() {
    set({
      messageOpen: false,
      message: '',
      messageType: '',
    });
  },
}));

export default useGlobalStore;
