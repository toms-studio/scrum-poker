import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Homepage from "../views/homepage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codelabs Next PWA</title>
      </Head>
      <Homepage />
    </>
  );
};

export default Home;
