import React from "react";
import Header from "./Header";
import HomeHeroSection from "./HeroSection";
import ProductListing from "./ProductListing";

const HomeView = () => {
  return (
    <div>
      <Header />
      <HomeHeroSection />
      <ProductListing />
    </div>
  );
};

export default HomeView;
