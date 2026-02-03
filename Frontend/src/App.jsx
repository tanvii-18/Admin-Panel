import { Route, Routes } from "react-router";
import "./index.css";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
