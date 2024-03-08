import React from "react";
import "../pages/Login.css";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-3xl shadow-md">
      Home
      <div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepage;
