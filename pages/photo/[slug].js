import { NextSeo } from "next-seo";
import NextLink from "next/link";
import Image from "next/image";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

import client from "../../lib/sanity";

import Footer from "../../components/Footer";

export default function Photo({ photoData }) {
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
                "https://og.jpvalery.me/FlightLog.png?theme=flightlog&md=1&fontSize=200px&heights=300",
            },
          ],
        }}
      />
      <main>
        <div className="grid grid-flow-row gap-4 pb-8 md:hidden">
          <div className="flex items-center space-x-4">
            <NextLink href="/">
              <div className="hover:cursor-pointer">
                <h1 className="text-6xl font-bold text-zinc-50 font-parklyCondensed">
                  FlightLog
                </h1>
                <p className="text-4xl font-bold text-map-800 font-parklyCondensed">
                  CF992
                </p>
              </div>
            </NextLink>
          </div>

          <p className="text-zinc-100 ">
            A collection of screenshots of flights I've taken over the years on
            Microsoft Flight Simulator.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mx-auto">
          <div className="z-50 p-1 transform rounded-sm bg-slate-100 max-w-fit">
            <Image
              src={photoData[0].image.url}
              alt={`${photoData[0].image.alt} | Microsoft Flight Simulator`}
              width="1200"
              height="675"
              layout="intrinsic"
              className="z-50"
              placeholder="blur"
              blurDataURL={photoData[0].image.metadata.lqip}
            />
          </div>
          <p className="text-xl text-zinc-50">{photoData[0].image.caption}</p>
          <p className="text-zinc-400 hover:text-zinc-100 hover:cursor-pointer">
            <NextLink href="/">
              <div className="flex items-center gap-2">
                <ArrowCircleLeftIcon className="w-4 h-4" />
                <p>Return</p>
              </div>
            </NextLink>
          </p>
        </div>
        <div className="inline-flex pt-8 md:hidden text-zinc-50">
          <Footer />
        </div>
      </main>
    </>
  );
}

//////////////// PAGE PATHS /////////////////////

// We use getStaticPaths to get all the slugs at build time
export async function getStaticPaths() {
  // We use the Sanity Client from /lib/sanity.js

  // We define our query here
  const slugsQuery = `
        *[ _type == "screenshot"]{
        _id,
        }
        | order(_createdAt desc)
  `;

  // Get the paths we want to pre-render based on posts
  const slugs = await client.fetch(slugsQuery);

  // Map them under the accepted format for the return part of getStaticPaths
  const paths = slugs.map((page) => ({
    params: { slug: page._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
}

//////////////// PAGE CONTENT /////////////////////

// We use getStaticProps to get the content at build time
export async function getStaticProps({ params }) {
  // We use the Sanity Client from /lib/sanity.js

  // We define our query here
  const photoQuery = `
    *[ _id == "${params.slug}"]{
    image {
    alt,
    caption,
        ...asset->
    }
    }
  `;

  const photoData = await client.fetch(photoQuery);

  // We return the result of the query as props to pass them above
  return {
    props: {
      photoData,
    },
  };
}
