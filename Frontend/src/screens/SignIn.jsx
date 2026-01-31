import React from "react";
import { Link } from "react-router";

export default function SignIn() {
  return (
    <div>
      <div className="m-2">
        <h1 className="text-2xl font-bold">LogIn to your account</h1>
        <span>
          Don't have account? <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}
