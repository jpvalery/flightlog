import NextLink from "next/link";

export default function HeaderMobile() {
  return (
    <div className="grid grid-flow-row gap-4 lg:hidden">
      <NextLink href="/">
        <div className="flex items-center space-x-2 hover:cursor-pointer">
          <h1 className="text-6xl font-bold text-zinc-50 font-parklyCondensed">
            FlightLog
          </h1>
          <p className="text-4xl font-bold text-map-600 font-parklyCondensed">
            CF992
          </p>
        </div>
      </NextLink>
      <p className="text-zinc-100">
        A collection of screenshots of flights I've taken over the years on
        Microsoft Flight Simulator.
      </p>
    </div>
  );
}
