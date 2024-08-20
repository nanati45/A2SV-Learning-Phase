"use client";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { logInSchema, LogInSchemaType } from "../validation/validate";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const Login = () => {
  // const session = useSession();
  // console.log("here we go", session);

  const [errorCredential, setErrorCredential] = useState<
    string | null | undefined
  >("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInSchemaType>({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit = async (data: LogInSchemaType) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log("data is ", result);
    if (result?.ok) {
      console.log("noooowwww ");
      router.push("/posts");
      console.log("sooo whyy");
    } else {
      setErrorCredential("Invalid Credentials");
    }
  };

  return (
    <div className="grid grid-cols-2 ">
      <div className="flex justify-center items-center h-full">
        <img
          src="https://img.freepik.com/premium-photo/man-sits-desk-with-laptop-box-tissues_1103290-73143.jpg?w=740"
          alt="illustration"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="w-[70%] ">
          <h1 className={`${poppins.className}  text-4xl text-center py-6`}>
            Welcome Back
          </h1>
          <div className="flex justify-between my-6">
            <p className="  border-t-2 border-gray-200 w-[25%] mt-2"></p>
            <p className="text-red-600 mb-1 ">{errorCredential}</p>
            <p className="  border-t-2  border-gray-200 w-[25%] mt-2"></p>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className="py-2 my-2">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email address"
              className="w-full p-2 my-2 border-gray-300 border rounded-md"
              {...register("email")}
            />
            <p className="text-red-600 font-sans">{errors.email?.message}</p>
            <label htmlFor="password" className="py-2 my-2">
              Password
            </label>
            <input
              id="password"
              type="text"
              placeholder="Enter your password"
              className="w-full p-2 my-2 border-gray-300 border rounded-md"
              {...register("password")}
            />
            <p className="text-red-600 font-sans">{errors.password?.message}</p>
            <button
              id="submit"
              type="submit"
              className="bg-[#4640DE] w-full text-white font-extrabold  rounded-full my-2 py-3"
            >
              Login
            </button>
          </form>
          <div className="flex mb-6 mt-4 ">
            <p className="mr-2">Don't have an account?</p>
            <Link href="/" className="text-[#4640DE]">
              {" "}
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
