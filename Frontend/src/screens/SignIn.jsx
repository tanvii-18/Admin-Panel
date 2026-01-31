import React from "react";
import { Link } from "react-router";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className=" h-[500px] w-[450px] py-5 rounded-lg shadow-lg bg-amber-200 m-md-3">
        <div className="flex flex-col items-center bg-red-300">
          <h1 className="text-2xl font-bold">LogIn to your account</h1>
          <span className="text-[1px] text-gray-500">
            Don't have account?{" "}
            <Link to="/signup" className="text-blue-700">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
