import React from "react";
import "./Login.css";
import Globe from "../assets/globe.png";
import AppleLogo from "../assets/apple-logo.png";
import FacebookLogo from "../assets/facebook.png";
import GoogleLogo from "../assets/google.png";
import EyeIcon from "../assets/eyeicon.png";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/API";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSendData() {
    const response = await axios.post(API.getCheckCred, {
      emailSent: email,
      passSent: password,
    });
    console.log("Token at Front End", response.data);
    localStorage.setItem("token", response.data);
    if (response.data === "Not") {
      alert("NOT AUTH USER");
    } else {
      navigate("/home");
    }
  }

  async function handleVerifyToken() {
    const response = await axios.get(API.getCheckCred, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  }

  return (
    <div id="maincontainer" className="bg-gray-100">
      <div id="logincontainer" className="shadow-lg">
        <div id="globeimagecontainer">
          <div id="globesub">
            <img id="globeimage" src={Globe} />
          </div>
        </div>
        <div id="textcontainer">
          <p className="text-2xl text-center font-semibold">Welcome back</p>
          <p className="text-center text-xs mt-1">
            Please enter your details to sign in
          </p>
        </div>

        <div className="flex justify-between ml-3 mr-3 mt-6">
          <button
            className="h-9 w-1/3 shadow-2x flex items-center justify-center shadow-lg"
            id="shadow"
          >
            <img className="h-4 w-4" src={GoogleLogo} alt="1" />
          </button>

          <button
            className="h-9 w-1/3 shadow-2x flex items-center justify-center shadow-xl ml-3 mr-3"
            id="shadow"
          >
            <img className="h-4 w-4" src={AppleLogo} alt="1" />
          </button>

          <button
            className="h-9 w-1/3  shadow-2x flex items-center justify-center shadow-xl"
            id="shadow"
          >
            <img className="h-4 w-4" src={FacebookLogo} alt="1" />
          </button>
        </div>

        <div className="text-center mt-4 text-xs">
          <p className="text-grey">or</p>
        </div>

        <div className="w-full mt-3">
          <p className="text-xs ml-3">Email address</p>
          <div className="w-full flex align-center justify-center mt-2">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className="w-11/12 text-xs h-6 text-grey pl-1"
            ></input>
          </div>
        </div>

        <div className="w-full mt-5">
          <p className="text-xs ml-3">Password</p>
          <div className="w-11/12 flex align-center justify-center mt-2 ml-3">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-11/12 text-xs h-6 text-grey pl-1"
              placeholder="*********"
              type="password"
            ></input>
            <button className="h-6 w-6 ml-1">
              <img style={{ opacity: "0.5" }} src={EyeIcon} />
            </button>
          </div>
        </div>
        {/* 
        <div className="w-11/12 flex justify-between ml-3 mr-5 mt-2">
          <div className="flex align-center justify-center">
            <input type="checkbox" className="mr-1 mt-1" />
            <p className="text-xs mt-1">Remember for 30 days.</p>
          </div>
          <Link>
            <p className="text-xs mt-1 underline">Forget Password</p>
          </Link>
        </div> */}
        <div className="flex w-full align-center justify-center mt-5">
          <button
            onClick={() => {
              {
                handleSendData();
              }
            }}
            style={{
              height: "40px",
              backgroundColor: "black",
              width: "92%",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className="text-white">Sign In</p>
          </button>
          {/* <button onClick={handleVerifyToken}>check</button> */}
        </div>

        <div className="flex w-full justify-center mt-3">
          <p className="text-xs">Don't have account?</p>
          <Link className="text-xs ml-1 font-bold">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
