import { useState } from "react";
import { Transition, Menu } from "@headlessui/react";
import NextLink from "next/link";
import React from "react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="grid grid-flow-row gap-12">
      <div>
        <h1 className="text-6xl font-bold font-parklyCondensed">FlightLog</h1>
        <p className="text-4xl font-bold text-map-800 font-parklyCondensed">
          CF992
        </p>
      </div>
      <p>
        A collection of screenshots of flights I've taken over the years on
        Microsoft Flight Simulator.
      </p>
    </div>
  );
}
