"use client";
import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { AiFillSetting } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdPeopleAlt, MdFeedback } from "react-icons/md";

function ProfileNavigation() {
  return (
    <div className="bg-slate-100 rounded-lg border border-gray-200 ">
      <div className="flex justify-end p-2">
        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-pink-100/50 hover:font-medium rounded mt-1 text-[11px]">
          SETTINGS
          <AiFillSetting className="w-5 h-5 ml-2" />
        </button>
      </div>

      <div className="flex justify-center">
        <Avatar.Root className="bg-blackA3 inline-flex h-[100px] w-[100px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src=""
            alt="Profile"
          />
          <Avatar.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
            delayMs={600}
          >
            Avatar
          </Avatar.Fallback>
        </Avatar.Root>
      </div>

      <div className="flex justify-center text-lg font-medium p-3 mt-1">
        User Name
      </div>

      <div className="grid gap-4 pt-4 border-t-2">
        <a className="inline-flex p-2 border-b-2 cursor-pointer hover:text-indigo-900 text-sm">
          <GiWallet className="mr-2 w-5 h-5" />
          Balance
        </a>
        <a className="inline-flex p-2 border-b-2 cursor-pointer hover:text-indigo-900 text-sm">
          <RiAdvertisementFill className="mr-2 w-5 h-5" />
          My Adverts
        </a>
        <a className="inline-flex p-2 border-b-2 cursor-pointer hover:text-indigo-900 text-sm">
          <MdFeedback className="mr-2 w-5 h-5" />
          Feedback
        </a>
        <a className="inline-flex p-2 cursor-pointer hover:text-indigo-900 text-sm">
          <MdPeopleAlt className="mr-2 w-5 h-5" />
          Followers
        </a>
      </div>
    </div>
  );
}

export default ProfileNavigation;
