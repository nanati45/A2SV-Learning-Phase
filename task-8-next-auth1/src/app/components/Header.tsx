"use-client";
import React from "react";
import { Poppins } from "@next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const Header = () => {
  return (
    <>
      <div className="flex items-end p-4">
        <Link href="/api/auth/signout">Logout</Link>
      </div>
      <div className="flex justify-between my-4 items-center ">
        <div>
          <h1 className={`${poppins.className} text-3xl`}>Opportunities</h1>
          <p className="text-gray-500 text-sm">Showing 73 results</p>
        </div>
        <div className="flex pr-2">
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
        </div>
      </div>
    </>
  );
};

export default Header;
