import React from "react";
import Button from "./Button";
import Image from "next/image";
import { Data, JobPosting } from "../../types/type";

// interface Card {
//   src: string;
//   title: string;
//   companyName: string;
//   companyAddress: string;
//   description: string;
// }
const JobCard = ({ logoUrl, title, description, orgName, location }: Data) => {
  const notUrlImage =
    "https://img.freepik.com/free-vector/premium-collection-badge-design_53876-63011.jpg?t=st=1722932275~exp=1722935875~hmac=0ca554c5cf1fb181cebb9f7a746b0e74ad14ec51b794a8404f9b8fbcdacc0e56&w=740";
  return (
    <div
      className="flex    bg-white max-w-3xl  justify-items-center pt-8 pb-4 px-6 my-8
    rounded-3xl border border-gray-300"
    >
      <div className="px-4 py-2 shrink-0 rounded-full">
        <img
          src={logoUrl ? logoUrl : notUrlImage}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div>
        <div>
          <h1 className="font-bold  pb-2">{title} </h1>

          <p className="text-gray-500  pb-2">
            {orgName} . {location}
          </p>

          <p className="  pb-4 text-justify">{description}</p>
        </div>

        <div className="flex  mb-2">
          <Button
            text="In Person"
            bg="bg-green-100"
            color="text-green-300"
            border=""
          />
          <p className="border border-r-1 "></p>
          <Button
            text="Education"
            bg=""
            color="text-yellow-500"
            border="border border-yellow-500"
          />
          <Button
            text="IT"
            bg=""
            color="text-blue-500"
            border="border border-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
