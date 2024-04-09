/**
 * @file 全局状态，自动同步到 storage
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum PageType {
  Login = 'login',
  Invite = 'invite',
  Congratulation = 'congratulation',
  Profile = 'profile',
  Wallet = 'wallet',
}

export interface GlobalStoreProps {
  page: PageType;
  token: string;
  isShowPrice: boolean;
  isShowDrawer: boolean;
  userInfo: UserInfo | null;
  goPage(page: PageType): void;
  logout(): void;
}

const useGlobalStore = create<GlobalStoreProps>()(
  persist(
    (set) => ({
      page: PageType.Login,
      token: '',
      isShowPrice: false,
      isShowDrawer: false,
      userInfo: null,
      goPage(page: PageType) {
        set({ page });
      },
      logout() {
        set({
          token: '',
          page: PageType.Login,
        });
      },
    }),
    {
      name: 'xfans-user-config',
    }
  )
);

export default useGlobalStore;
