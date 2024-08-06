import About from "@/app/components/About";
import Details from "@/app/components/Details";
import { JobPostByIdType } from "@/types/type";
import React from "react";
interface paramsType {
  params: { id: string };
}
export default async function page({ params }: paramsType) {
  const { id } = params;
  const response = await fetch(
    `https://akil-backend.onrender.com/opportunities/${id}`
  );
  const data: JobPostByIdType = await response.json();
  // console.log(data.data);
  if (!data.success) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center font-3xl">
          <h1 className="font-bold">404</h1>
          <p className="border border-r-1"></p>
          <h1 className="text-gray-900 ml-4">Invalid Id</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="flex">
      <Details Datas={data.data} />
      <About Datas={data.data} />
    </div>
  );
}
