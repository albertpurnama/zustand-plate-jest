import { create } from 'zustand';

type StoreSlice = {
  count: number;
  increment: () => void;
};

export const useStore = create<StoreSlice>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
