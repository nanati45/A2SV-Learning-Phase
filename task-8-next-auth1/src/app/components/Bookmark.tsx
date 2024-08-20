"use client";
import React from "react";
import toggleBookmark from "../auth/BookmarkJob";
import { useRouter } from "next/navigation";

const Bookmark = ({
  isBookmarked,
  id,
}: {
  isBookmarked: boolean;
  id: string;
}) => {
  const router = useRouter();
  const toggle = async () => {
    const response = await toggleBookmark(isBookmarked, id);
    console.log("object", response);
    if (response) {
      router.refresh();
    }
  };

  return (
    <button onClick={toggle} data-cy="bookmark-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill={isBookmarked ? "currentColor" : "transparent"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
    </button>
  );
};

export default Bookmark;
