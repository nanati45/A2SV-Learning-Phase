import React from "react";
import JobLists from "../components/JobLists";
import Header from "../components/Header";
import { JobPosting } from "../../../types/type";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const page = async () => {
  const session = await getServerSession(options);
  console.log("waiting");
  const response = await fetch(
    `https://akil-backend.onrender.com/opportunities/search`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  const data: JobPosting = await response.json();
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <JobLists {...data} />
      </div>
    </div>
  );
};

export default page;
