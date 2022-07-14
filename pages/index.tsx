import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import type { RootState } from "../src/rtk";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../src/rtk";

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

export default Home;
