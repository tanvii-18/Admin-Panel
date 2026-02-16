import { Route, Routes } from "react-router";
import "./index.css";
import { Toaster } from "sonner";
import Dashboard from "./screens/pages/Dashboard";
import Profile from "./screens/pages/Profile";
import SignIn from "./screens/authentication/SignIn";
import SignUp from "./screens/authentication/SignUp";
import Verify_otp from "./screens/authentication/Verify-otp";
import AllEmployees from "./screens/pages/AllEmployees";
import { Attendance } from "./screens/pages/Attendance";

function App() {
  return (
    <>
      <Toaster richColors />

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/verify-otp" element={<Verify_otp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/employees" element={<AllEmployees />} />
        <Route path="/employees-attendance" element={<Attendance />} />
      </Routes>
    </>
  );
}

export default App;
