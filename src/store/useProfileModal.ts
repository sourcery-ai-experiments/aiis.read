import { create } from 'zustand';

interface ProfileModalProps {
  open: boolean;
  openProfile: () => void;
  closeProfile: () => void;
}

const useProfileModal = create<ProfileModalProps>((set) => ({
  open: false,
  openProfile: () => set({ open: true }),
  closeProfile: () => set({ open: false }),
}));

export default useProfileModal;
