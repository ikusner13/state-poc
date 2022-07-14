import { Prism } from "@mantine/prism";

const Code = `
export const useCounterStore = create<CounterState>()(
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
`;

export const ZustandCode = () => {
  return (
    <Prism noCopy language="tsx">
      {Code}
    </Prism>
  );
};
