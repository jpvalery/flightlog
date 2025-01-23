import format from "comma-number";
import { NextSeo } from "next-seo";

import client from "../lib/sanity";

export default function Stats({ statsData, lastUpdateData }) {
  return (
    <>
      <NextSeo
        title="Stats"
        description="My stats from Microsoft Flight Simulator — Manually updated once in a while"
        openGraph={{
          title: "Stats | Jp's Flight Log",
          description:
            "My stats from Microsoft Flight Simulator — Manually updated once in a while",
          images: [
            {
              url:
                "https://og.jpvalery.me/api/og/flightlog/MSFS%20Flight%20Stats",
            },
          ],
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col space-y-12">
        <div className="pt-12">
          <h1 className="text-4xl font-bold text-zinc-50">
            Jp's personal stats
          </h1>
          <p className="text-sm uppercase text-zinc-400">
            Last updated: {lastUpdateData._updatedAt}
          </p>
        </div>
        <dl className="shadow-lg">
          {statsData.map((i) => {
            const unitSpan = i.unit ? (
              <span className="text-sm italic text-zinc-400">in {i.unit}</span>
            ) : null;

            const formattedAmount = format(i.amount);
            const slicedAmount = formattedAmount.slice(-3)[0];
            var displayedAmount = "";

            slicedAmount == "."
              ? (displayedAmount = (
                  <div className="flex items-end">
                    <span>{formattedAmount.slice(0, -3)}</span>
                    <span className="w-6 text-lg text-emerald-600">
                      .{formattedAmount.slice(-2)}
                    </span>
                  </div>
                ))
              : (displayedAmount = (
                  <div className="flex items-end">
                    <span>{formattedAmount}</span>
                    <span className="w-6 text-lg text-emerald-600"> </span>
                  </div>
                ));

            return (
              <div className="space-x-18 grid grid-flow-row items-center justify-between py-3 pl-6 pr-4 odd:bg-zinc-900 even:bg-zinc-900/50 sm:grid-flow-col md:space-x-36">
                <dt className="text-lg text-zinc-100 md:text-xl">
                  {i.name} {unitSpan}
                </dt>
                <dd className="font-parklyCondensed text-3xl tracking-widest text-emerald-500 md:text-4xl">
                  {displayedAmount}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </>
  );
}

// We use getStaticProps to get the content at build time
export async function getStaticProps() {
  // We use the Sanity Client from /lib/sanity.js

  // We define our query here
  const statsQuery = `
*[_type == "stat"]{
name,
  amount,
  unit,
  sortOrder,
} | order(sortOrder asc)
  `;

  const lastUpdateQuery = `
*[_type == "stat"]{
    _updatedAt
} | order(_createdAt asc)[0]
  `;

  const statsData = await client.fetch(statsQuery);
  const lastUpdateData = await client.fetch(lastUpdateQuery);

  // We return the result of the query as props to pass them above
  return {
    props: {
      statsData,
      lastUpdateData,
    },
  };
}
