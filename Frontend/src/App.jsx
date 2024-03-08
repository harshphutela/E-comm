import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  const navigate = useNavigate();
  useEffect(()=>{
   {
    localStorage.getItem('token') != undefined ? navigate('/home') : navigate('/login')
   }
  },[])
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
