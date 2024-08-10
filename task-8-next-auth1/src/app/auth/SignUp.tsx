"use client";
import React, { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaType } from "../validation/validate";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const SignUp: React.FC = () => {
  const router = useRouter();
  const [userExcistError, setUserExistError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    const response = await fetch(`https://akil-backend.onrender.com/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: "user",
      }),
    });
    try {
      const result = await response.json();
      console.log("result", result);
      if (result.success) {
        console.log("atleast it is successfull");
        router.push(`/users?email=${data.email}`);
      } else {
        setUserExistError("User already exists");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className=" max-w-[40%] p-30">
      <h1 className={`${poppins.className} text-4xl text-center pt-6 pb-3`}>
        Sign Up
      </h1>
      <div className="flex justify-center items-center border border-slate-200 rounded-2xl my-4 p-2">
        <img
          src={"/icons/logo-google.png"}
          alt="logo-google"
          width={40}
          height={40}
          className="p-2"
        />
        <p className="font-bold">Sign up with Google</p>
      </div>
      <div className="flex justify-between my-3">
        <p className="border-t w-[20%] mx-1 my-3"></p>
        <p className="w-[60%] text-center text-xl">Or sign up with an email</p>
        <p className="border-t w-[20%] mx-1 my-3"></p>
      </div>
      <p className="text-red-600 text-center">{userExcistError}</p>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your Full Name"
          className="w-full   border-gray-300 border rounded-md p-2"
          {...register("name")}
        />
        <p className="text-red-600 font-sans">{errors.name?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email address"
          className="w-full  border-gray-300 border rounded-md p-2"
          {...register("email")}
        />
        <p className="text-red-600 font-sans">{errors.email?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          placeholder="Enter your password"
          className="w-full  border-gray-300 border rounded-md p-2"
          {...register("password")}
        />
        <p className="text-red-600 font-sans">{errors.password?.message}</p>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="text"
          placeholder="Re-enter your password"
          className="w-full  border-gray-300 border rounded-md p-2"
          {...register("confirmPassword")}
        />
        <p className="text-red-600 font-sans">
          {errors.confirmPassword?.message}
        </p>
        <button
          type="submit"
          className="bg-[#4640DE] w-full text-white font-extrabold  rounded-full my-2 py-3"
        >
          Continue
        </button>
      </form>

      <div className="flex mb-4 mt-2 ">
        <p>
          Already have an account?
          <Link href="/api/auth/signin" className="text-[#4640DE]">
            {" "}
            Login
          </Link>
        </p>
      </div>
      <p className="text-justify font-light text-sm">
        By clicking 'Continue', you acknowledge that you have read and accepted
        our <span className="text-[#4640DE]">Terms of Service</span> and{" "}
        <span className="text-[#4640DE]">Privacy Policy.</span>
      </p>
    </div>
  );
};

export default SignUp;
