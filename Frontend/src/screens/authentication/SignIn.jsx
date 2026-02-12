import { Link, useNavigate } from "react-router";
import { authRoutes } from "../../utils/apiRoutes";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    const toastId = toast.loading("Please wait...");

    const user = { email, password };
    try {
      const res = await axios.post(`${authRoutes}/signin`, user);

      console.log(res.data.message);

      toast.success(res.data.message, { id: toastId });
      navigate("/verify-otp", { state: email });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="h-[450px] w-[450px] py-6 rounded-3xl shadow-neutral-400 shadow-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            LogIn to your account
          </h1>
          <span className="text-[1px] text-gray-500">
            Don't have account?{" "}
            <Link
              to="/signup"
              className="text-blue-700 hover:underline duration-100"
            >
              Sign Up
            </Link>
          </span>
        </div>

        <form
          className="flex flex-col items-center mt-8"
          onSubmit={handleSignIn}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col w-90 gap-2">
              <label htmlFor="email" className="px-2 text-[15px] font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

              <div className="relative w-90">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-5 py-3 w-full border border-gray-400 rounded-full text-[14px] bg-[#efefef] outline-0"
                />

                <svg
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="#000000"
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <path d="M51,37.31A4,4,0,0,0,45,42.69L67.59,67.5C29.34,89,13,124.81,12.34,126.38a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17a122.59,122.59,0,0,0,53.06-11.69l24,26.38a4,4,0,1,0,5.92-5.38ZM149.1,157.16A36,36,0,0,1,101,104.22ZM128,196c-32,0-59.89-11.65-83-34.62A135.81,135.81,0,0,1,20.44,128c3.65-7.23,20.09-36.81,52.68-54.43l22.45,24.7a44,44,0,0,0,59,64.83l20.89,23A114.94,114.94,0,0,1,128,196Zm6.78-103.36a4,4,0,0,1,1.49-7.86,44.15,44.15,0,0,1,35.54,39.09,4,4,0,0,1-3.61,4.35l-.38,0a4,4,0,0,1-4-3.63A36.1,36.1,0,0,0,134.78,92.64Zm108.88,37c-.41.91-10.2,22.58-32.38,42.45a4,4,0,0,1-2.67,1,4,4,0,0,1-2.67-7A136.71,136.71,0,0,0,235.56,128,136.07,136.07,0,0,0,211,94.62C187.89,71.65,160,60,128,60a122,122,0,0,0-20,1.63,4,4,0,0,1-1.32-7.89A129.3,129.3,0,0,1,128,52c42.7,0,71.87,20.22,88.83,37.18,18.31,18.31,26.49,36.44,26.83,37.2A4.08,4.08,0,0,1,243.66,129.63Z" />
                </svg>
              </div>

              <Link
                to="/forgot-password"
                className="text-blue-700 text-sm px-2 text-right"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-90 bg-gray-800 text-white px-4 py-[11px] rounded-full hover:bg-gray-700 my-5 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
