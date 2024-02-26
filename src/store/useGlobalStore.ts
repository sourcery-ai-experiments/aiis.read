import { create } from 'zustand';

interface GlobalStoreProps {
  token: string;
  message: string;
  messageType: string;
  messageOpen: boolean;
  closeMessage: () => void;
}

const useGlobalStore = create<GlobalStoreProps>((set) => ({
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjc3MDg2NzY0MTcsIm9yaWdfaWF0IjoxNzA4Njc2NDc3LCJzdWIiOjR9.7mQn8r-qt-9gcw3rnofX3poCdMZMnOLccxqURftw1yM',
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
