import React from "react";
import "../styles/Login.css"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1>Login</h1>
        <div>
            <input type={"text"} placeholder="email" required/>
            <input type={"password"} placeholder="password" required/>
            <button>Login</button>
            <Link>
                <p>Non sei ancora registrato? clicca qui</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
