import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Data } from "@/types/type";
interface propType {
  Datas: Data;
}
const About = ({ Datas }: propType) => {
  const data = Datas;
  const style = ["bg-gray-100", "bg-gray-100"];
  const dateFormatter = (date: string) => {
    const result = date.slice(0, 10);
    return result;
  };
  return (
    <div className="w-[25%] mt-8 mr-4 px-2 py-4 text-justify ">
      <>
        <h1 className="font-poppins  text-3xl font-bold mb-4">About</h1>
        <div className="flex mb-4">
          <div className="flex items-center pr-3">
            <Image
              src={"/icons/postedOn.png"}
              alt="posted on icon"
              width={40}
              height={40}
            />
          </div>

          <div className=" justify-center items-center">
            <p className="text-gray-500">Posted On</p>
            <p>{dateFormatter(data.datePosted)}</p>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex items-center pr-3">
            <Image
              src={"/icons/deadline.png"}
              alt="deadline icon"
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="text-gray-500"> Deadline</p>
            <p>{dateFormatter(data.deadline)}</p>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex items-center pr-3">
            <Image
              src={"/icons/location.png"}
              alt="location icon"
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="text-gray-500">Location</p>
            <p>{data?.location}</p>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex items-center pr-3">
            <Image
              src={"/icons/startDate.png"}
              alt="start date icon"
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="text-gray-500">Start Date</p>
            <p>{dateFormatter(data.startDate)}</p>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex items-center pr-3">
            <Image
              src={"/icons/endDate.png"}
              alt="end date icon"
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="text-gray-500">End Date</p>
            <p>{dateFormatter(data.endDate)}</p>
          </div>
        </div>
        <p className="border border-b-1 my-2"></p>
        <h1 className="font-poppins  text-3xl font-bold mb-4">Categories</h1>
        {data.categories.map((item: string, index: number) => (
          <Button
            text={`${item}`}
            bg="bg-yellow-100"
            color="text-yellow-500"
            border="border border-yellow-500"
          />
        ))}
        <p className="border border-b-1 my-2 "></p>
        <h1 className="font-poppins  text-3xl font-bold my-4">
          Required Skills
        </h1>
        {data.requiredSkills.map((item: string, index: number) => (
          <button
            key={index}
            className={`${style[index % style.length]} text-black-500 m-1 p-2`}
          >
            {item}
          </button>
        ))}
      </>
    </div>
  );
};

export default About;
