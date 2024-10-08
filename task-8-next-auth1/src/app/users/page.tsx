import React from "react";
import Verify from "../auth/Verify";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const page = async () => {
  const session = await getServerSession(options);
  console.log("session is gh", session);

  return (
    <div className="flex justify-center items-center h-screen">
      <Verify />
    </div>
  );
};

export default page;
