import NextLink from "next/link";
import MenuIcons from "./MenuIcons";

export default function Header() {
  return (
    <div className="grid grid-flow-row gap-12">
      <NextLink href="/" legacyBehavior>
        <div className="hover:cursor-pointer">
          <h1 className="font-parklyCondensed text-6xl font-bold text-zinc-900">
            FlightLog
          </h1>
          <p className="font-parklyCondensed text-4xl font-bold text-map-800">
            CF992
          </p>
        </div>
      </NextLink>
      <div className="grid grid-flow-row gap-6">
        <p>
          A collection of screenshots of flights I've taken over the years on
          Microsoft Flight Simulator.
        </p>
        <MenuIcons />
      </div>
    </div>
  );
}
