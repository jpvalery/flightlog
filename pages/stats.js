import { NextSeo } from "next-seo";
import format from "comma-number";

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
                "https://og.jpvalery.me/Stats.png?theme=flightlog&md=1&fontSize=200px&heights=300",
            },
          ],
        }}
      />

      <div className="flex flex-col mx-auto space-y-12 max-w-7xl">
        <div className="pt-12">
          <h1 className="text-4xl font-bold text-zinc-50">
            Jp's personal stats
          </h1>
          <p className="text-sm uppercase text-zinc-400">
            Last updated: {lastUpdateData._createdAt}
          </p>
        </div>
        <dl className="shadow-lg">
          {statsData.map((i) => {
              const unitSpan = i.unit ? (
                <span className="text-sm italic text-zinc-400">
                  in {i.unit}
                </span>
              ) : null;

              const formattedAmount = (format(i.amount));
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
                      <span className="w-6 text-lg text-emerald-600">
                        {" "}
                      </span>
                    </div>
                  ));

            return (
              <div className="grid items-center justify-between grid-flow-row py-3 pl-6 pr-4 sm:grid-flow-col space-x-18 md:space-x-36 even:bg-zinc-900/50 odd:bg-zinc-900">
                <dt className="text-lg md:text-xl text-zinc-100">
                  {i.name} {unitSpan}
                </dt>
                <dd className="text-3xl tracking-widest md:text-4xl font-parklyCondensed text-emerald-500">
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
  _createdAt
} | order(_createdAt desc)[0]
  `;

  const statsData = await client.fetch(statsQuery);
  const lastUpdateData = await client.fetch(lastUpdateQuery);

  // We return the result of the query as props to pass them above
  return {
    props: {
      statsData,
      lastUpdateData
    },
  };
}