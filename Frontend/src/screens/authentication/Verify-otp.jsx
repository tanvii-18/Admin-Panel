import { OTPInput } from "input-otp";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { toast } from "sonner";
import { adminRoutes, authRoutes } from "../../utils/apiRoutes";
import axios from "axios";

export default function Verify_otp() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");

  const verifyOtp = async () => {
    try {
      const res = await axios.post(
        `${authRoutes}/verify-otp`,
        { email: state, otp: Number(otp) },
        {
          withCredentials: true,
        },
      );

      console.log(res.data);
      if (res.data.message) {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // const getCurrentUser = async () => {
  //   try {
  //     const res = await axios.get(`${authRoutes}/signin`, user);
  //     console.log(res.data.user);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="h-[300px] w-[400px] py-8 rounded-2xl shadow-neutral-400 shadow-lg flex flex-col items-center gap-2">
        <h2 className="font-medium text-[22px]">OTP Verification</h2>
        <span className="text-gray-400 text-[12px]">
          Please Enter 6-Digit Code Sent to
        </span>

        <div className="my-8 flex flex-col justify-center items-center gap-6">
          <OTPInput
            maxLength={6}
            value={otp}
            onChange={setOtp}
            containerClassName="group flex items-center has-[:disabled]:opacity-30"
            render={({ slots }) => (
              <>
                <div className="flex">
                  {slots.slice(0, 3).map((slot, idx) => (
                    <Slot key={idx} {...slot} />
                  ))}
                </div>

                <div className="flex">
                  {slots.slice(3).map((slot, idx) => (
                    <Slot key={idx} {...slot} />
                  ))}
                </div>
              </>
            )}
          />

          <button
            className="bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-3xl text-white text-[16px] cursor-pointer"
            onClick={verifyOtp}
          >
            Verify Code
          </button>
        </div>
      </div>
    </div>
  );
}

function Slot({ char, hasFakeCaret, isActive, ...props }) {
  return (
    <div
      {...props}
      className={`w-10 h-12 border mx-1 flex items-center justify-center rounded-md text-lg
      ${isActive ? "border-black" : "border-gray-300"}`}
    >
      {char}
      {hasFakeCaret && (
        <div className="absolute w-[1px] h-5 bg-black animate-pulse" />
      )}
    </div>
  );
}
