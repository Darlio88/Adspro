"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
//import image1 from "/images/woman.png";
import image2 from "/images/city2.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="justify-center flex">
        <Image
          src="/images/city1.png"
          alt="Picture of City"
          width="360"
          height="480"
        />
        <Image
          src="/images/city2.png"
          alt="Picture of City"
          width="360"
          height="480"
        />
      </div>
      <div
        className="flex flex-col px-2 bg-gradient-to-b from-indigo-500 to-sky-500 py-4 mb-3
    max-w-full"
      >
        <div className="flex flex-wrap justify-center">
          <div className="gap-y-2 gap-x-5 md:px-10 flex flex-col sm:px-2">
            <h3 className="text-black "> About us</h3>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              About AdsPro
            </Link>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              Terms & Conditions
            </Link>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              Privacy Policy
            </Link>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              Billing Policy
            </Link>
          </div>

          <div className="gap-y-2 gap-x-2 md:px-10 flex flex-col sm:px-2">
            <h3 className="text-black "> Support</h3>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              Support@AdsPro.ug
            </Link>
            <Link
              className=" text-xs text-white hover:text-violet-900"
              href="/"
            >
              Safety tips
            </Link>
            <Link
              className=" text-xs text-white hover:text-violet-900"
              href="/"
            >
              Contact Us
            </Link>
            <Link
              className=" text-xs text-white hover:text-violet-900"
              href="/"
            >
              FAQs
            </Link>
          </div>

          <div className="gap-y-2 gap-x-2  md:px-10 flex flex-col sm:px-2">
            <h3 className="text-black "> Our apps</h3>
            <Link
              className=" text-xs text-white hover:text-violet-900"
              href="/"
            >
              App Store
            </Link>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              Google Play
            </Link>
          </div>

          <div className="gap-y-2 gap-x-2 md:px-10 flex flex-col sm:px-2">
            <h3 className="text-black "> Our resources</h3>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              AdsPro on FB
            </Link>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              AdsPro on Instagram
            </Link>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              AdsPro on Twitter
            </Link>
          </div>

          <div className="gap-y-2 gap-x-2 md:px-10 flex flex-col sm:px-2">
            <h3 className="text-black"> Hot links</h3>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              Brand
            </Link>
            <Link className="text-xs text-white hover:text-violet-900" href="/">
              Regions
            </Link>
          </div>
        </div>

        <div className=" flex justify-center pb-0 pt-4 text-sm ">
          <h3 className="text-violet-900 justify-center ">
            Copyright &copy; {year} AdsPro.ug
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
