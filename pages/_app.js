import "tailwindcss/tailwind.css";
import "../fonts/fonts.css";

import Head from "next/head";

import { DefaultSeo } from "next-seo";

import SEO from "../next-seo-config";

import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <div className="flex h-full min-h-screen w-full">
        <div className="sticky top-0 z-40 hidden h-screen w-min flex-col justify-between justify-items-stretch bg-zinc-200 p-8 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] lg:flex">
          <Header />
          <Footer />
        </div>
        <main className="grid w-full grid-flow-row gap-8 p-8">
          <div className="inline-flex lg:hidden">
            <HeaderMobile />
          </div>
          <Component {...pageProps} />
          <div className="inline-flex lg:hidden">
            <FooterMobile />
          </div>
        </main>
      </div>
    </>
  );
}

export default MyApp;
