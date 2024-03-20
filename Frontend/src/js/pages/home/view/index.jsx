import React from "react";
import HomeHeroSection from "./HeroSection";
import NewArrivalsContainer from "./NewArrivals/container";
import TopSellingContainer from "./TopSelling/container";
import StyleCategoryContainer from "./StyleCategory/container";
import CustomerRatingContainer from "../../../components/CustomerRatings/container";
import NewsLetterContainer from "../../../components/NewsletterSubscription/container";
import FooterContainer from "../../../components/Footer/container";
import HeaderContainer from "../../../components/header/container";
const HomeView = () => {
  return (
    <div>
    <HeaderContainer/>
      <HomeHeroSection />
      <NewArrivalsContainer />
      <TopSellingContainer />
      <StyleCategoryContainer />
      <CustomerRatingContainer />
      <NewsLetterContainer />
      <FooterContainer />
    </div>
  );
};

export default HomeView;
