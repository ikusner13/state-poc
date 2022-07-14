import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import type { RootState } from "../src/rtk";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../src/rtk";
import { Center, Button, Group, Container } from "@mantine/core";
import { useStore } from "../src/zustand";
import { RtkCode } from "../src/components/rtkCode";
import { ZustandCode } from "../src/components/zustandCode";
import { useCounterContext } from "../src/context";
import { ContextCode } from "../src/components/contextCode";

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const countZustand = useStore((state) => state.count);
  const incrementZustand = useStore((state) => state.increment);
  const decrementZustand = useStore((state) => state.decrement);
  const incrementByAmountZustand = useStore((state) => state.incrementByAmount);

  const [countContext, dispatchContext] = useCounterContext();

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Context Api</h1>
        <Group position="apart" style={{ width: "100%" }}>
          <Button onClick={() => dispatchContext({ type: "increment" })}>
            +
          </Button>
          <span>{countContext.count}</span>
          <Button onClick={() => dispatchContext({ type: "decrement" })}>
            -
          </Button>
        </Group>
        <Button
          mt={10}
          fullWidth
          onClick={() =>
            dispatchContext({
              type: "incrementByAmount",
              payload: countContext.count,
            })
          }
        >
          +{countContext.count}
        </Button>
        <ContextCode />
      </Container>
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
          <span>{count}</span>
          <Button onClick={() => dispatch(decrement())}>-</Button>
        </Group>
        <Button
          mt={10}
          fullWidth
          onClick={() => dispatch(incrementByAmount(count))}
        >
          +{count}
        </Button>
        <RtkCode />
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>zustand</h1>
        <Group position="apart">
          <Button onClick={() => incrementZustand()}>+</Button>
          <span>{countZustand}</span>
          <Button onClick={() => decrementZustand()}>-</Button>
        </Group>
        <Button
          mt={10}
          fullWidth
          onClick={() => incrementByAmountZustand(countZustand)}
        >
          +{countZustand}
        </Button>
        <ZustandCode />
      </Container>
    </div>
  );
};

export default Home;
