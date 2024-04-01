"use client";
import * as React from "react";
import Image from "next/image";
//icons

import { BsSearch } from "react-icons/bs";

export default function Index() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {}
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {}
  return (
    <div className="grid my-4 lg:grid-cols-3 gap-3 bg-blue-100">
      <div className="hidden lg:grid -translate-x-2">
        <Image src="/images/woman.png" alt="woman" width="360" height="480" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 items-center justify-center "
      >
        <div className="flex gap-2 items-center bg-slate-50 justify-between my-4 focus-within:border focus-within:border-blue-500 p-2 rounded-md">
          <input
            placeholder="Buy a product..."
            onChange={handleChange}
            className="outline-none w-[40%] bg-slate-50 flex-1"
          />
          <button type="submit">
            {<BsSearch size="24" color="rgb(59 130 246)" /> || "Search"}
          </button>
        </div>
      </form>
      <div className="hidden lg:grid">
        <Image src="/images/man.png" alt="man" width="360" height="480" />
      </div>
    </div>
  );
}
