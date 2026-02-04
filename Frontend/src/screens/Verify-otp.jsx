import { OTPInput } from "input-otp";
import React from "react";

export default function Verify_otp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="h-[300px] w-[450px] py-6 rounded-3xl shadow-neutral-400 shadow-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Verify Your Email
          </h1>
          <span className="text-gray-400 text-[12px]">We sent code to </span>
        </div>

        <div className="flex flex-col justify-center items-center my-6">
          <OTPInput
            maxLength={6}
            render={({ slots }) => (
              <div className="flex justify-center gap-3 mt-6">
                {slots.map((slot, index) => (
                  <div
                    key={index}
                    {...slot.props}
                    className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-xl text-lg focus-within:ring-2 focus-within:ring-blue-500"
                  />
                ))}
              </div>
            )}
          />

          <button className="mt-6 w-40 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-2xl duration-150 cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
