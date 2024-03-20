import React from "react";
import { useParams } from "react-router-dom";
import HeaderContainer from "../../../components/header/container";
import ProductDetail_HeroSectionContainer from "./ProductDetails_HeroSection/container";
import CustomerRatingContainer_ProductDetails from "../../../components/CustomerRatings_ProductDetails/container";
import NewsLetterContainer from "../../../components/NewsletterSubscription/container";
import FooterContainer from "../../../components/Footer/container";

const ProductDetailsView = () => {
  const Param = useParams();
  console.log("Param", Param);
  return (
    <>
      <HeaderContainer />
      <ProductDetail_HeroSectionContainer product_id={Param.id} />
      {/* <CustomerRatingContainer_ProductDetails /> */}
      <NewsLetterContainer />
      <FooterContainer />
    </>
  );
};

export default ProductDetailsView;
