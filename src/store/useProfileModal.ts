import { create } from 'zustand';

interface ProfileModalProps {
  open: boolean;
  openProfile: (userInfo?: any, key?: number) => void;
  closeProfile: () => void;
  currentInfo: TopUserProps | null;
  currentKey: number;
}

const useProfileModal = create<ProfileModalProps>((set) => ({
  open: false,
  openProfile: (userInfo?: any, key = 0) => {
    set({ open: true, currentInfo: userInfo, currentKey: key });
  },
  closeProfile: () => set({ open: false }),
  currentInfo: null,
  currentKey: 0,
}));

export default useProfileModal;
