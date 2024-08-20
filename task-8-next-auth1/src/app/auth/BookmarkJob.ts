import axios from "axios";
import { getSession, useSession } from "next-auth/react";

export default async function toggleBookmark(
  isBookmarked: boolean,
  id: string
) {
  const session = await getSession();
  console.log("to post ", session);
  if (session?.accessToken && !isBookmarked) {
    try {
      console.log("session + off", session.accessToken);

      const response = await axios.post(
        `https://akil-backend.onrender.com/bookmarks/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );
      console.log("result is for bookmark", response);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  } else if (session?.accessToken && isBookmarked) {
    console.log("session + on");
    const response = await fetch(
      `https://akil-backend.onrender.com/bookmarks/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${session?.accessToken}`,
        },
      }
    );
    const result = response.json();
    console.log("result is for unbookmark", result);
    return result;
  } else {
    throw new Error("You must sign in");
    return null;
  }
}
