"use client";
import Login from "@/app/auth/Login";
import React from "react";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SessionProvider>
        <Login />
      </SessionProvider>
    </div>
  );
};

export default page;
