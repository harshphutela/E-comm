import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderContainer from "../../../components/header/container";
import ProductDetail_HeroSectionContainer from "./ProductDetails_HeroSection/container";
import CustomerRatingContainer_ProductDetails from "../../../components/CustomerRatings_ProductDetails/container";
import NewsLetterContainer from "../../../components/NewsletterSubscription/container";
import FooterContainer from "../../../components/Footer/container";
import ReviewContext from "../../../core/context/ProductReviewContext";

const ProductDetailsView = () => {
  const Param = useParams();
  console.log("Param", Param);
  const [testData, setTestData]= useState();
  return (
    <>
      <ReviewContext.Provider value={{testData,setTestData}}>
        <HeaderContainer />
        <ProductDetail_HeroSectionContainer product_id={Param.id} />
        <CustomerRatingContainer_ProductDetails />
        <NewsLetterContainer />
        <FooterContainer />
      </ReviewContext.Provider>
    </>
  );
};

export default ProductDetailsView;
