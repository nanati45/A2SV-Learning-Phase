"use-client";
import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const Header = () => {
  return (
    <>
      <div className="flex justify-center py-4 mt-10 ">
        <div className="flex justify-between items-center w-[65%]">
          <div className="">
            <h1 className={`${poppins.className} text-3xl `}>Opportunities</h1>
            <p className="text-gray-500 text-sm">Showing 73 results</p>
          </div>
          <div className="flex items-center">
            <div className="px-4 text-green-800 font-extrabold">
              <Link href={`../bookmarks`}>Bookmarks</Link>
            </div>
            <p className="text-gray-500 pr-2">Sort by:</p>
            <select className="bg-white min-w-16 font-light" name="" id="">
              <option
                className="bg-white min-w-14 font-normal"
                value="Most Relevant"
              >
                Most Relevant
              </option>
              <option value="New">New</option>
              <option value="High Paying">High Paying</option>
            </select>
            <div className="px-4 text-gray-800 font-extrabold">
              <Link href={`../api/auth/signout`}>Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
