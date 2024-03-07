import { create } from 'zustand';

interface ProfileModalProps {
  open: boolean;
  openProfile: (userInfo?: any) => void;
  closeProfile: () => void;
  currentInfo: TopUserProps | null;
}

const useProfileModal = create<ProfileModalProps>((set) => ({
  open: false,
  openProfile: (userInfo?: any) => {
    set({ open: true, currentInfo: userInfo });
  },
  closeProfile: () => set({ open: false }),
  currentInfo: null,
}));

export default useProfileModal;
