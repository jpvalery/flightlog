import { NextSeo } from "next-seo";
import client from "../lib/sanity";

import ScreenshotsGrid from "../components/ScreenshotsGrid";

export default function Home({ screensData }) {
  return (
    <>
      <NextSeo
        title="CF992"
        description="A collection of screenshots of flights I've taken over the years on Microsoft Flight Simulator."
        openGraph={{
          title: "CF992",
          description:
            "A collection of screenshots of flights I've taken over the years on Microsoft Flight Simulator.",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Jp%20Valery**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main>
        <div className="grid grid-flow-row gap-4 pb-4 md:hidden">
          <div className="flex items-center space-x-4">
            <h1 className="text-6xl font-bold text-zinc-50 font-parklyCondensed">
              FlightLog
            </h1>
            <p className="text-4xl font-bold text-map-800 font-parklyCondensed">
              CF992
            </p>
          </div>
          <p className="text-zinc-100 ">
            A collection of screenshots of flights I've taken over the years on
            Microsoft Flight Simulator.
          </p>
        </div>
        <ScreenshotsGrid images={screensData} />
      </main>
    </>
  );
}

// We use getStaticProps to get the content at build time
export async function getStaticProps() {
  // We use the Sanity Client from /lib/sanity.js

  // We define our query here
  const screensQuery = `
*[ _type == "screenshot"]{
  _createdAt,
      image {
  alt,
  caption,
    ...asset->
  }
}
| order(_createdAt desc)
  `;

  const screensData = await client.fetch(screensQuery);

  // We return the result of the query as props to pass them above
  return {
    props: {
      screensData,
    },
  };
}
