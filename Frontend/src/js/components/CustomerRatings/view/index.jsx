import React from "react";
import RatingCard from "./RatingCard/view";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerRatingView = () => {
  var settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
  };
  return (
    <>
      <div className="bg-white flex justify-start items-center mt-5 ml-14 mb-3">
        <p className=" text-4xl font-black">OUR HAPPY CUSTOMERS</p>
      </div>

      {/* <div
        style={{
          overflowY: "visible",
          overflowX: "auto",
          margin: "0",
          padding: "0",
          clear: "both",
          borderSpacing: "5px",
          display: "flex",
          verticalAlign: "text-top",
        }}
      >
        <RatingCard name="Sarah M." />
        <RatingCard name="Sarah M2." />
        <RatingCard name="Sarah M3." />
        <RatingCard name="Sarah M4." />
        <RatingCard name="Sarah M5." />
        <RatingCard name="Sarah M6." />
        <RatingCard name="Sarah M7." />
        <RatingCard name="Sarah M." />
      </div> */}
      <div>
        <Slider {...settings}>
          <RatingCard name="Sarah M." />
          <RatingCard name="Sarah M2." />
          <RatingCard name="Sarah M3." />
          <RatingCard name="Sarah M4." />
          <RatingCard name="Sarah M5." />
          <RatingCard name="Sarah M6." />
          <RatingCard name="Sarah M7." />
          <RatingCard name="Sarah M." />
        </Slider>
      </div>
    </>
  );
};

export default CustomerRatingView;
