import About from "@/app/components/About";
import Details from "@/app/components/Details";
import { data } from "@/app/data";
import React from "react";

export default function page({ params: { id } }: { params: { id: string } }) {
  const job = data.job_postings.find((job) => job.id === id);
  if (!job) {
    return <div>error</div>;
  }
  return (
    <div className="flex">
      <Details job={job} />
      <About job={job} />
    </div>
  );
}
