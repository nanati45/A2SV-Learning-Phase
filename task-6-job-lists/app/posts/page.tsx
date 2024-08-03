import React from "react";
import JobLists from "../components/JobLists";
import Header from "../components/Header";

const page = () => {
  return (
    <div className=" justify-center p-8 flex">
      <div>
        <Header />
        <JobLists />
      </div>
    </div>
  );
};

export default page;
