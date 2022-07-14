import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../src/rtk";
import { Provider } from "react-redux";
import { CounterProvider } from "../src/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CounterProvider>
  );
}

export default MyApp;
