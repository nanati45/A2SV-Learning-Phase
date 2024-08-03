import React from "react";
import Button from "./Button";
import Image from "next/image";

interface Card {
  src: string;
  title: string;
  companyName: string;
  companyAddress: string;
  description: string;
}
const JobCard = ({
  src,
  title,
  companyAddress,
  companyName,
  description,
}: Card) => {
  return (
    <div
      className="flex  max-h-80  bg-white max-w-3xl  justify-items-center pt-8 pb-4 px-6 my-8
    rounded-3xl border border-gray-300"
    >
      <div className="px-4 py-2 shrink-0">
        <Image src={src} alt="logo" width={50} height={50} />
      </div>
      <div>
        <div>
          <h1 className="font-bold  pb-2">{title} </h1>

          <p className="text-gray-500  pb-2">
            {companyName} . {companyAddress}
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
