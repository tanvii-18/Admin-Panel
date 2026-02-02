import { Link } from "react-router-dom";
import React from "react";

export default function SignUp() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="h-[450px] w-[450px] py-6 rounded-3xl shadow-neutral-400 shadow-lg">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">SingUp</h1>
            <span className="text-[1px] text-gray-500">
              Already have account?{" "}
              <Link
                to="/"
                className="text-blue-700 hover:underline duration-100"
              >
                Sign in
              </Link>
            </span>
          </div>

          <form className="flex flex-col items-center mt-8">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col w-90 gap-2">
                <label htmlFor="email" className="px-2 text-[15px] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="mb-4 px-5 py-3 border border-gray-400 rounded-full text-[14px] bg-[#efefef] outline-0"
                />
              </div>

              <div className="flex flex-col w-90 gap-2 mb-3">
                <label
                  htmlFor="password"
                  className="px-2 text-[15px] font-medium"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className=" px-5 py-3 border border-gray-400 rounded-full text-[14px] bg-[#efefef] outline-0"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-90 bg-gray-800 text-white px-4 py-[11px] rounded-full hover:bg-gray-700 my-9 cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
