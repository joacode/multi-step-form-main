/* eslint-disable react/jsx-props-no-spreading */
import App, { AppContext } from "next/app";
import Head from "next/head";
import React, { ReactElement } from "react";
import "rsuite/dist/rsuite.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Prichu & Pepe</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (
  ctx: AppContext
): Promise<Record<string, string>> => {
  const pageProps = await App.getInitialProps(ctx);

  return {
    ...pageProps,
  };
};
