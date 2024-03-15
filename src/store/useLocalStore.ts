import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  isShowPrice: boolean;
}

const useLocalStore = create<State>()(
  persist(
    (set) => ({
      isShowPrice: false,
    }),
    {
      name: 'xfans-user-config',
    }
  )
);

export default useLocalStore;
