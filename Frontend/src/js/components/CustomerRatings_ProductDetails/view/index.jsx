import React, { useContext } from "react";
import RatingCard from "./RatingCard/view";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewContext from "../../../core/context/ProductReviewContext";

const CustomerRatingView_ProductDetails = () => {
  const ContextData = useContext(ReviewContext);
  console.log("Context", ContextData);
  return (
    <>
      <div className="w-full justify-center flex">
        <div className="flex flex-wrap w-full justify-center">
          <div className="w-2/5 mr-5">
            <RatingCard name="Sarah M." />
          </div>

          <div className="w-2/5">
            <RatingCard name="Sarah M2." />
          </div>

          <div className="w-2/5 mr-5">
            <RatingCard name="Sarah M3." />
          </div>
          <div className="w-2/5">
            <RatingCard name="Sarah M4." />
          </div>

          <div className="w-2/5 mr-5">
            <RatingCard name="Sarah M5." />
          </div>

          <div className="w-2/5">
            <RatingCard name="Sarah M6." />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerRatingView_ProductDetails;
