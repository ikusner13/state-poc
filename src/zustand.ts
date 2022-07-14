import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
}

export const useStore = create<CounterState>()(
  devtools(
    immer((set) => ({
      count: 0,
      increment: () =>
        set((state) => {
          state.count += 1;
        }),
      decrement: () =>
        set((state) => {
          state.count -= 1;
        }),
      incrementByAmount: (amount) =>
        set((state) => {
          state.count += amount;
        }),
    }))
  )
);
