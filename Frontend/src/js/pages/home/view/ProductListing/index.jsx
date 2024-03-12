import React from "react";
import SampleCard from "../../../../../assets/SampleCard.png";

const ProductListing = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-white flex justify-center items-center h-36">
        <p className=" text-4xl font-black">NEW ARRIVALS</p>
      </div>

      <div className="w-full flex justify-center">
        <div className="lg:flex ml-10">
          <div>
            <img className="w-4/5" src={SampleCard} />
            <p className="text-xs font-bold tracking-normal mt-2">
              T-shirt with tape details
            </p>
            <p className="text-xs font-semibold mt-1">Rating 4.5/5.0</p>
            <p className="text-s font-bold mt-1">$120</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
