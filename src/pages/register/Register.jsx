import React, { useState } from "react";
import "./register.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [fromData, setFormData] = useState({
    name: "",
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
    try {
      const response = await axios.post(
        "http://localhost:4000/signin/verify",
        fromData
      );
      console.log(response);
      if (response.data === true) {
        // alert("Registeration link Sent you to your mail id");
        toast.success("Registration link sent to your email!");
        navigate("/login");
      } else if (response.data === false) {
        alert("User Already Exists");
      }
    } catch (e) {
      console.error("error during registeration", e);
      toast.error("Error message");
    }
  };
  return (
    <div className="register">
      <ToastContainer />
      <div className="card">
        <div className="left">
          <h1>Recipe_Book</h1>
          <h4>Hello Users</h4>
          <p>Welcome to Recipe_Book website, Check The Recipe Books Details</p>
          <span>You have an account? Click The Login </span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={fromData.name}
              onChange={handleChange}
            />
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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
