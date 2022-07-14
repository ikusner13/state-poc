import type { NextPage } from "next";
import Context from "../src/components/counters/context";
import Zustand from "../src/components/counters/zustand";
import Rtk from "../src/components/counters/rtk";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        paddingBottom: 20,
      }}
    >
      <Context />
      <Zustand />
      <Rtk />
    </div>
  );
};

export default Home;
