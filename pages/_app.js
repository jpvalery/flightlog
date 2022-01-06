import "tailwindcss/tailwind.css";
import "../fonts/fonts.css";

import React, { useEffect } from "react";
import Head from "next/head";

import { DefaultSeo } from "next-seo";

import SEO from "../next-seo-config";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <div className="flex w-full h-full min-h-screen">
        <div className="hidden sticky top-0 z-40 md:flex flex-col justify-between h-screen p-8 w-min justify-items-stretch bg-zinc-200 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <Header />
          <Footer />
        </div>
        <div className="w-full p-8">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
