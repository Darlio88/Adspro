"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Register from "../Register";
//icons
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MdAdsClick } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

function Header() {
  const router = useRouter();

  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-50">
      <div className="container mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full flex items-center justify-center">
            <MdAdsClick size="32px" />
          </div>
          <span className="ml-3 text-xl font-bold">AdsPro</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 cursor-pointer hover:font-medium hover:text-blue-900 ">
            Saved
          </a>
          <a className="mr-5 cursor-pointer hover:font-medium hover:text-blue-900">
            Messages
          </a>
          <a className="mr-5 cursor-pointer hover:font-medium hover:text-blue-900">
            Notification
          </a>
          <a className="mr-5 cursor-pointer hover:font-medium hover:text-blue-900">
            My Adverts
          </a>
          <Link
            href="/register"
            className="mr-5 cursor-pointer hover:font-medium hover:text-blue-900"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="mr-5 cursor-pointer hover:font-medium hover:text-blue-900"
          >
            Login
          </Link>
        </nav>

        {/* <button
          type="button"
          onClick={() => router.push("../Register/register")}
        >
          Register
        </button> */}
        <button className="inline-flex items-center  bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 hover:text-blue-900 hover:font-medium rounded text-base mt-4 md:mt-0">
          Sell
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
        <div className="w-10 h-10 mx-5 bg-blue-100 border-0 cursor-pointer focus:outline-none hover:bg-blue-200 hover:text-blue-900  rounded-full flex items-center justify-center">
          <BiUserCircle size="32px" />
        </div>
      </div>
    </header>
  );
}

export default Header;
