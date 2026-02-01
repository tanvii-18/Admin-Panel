import React from "react";
import { Link } from "react-router";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="h-[450px] w-[450px] py-6 rounded-lg shadow-lg ">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            LogIn to your account
          </h1>
          <span className="text-[1px] text-gray-500">
            Don't have account?{" "}
            <Link to="/signup" className="text-blue-700">
              Sign Up
            </Link>
          </span>
        </div>

        <form className="flex flex-col items-center mt-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col w-90 gap-2">
              <label htmlFor="email" className="px-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mb-4 px-5 py-3 border border-gray-300 rounded-full text-[14px] bg-[#efefef]"
              />
            </div>

            <div className="flex flex-col w-90 gap-2">
              <label htmlFor="password" className="px-2">
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mb-4 px-5 py-3 border border-gray-300 rounded-full text-[14px] bg-[#efefef]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-90 bg-gray-800 text-white px-4 py-[11px] rounded-full hover:bg-gray-700 my-5 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
