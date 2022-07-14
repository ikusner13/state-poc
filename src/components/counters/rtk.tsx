import type { NextPage } from "next";
import type { RootState } from "../../store/rtk";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../store/rtk";
import { Button, Group, Container } from "@mantine/core";
import { RtkCode } from "../../components/code/rtkCode";

const Value = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return <span>{count}</span>;
};

const Rtk: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Redux Toolkit</h1>
      <Group position="apart" style={{ width: "100%" }}>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Value />
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </Group>
      <Button mt={10} fullWidth onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </Button>
      <RtkCode />
    </Container>
  );
};

export default Rtk;
