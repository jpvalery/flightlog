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
              url: "https://og.jpvalery.me/api/og/flightlog/MSFS%20Flightlog",
            },
          ],
        }}
      />

      <ScreenshotsGrid images={screensData} />
    </>
  );
}

// We use getStaticProps to get the content at build time
export async function getStaticProps() {
  // We use the Sanity Client from /lib/sanity.js

  // We define our query here
  const screensQuery = `
*[ _type == "screenshot"]{
  _id,
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
