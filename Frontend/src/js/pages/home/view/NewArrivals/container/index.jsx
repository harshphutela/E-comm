import React, { useEffect, useState } from "react";
import NewArrivals from "../view";
import axios from "axios";
import API from '../../../../../../api/API'

function NewArrivalsContainer() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    HandlerGetProducts();
  }, []);

  async function HandlerGetProducts() {
    const result = await axios(API.getProducts);
    setData(result.data);
  }
  return (
    
      <NewArrivals NewArrivalData={Data} />

  );
}

export default NewArrivalsContainer;
