import "../styles/globals.css";
import { NextPage } from "next";
import { ReactNode } from "react";
import { ReactElement } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
