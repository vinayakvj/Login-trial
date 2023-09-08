import React from "react";
import image from "../assets/Group 166.png";
import "./login.css";
import Input from "../components/Input";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const form = document.querySelector("form");
    const data = new FormData(form);
    for (const pair of data.entries()) {
      console.log(pair);
    }

    nav("./dashboard/students");
  };

  return (
    <div className="login">
      <div className="image-container">
        <img className="image" src={image} />
      </div>
      <div className="login-form">
        <div className="form-box">
          <h1 className="single">Hey,</h1>
          <h1 className="single">Let's Start</h1>
          <p className="single">Please Login to your account</p>
          <form className="form-flex  " id="form">
            <Input
              name="Email"
              type="email"
              required
              pattern=".+@gmail\.com"
              size="30"
            />
            <Input name="Password" type="password" />
            <a className=" forgot">Forgot password?</a>
            <button
              className="button"
              type="submit"
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
