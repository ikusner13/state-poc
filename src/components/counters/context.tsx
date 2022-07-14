import type { NextPage } from "next";
import { Button, Group, Container } from "@mantine/core";
import { useCounterContext } from "../../store/context";
import { ContextCode } from "../../components/code/contextCode";

const Value = () => {
  const [state] = useCounterContext();

  return <span>{state.count}</span>;
};

const Context: NextPage = () => {
  const [, dispatch] = useCounterContext();

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Context Api</h1>
      <Group position="apart" style={{ width: "100%" }}>
        <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
        <Value />
        <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      </Group>
      <Button
        mt={10}
        fullWidth
        onClick={() =>
          dispatch({
            type: "incrementByAmount",
            payload: 5,
          })
        }
      >
        +5
      </Button>
      <ContextCode />
    </Container>
  );
};

export default Context;
