import type { NextPage } from "next";
import { Button, Group, Container } from "@mantine/core";
import { useStore } from "../../store/zustand";
import { ZustandCode } from "../../components/code/zustandCode";

const Value = () => {
  const count = useStore((state) => state.count);

  return <span>{count}</span>;
};

const Zustand: NextPage = () => {
  const [increment, decrement, incrementByAmount] = useStore((state) => [
    state.increment,
    state.decrement,
    state.incrementByAmount,
  ]);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Zustand</h1>
      <Group position="apart" style={{ width: "100%" }}>
        <Button onClick={() => increment()}>+</Button>
        <Value />
        <Button onClick={() => decrement()}>-</Button>
      </Group>
      <Button mt={10} fullWidth onClick={() => incrementByAmount(5)}>
        +5
      </Button>
      <ZustandCode />
    </Container>
  );
};

export default Zustand;
