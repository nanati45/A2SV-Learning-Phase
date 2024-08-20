import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Result } from "../../../types/type";
import Button from "./Button";
import Bookmark from "./Bookmark";
import Link from "next/link";
const MyBookmark = async () => {
  const session = await getServerSession(options);

  const response = await fetch(`https://akil-backend.onrender.com/bookmarks/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const result: Result = await response.json();
  console.log("response result", result);
  const notUrlImage =
    "https://img.freepik.com/free-vector/premium-collection-badge-design_53876-63011.jpg?t=st=1722932275~exp=1722935875~hmac=0ca554c5cf1fb181cebb9f7a746b0e74ad14ec51b794a8404f9b8fbcdacc0e56&w=740";

  return (
    <div className="grid grid-cols-2">
      {result?.data.map((da) => (
        <div
          className="flex    bg-white max-w-3xl  pt-8 pb-4 px-6 
       rounded-3xl border border-gray-300 m-4 "
          data-cy="bookmarked-job"
        >
          <div className="px-4 py-2 shrink-0 rounded-full">
            <img
              src={da.logoUrl ? da.logoUrl : notUrlImage}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between  w-full ">
              <div>
                <h1 className="font-bold  pb-2">{da.title} </h1>

                <p className="text-gray-500  pb-2">
                  {da.orgName} . {da.location}
                </p>
              </div>
              <div className="ml-auto">
                <Bookmark isBookmarked={true} id={da.eventID} />
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                text={`${da.opType}`}
                bg="bg-green-100"
                color="text-green-900"
                border=""
              />
              <Link href={`/posts/${da.eventID}`}>
                <Button
                  text="Learn More"
                  bg=""
                  color="text-yellow-500"
                  border="border border-yellow-300"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookmark;
