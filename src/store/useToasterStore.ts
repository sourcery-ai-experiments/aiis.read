import { create } from 'zustand';

interface ToasterStoreProps {
  message: string;
  messageType: string;
  messageOpen: boolean;
  closeMessage: () => void;
}

const useToasterStore = create<ToasterStoreProps>((set) => ({
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

export default useToasterStore;
