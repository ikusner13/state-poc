import { Prism } from "@mantine/prism";
import { Code } from "./Code";

const componentCode = `
const count = useStore((state) => state.count);
const [increment, decrement, incrementByAmount] = useStore((state) => [
  state.increment,
  state.decrement,
  state.incrementByAmount,
]);

return (
  <div>
    <div>
      <Button onClick={() => increment()}>+</Button>
      <span>{count}</span>
      <Button onClick={() => decrement()}>-</Button>
    </div>
    <Button
      onClick={() => incrementByAmount(count)}
    >
      +{count}
    </Button>
  </div>
);
`;

const storeCode = `
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
  return <Code storeCode={storeCode} componentCode={componentCode} />;
};
