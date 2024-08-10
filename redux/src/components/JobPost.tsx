import React from "react";
import { useGetSpecificJobQuery } from "@/features/jobSlice";

const JobPost = ({ id }: { id: string }) => {
  const { data } = useGetSpecificJobQuery(id);
  return (
    <div>
      <h1>{data?.data.description}</h1>
    </div>
  );
};

export default JobPost;
