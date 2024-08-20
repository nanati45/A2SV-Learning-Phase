import React from "react";
import JobCard from "./JobCard";
import { JobPosting } from "../../../types/type";
import Link from "next/link";

// export interface Card {
//   logoUrl: string;
//   title: string;
//   orgName: string;
//   companyAddress: string;
//   description: string;
// }

const JobLists = ({ data }: JobPosting) => {
  return (
    <div>
      {data.map((da) => (
        <JobCard {...da} />
      ))}
    </div>
  );
};

export default JobLists;
