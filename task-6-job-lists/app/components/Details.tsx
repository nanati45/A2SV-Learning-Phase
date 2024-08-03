import React from "react";
import Image from "next/image";
import { JobPost } from "../type";

const Details = ({ job }: { job: JobPost }) => {
  return (
    <>
      <div className="w-[75%] my-12 mx-2 px-16 py-4 text-justify ">
        <h1 className="font-extrabold font-poppins text-3xl py-4">
          Description
        </h1>
        <p>{job.description}</p>
        <h1 className="font-extrabold font-poppins  text-3xl py-4">
          Responsibilities
        </h1>

        {job.responsibilities.map((res) => {
          return (
            <div className="flex my-2">
              <div className="px-2 inline-block shrink-0">
                <Image
                  src="/icons/image.png"
                  alt="logo"
                  width={20}
                  height={20}
                />
              </div>
              <p className="inline-block">{res}</p>
            </div>
          );
        })}
        <h1 className="font-extrabold font-poppins text-3xl py-4 ">
          Ideal candidate we want
        </h1>
        <ul className="list-disc ml-5">
          <li className="font-bold">
            Age - {job.ideal_candidate.age}, Gender -{" "}
            {job.ideal_candidate.gender}, {job.title}
          </li>
        </ul>
        {job.ideal_candidate.traits.map((idealC) => {
          return (
            <ul className="list-disc ml-5">
              <li className="">{idealC}</li>
            </ul>
          );
        })}
        <div>
          <h1 className="font-extrabold font-poppins text-3xl py-4">
            When & Where
          </h1>
          <div className="flex">
            <div className="px-2 shrink-0 ">
              <Image
                src="/icons/location.png"
                alt={"location icon"}
                width={25}
                height={25}
              />
            </div>
            <p>{job.when_where}</p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default Details;
