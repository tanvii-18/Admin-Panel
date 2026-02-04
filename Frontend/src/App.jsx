import { Route, Routes } from "react-router";
import "./index.css";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { Toaster } from "sonner";
import Verify_otp from "./screens/Verify-otp";

function App() {
  return (
    <>
      <Toaster richColors />

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<Verify_otp />} />
      </Routes>
    </>
  );
}

export default App;
