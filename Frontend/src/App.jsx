import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
