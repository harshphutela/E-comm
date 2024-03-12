import React, { useState } from "react";
import LoginFormView from "../view";
import { useNavigate } from "react-router-dom";
import API from "../../../../api/API";
import axios from "axios";

const LoginFormContainer = () => {
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
    console.log(response.data);
    if (response.data === "NOT") {
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

  let state = {
    email,
    password,
  };

  let handler = {
    setEmail,
    setPassword,
    handleSendData,
    handleVerifyToken,
  };
  return <LoginFormView state={state} handler={handler} />;
};

export default LoginFormContainer;
