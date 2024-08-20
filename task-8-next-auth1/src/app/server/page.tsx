import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
const page = async () => {
  const session = await getServerSession(options);
  console.log("This is the session", session);
  return <div>{session?.user?.email}</div>;
};

export default page;
