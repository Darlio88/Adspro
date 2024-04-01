
"use client";

import Image from "next/image";

//components
import Header from "@/components/Header";
import TrendingAds from "@/components/TrendingAds";
import SideBar from "@/components/SideBar";
import AdSearch from "@/components/AdSearch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen  ">
      <Header />
      <AdSearch />
      <div className="xl:flex flex-column gap-20 px-8 md:px-24">
        <SideBar />
        <TrendingAds />
      </div>
      <Footer />
    </main>
  );
}
