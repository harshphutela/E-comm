import React from "react";
import Header from "./Header";
import HomeHeroSection from "./HeroSection";
import NewArrivalsContainer from "./NewArrivals/container";
import TopSellingContainer from "./TopSelling/container";
import StyleCategoryContainer from "./StyleCategory/container";
import CustomerRatingContainer from "./CustomerRatings/container";
import NewsLetterContainer from "./NewsletterSubscription/container";
const HomeView = () => {
  return (
    <div>
      <Header />
      <HomeHeroSection />
      <NewArrivalsContainer />
      <TopSellingContainer />
      <StyleCategoryContainer />
      <CustomerRatingContainer />
      <NewsLetterContainer />
    </div>
  );
};

export default HomeView;
