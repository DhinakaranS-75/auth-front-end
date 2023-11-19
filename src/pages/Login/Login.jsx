import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...fromData, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/login", fromData);
    console.log(response);
    if (response.data === "Invalid User name Or Password") {
      alert("Please check your username or password");
    } else if (response.data === "Server Busy") {
      alert("verify Your Email id");
    } else if (response?.status) {
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/home");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Recipe_Book</h1>
          <h4>Hello Users</h4>
          <p>Welcome to Recipe_Book website, Check The Recipe Books Details</p>
          <span>Don't you have an account? Click The Register </span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handlesubmit}>
            <input
              type="email"
              name="email"
              value={fromData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              name="password"
              value={fromData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
