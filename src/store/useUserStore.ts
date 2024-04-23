import { create } from 'zustand';

interface UserStoreProps {
  userInfo: UserInfo | null;
  inviteInfo: InviteResponse | null;
}

const useUserStore = create<UserStoreProps>((set) => ({
  userInfo: null,
  inviteInfo: null,
}));

export default useUserStore;
