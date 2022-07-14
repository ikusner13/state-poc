import { Prism } from "@mantine/prism";
import { Code } from "./Code";

const componentCode = `
const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch();

return (
  <div>
    <div>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
    <Button
      onClick={() => dispatch(incrementByAmount(count))}
    >
      +{count}
    </Button>
  </div>
);
`;

const storeCode = `
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
`;

export const RtkCode = () => {
  return <Code storeCode={storeCode} componentCode={componentCode} />;
};
