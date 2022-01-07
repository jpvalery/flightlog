import { NextSeo } from "next-seo";
import NextLink from "next/link";
import Image from "next/image";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

import client from "../../lib/sanity";

export default function Photo({ photoData }) {
  return (
    <>
      <NextSeo
        title="Photo"
        description={photoData[0].image.caption}
        openGraph={{
          title: "Photo from Jp's Flight Log",
          description: photoData[0].image.caption,
          images: [
            {
              url: `${photoData[0].image.url}?w=1487&h=850`,
            },
          ],
        }}
      />

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
        <p className="text-xl text-zinc-100">{photoData[0].image.caption}</p>
        <p className="text-zinc-400 hover:text-zinc-100 hover:cursor-pointer">
          <NextLink href="/">
            <div className="flex items-center gap-2">
              <ArrowCircleLeftIcon className="w-4 h-4" />
              <p>Return</p>
            </div>
          </NextLink>
        </p>
      </div>
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
