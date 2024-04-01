import * as React from "react";
import Image from "next/image";

//icon
import { BsBookmarkDash } from "react-icons/bs";

export default function Index() {
  return (
    <div className="relative  shadow-md w-[240px] rounded-t-lg overflow-hidden my-2">
      <div>
        <Image
          src="/images/dumbbells.jpg"
          alt="dumbbells"
          width="240"
          height="180"
        />
      </div>
      <div className=" h-[60px] w-full px-2 mt-2 mb-1 text-sm text-gray-600 ">
        <div className="absolute top-[60%] right-5 z-10 bg-slate-50 shadow-sm hover:shadow-md hover:cursor-pointer p-3 rounded-full flex justify-center items-center">
          <BsBookmarkDash size="24" color="rgb(59 130 246)" />
        </div>
        <h4>Yellow Gold Fish</h4>
        <h5 className="text-indigo-900 text-xs mt-1">USh 50,000</h5>
      </div>
    </div>
  );
}
