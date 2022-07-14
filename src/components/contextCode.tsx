import { Prism } from "@mantine/prism";

const Code = `
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "incrementByAmount":
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export const CounterContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => null,
]);

export const CounterProvider = ({
  children,
}: {children: React.ReactNode;}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
`;

export const ContextCode = () => {
  return (
    <Prism noCopy language="tsx">
      {Code}
    </Prism>
  );
};
