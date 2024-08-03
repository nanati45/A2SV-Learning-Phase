import React from "react";
import Image from "next/image";
import { JobPost } from "../type";
import Button from "./Button";
const About = ({ job }: { job: JobPost }) => {
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
            <p>{job && job.about.posted_on}</p>
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
            <p>{job && job.about.deadline}</p>
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
            <p>{job && job.about.location}</p>
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
            <p>{job && job.about.start_date}</p>
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
            <p>{job && job.about.end_date}</p>
          </div>
        </div>
        <p className="border border-b-1 my-2"></p>
        <h1 className="font-poppins  text-3xl font-bold mb-4">Categories</h1>
        <Button
          text={`${job.about.categories[0]}`}
          bg="bg-green-100"
          color="text-green-300"
          border=""
        />
        <Button
          text={`${job.about.categories[1]}`}
          bg="bg-yellow-100"
          color="text-yellow-500"
          border="border border-yellow-500"
        />
        <p className="border border-b-1 my-2 "></p>
        <h1 className="font-poppins  text-3xl font-bold my-4">
          Required Skills
        </h1>
        {job.about.required_skills.map((req) => {
          return (
            <button className="bg-gray-100 text-black-500 m-1 p-2">
              {req}
            </button>
          );
        })}
      </>
    </div>
  );
};

export default About;
