import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
    const response = await axios.post(
      "https://auth-back-end.onrender.com/login",
      fromData
    );
    console.log(response);
    if (response.data === "Invalid User name Or Password") {
      toast.error("Please check your username or password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (response.data === "Server Busy") {
      toast.warn("Please verify Your Email id", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (response?.status) {
      toast.success(
        localStorage.setItem("userInfo", JSON.stringify(response.data)),
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
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
          <Link to="/">
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
