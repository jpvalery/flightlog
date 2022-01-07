import { useState } from "react";
import NextLink from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="grid grid-flow-row gap-12">
      <NextLink href="/">
        <div className="hover:cursor-pointer">
          <h1 className="text-6xl font-bold font-parklyCondensed">FlightLog</h1>
          <p className="text-4xl font-bold text-map-800 font-parklyCondensed">
            CF992
          </p>
        </div>
      </NextLink>
      <p>
        A collection of screenshots of flights I've taken over the years on
        Microsoft Flight Simulator.
      </p>
    </div>
  );
}
