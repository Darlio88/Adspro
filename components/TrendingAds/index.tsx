"use client";
import * as React from "react";
import Link from "next/link";

//trending ad component
import TrendingAd from "./TrendingAd";

export default function Index() {
  let fakeList = new Array(30);

  return (
    <section className=" flex-1">
      <h2 className="text-lg font-semibold ">Trending Ads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        <Link href="#">
          <TrendingAd />
        </Link>
        <TrendingAd />
        <TrendingAd />
        <TrendingAd />
        <TrendingAd />
        <TrendingAd />
        <TrendingAd />
        <TrendingAd />
        <TrendingAd />
        <TrendingAd />
      </div>
    </section>
  );
}
