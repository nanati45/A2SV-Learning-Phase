import React from "react";
import JobCard from "./JobCard";
import { data } from "../data";
import Link from "next/link";

const JobLists = () => {
  return (
    <div>
      {data.job_postings.map((da) => (
        <Link href={`/posts/${da.id}`}>
          <JobCard
            src={da.image}
            title={da.title}
            description={da.description}
            companyName={da.company}
            companyAddress={da.about.location}
          />
        </Link>
      ))}
    </div>
  );
};

export default JobLists;
