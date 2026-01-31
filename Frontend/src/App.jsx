import { Route, Routes } from "react-router";
import "./index.css";
import SignIn from "./screens/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
