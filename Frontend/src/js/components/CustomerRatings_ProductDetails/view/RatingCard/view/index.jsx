import React from "react";
import ReactStars from "react-rating-stars-component";
import GreenTickIcon from "../../../../../../assets/GreenTickIcon.png";

function RatingCard(props) {
  return (
    <div className=" w-full border border-gray-200 rounded-lg m-4 p-4 flex-wrap">
      <div className="flex">
        <ReactStars
          size={20}
          emptyIcon={<i className="far fa-star"></i>}
          readonly={true}
          allowFraction={true}
          count={5}
          isHalf={true}
          value={2}
        />
      </div>
      <div className="flex mt-2 mb-2">
        <h1>{props.name}</h1>
        <img src={GreenTickIcon} alt="greenTick  " />
      </div>
      <div>
        <p className="text-xs text-gray-500 text-wrap">
          "I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've
          bought has exceeded my expectations.
        </p>
      </div>
    </div>
  );
}

export default RatingCard;
