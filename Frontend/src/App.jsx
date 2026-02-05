import { Route, Routes } from "react-router";
import "./index.css";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { Toaster } from "sonner";
import Verify_otp from "./screens/Verify-otp";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import EditEmployee from "./screens/AddEmployee";
import AddEmployee from "./screens/AddEmployee";

function App() {
  return (
    <>
      <Toaster richColors />

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<Verify_otp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </>
  );
}

export default App;
