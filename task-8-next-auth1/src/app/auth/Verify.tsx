import React, { useEffect } from "react";
import Otp from "./Otp";
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const Verify = () => {
  return (
    <div className=" items-center text-center max-w-[50%]  p-10 ">
      <h1 className={`${poppins.className} text-4xl p-4`}>Verify Email</h1>
      <p className="text-justify my-6">
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here.
      </p>
      <Otp />
      <div className="text-center py-6 my-3">
        <p>
          You can request to{" "}
          <span className="text-slate-500"> Resend code</span> in{" "}
        </p>
        <p className="text-slate-500">0 : 30</p>
      </div>

      <button className="bg-[#c7c6f5] w-full p-2 px-4 my-4 text-2xl text-white rounded-full">
        Continue
      </button>
    </div>
  );
};

export default Verify;
