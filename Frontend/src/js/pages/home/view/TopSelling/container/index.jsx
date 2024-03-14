import React, { useEffect, useState } from "react";
import API from "../../../../../../api/API";
import TopSellingView from "../view";
import axios from "axios";


const TopSellingContainer = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    HandlerGetProducts();
  }, []);

  async function HandlerGetProducts() {
    const result = await axios(API.getProducts);
    setData(result.data);
  }
  return (
    <div>
     <TopSellingView TopSellingData = {Data} />
    </div>
  );
};

export default TopSellingContainer;
