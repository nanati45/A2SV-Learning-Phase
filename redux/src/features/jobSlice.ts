import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { JobPosting, Data, JobPostById } from "../type";

export const jobPosts = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://akil-backend.onrender.com/opportunities",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query<JobPosting, void>({
      query: () => `/search`,
    }),
    getSpecificJob: builder.query<JobPostById, string>({
      query: (id) => `/${id}`,
    }),
  }),
});
export const { useGetJobsQuery, useGetSpecificJobQuery } = jobPosts;
