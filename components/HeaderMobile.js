import NextLink from "next/link";
import MenuIcons from "./MenuIcons";

export default function HeaderMobile() {
  return (
    <div className="grid grid-flow-row gap-4 lg:hidden">
      <div className="flex items-center space-x-2 hover:cursor-pointer">
        <NextLink href="/" legacyBehavior>
          <>
            <h1 className="font-parklyCondensed text-6xl font-bold text-zinc-50">
              FlightLog
            </h1>
            <p className="font-parklyCondensed text-4xl font-bold text-map-600">
              CF992
            </p>
          </>
        </NextLink>
        <div className="pl-8 text-zinc-50">
          <MenuIcons />
        </div>
      </div>
      <p className="text-zinc-100">
        A collection of screenshots of flights I've taken over the years on
        Microsoft Flight Simulator.
      </p>
    </div>
  );
}
