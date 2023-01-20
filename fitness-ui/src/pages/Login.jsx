import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/register">
        <h1>Register</h1>
      </Link>
    </div>
  );
};

export default Login;
