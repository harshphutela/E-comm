import React, { useEffect } from "react";
import HomeView from "./js/pages/home/view";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../src/js/pages/login/container/index";
import ProductDetailContainer from "./js/pages/product_details/container";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    {
      localStorage.getItem("token") != undefined
        ? navigate("/home")
        : navigate("/");
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/" element={<Login />} />
        <Route path="/p/:id" element={<ProductDetailContainer />} />
      </Routes>
    </div>
  );
};

export default App;
