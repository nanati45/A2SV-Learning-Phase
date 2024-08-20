import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex  py-4 justify-between w-screen bg-slate-400">
      <Link href="../bookmarks">Bookmark</Link>
      <Link href="/api/auth/signout">Logout</Link>
    </div>
  );
};

export default NavBar;
