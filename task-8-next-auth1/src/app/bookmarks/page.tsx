import React from "react";
import MyBookmark from "../components/MyBookmark";
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const page = () => {
  return (
    <div className=" justify-center p-8 flex">
      <div>
        <h1 className={`${poppins.className} text-3xl `}>Bookmarks</h1>

        <MyBookmark />
      </div>
    </div>
  );
};

export default page;
