import React from "react";
import JobLists from "../components/JobLists";
import Header from "../components/Header";
import { JobPosting } from "../../types/type";

const page = async () => {
  const response = await fetch(
    `https://akil-backend.onrender.com/opportunities/search`
  );
  const data: JobPosting = await response.json();
  return (
    <div className=" justify-center p-8 flex">
      <div>
        <Header />
        <JobLists {...data} />
      </div>
    </div>
  );
};

export default page;
