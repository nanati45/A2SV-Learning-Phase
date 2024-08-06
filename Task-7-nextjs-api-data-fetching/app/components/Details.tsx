import React from "react";
import Image from "next/image";
import { Data, JobPostByIdType } from "@/types/type";
interface propType {
  Datas: Data;
}
const Details = ({ Datas }: propType) => {
  const data = Datas;
  console.log(data);
  console.log(Datas);
  const responsibilitiesFormater = (responsibility: string) => {
    const result = responsibility.split("\n");
    return result;
  };
  // console.log(responsibilitiesFormater(data.))
  return (
    <>
      <div className="w-[75%] my-12 mx-2 px-16 py-4 text-justify ">
        <h1 className="font-extrabold font-poppins text-3xl py-4">
          Description
        </h1>
        <p>{data?.description}</p>
        <h1 className="font-extrabold font-poppins  text-3xl py-4">
          Responsibilities
        </h1>
        {responsibilitiesFormater(data.responsibilities).map((items, index) => (
          <div className="flex my-2">
            <div className="px-2 inline-block shrink-0">
              <Image src="/icons/image.png" alt="logo" width={20} height={20} />
            </div>
            <p className="inline-block">{items}</p>
          </div>
        ))}

        <h1 className="font-extrabold font-poppins text-3xl py-4 ">
          Ideal candidate we want
        </h1>

        <ul className="list-disc ml-5">
          <li className="">{data.idealCandidate}</li>
        </ul>

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
            <p>{data?.whenAndWhere}</p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default Details;
