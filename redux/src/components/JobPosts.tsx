import React from "react";
import { useGetJobsQuery } from "@/features/jobSlice";
const JobPosts = () => {
  const { data, error } = useGetJobsQuery();
  console.log(data);
  const res = useGetJobsQuery();
  console.log("result " + res);
  return <div>hello</div>;
};

export default JobPosts;
