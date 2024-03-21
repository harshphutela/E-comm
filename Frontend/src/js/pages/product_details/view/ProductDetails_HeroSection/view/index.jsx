import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import API from "../../../../../../api/API";
import ReactStars from "react-rating-stars-component";
import ReviewContext from "../../../../../core/context/ProductReviewContext";

export default function ProductDetails_HeroSectionView({ product_id }) {
  const [Data, setData] = useState([]);
  const [final_product, setFinal_Product] = useState([]);
  const [reviews, setReviews] = useState([]);
  const ContextData = useContext(ReviewContext);
  // async function handleGetProduct() {
  //   const result = await axios.get(API.getProducts);
  //   console.log("data", result);
  //   setData(result.data);
  //   console.log("PID", product_id);
  // }

  async function handleGetSelectedProduct() {
    const result = await axios.get(API.getProductsP, {
      headers: {
        product_id,
      },
    });
    console.log("Selected", result.data);
    setData(result.data);
    ContextData.setTestData(result.data[0].reviews);
  }

  useEffect(() => {
    handleGetSelectedProduct();
  }, []);

  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }
  return (
    <>
      <div className="border rounded mt-2 pb-5">
        {Data.map((item) => {
          return (
            <>
              <div className="pl-20 mt-3">
                <div className="flex">
                  <div className="w-1/12 ">
                    <img
                      src={`http://localhost:3000/${item.Image}`}
                      className="mb-3"
                    />
                    <img
                      src={`http://localhost:3000/${item.Image}`}
                      className="mb-3"
                    />
                    <img src={`http://localhost:3000/${item.Image}`} />
                  </div>

                  <div className="w-1/4 ml-5">
                    <img
                      src={`http://localhost:3000/${item.Image}`}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="pl-6">
                    <p className="font-extrabold text-4xl mt-2">{item.Name}</p>

                    <div className="flex mt-1">
                      <ReactStars
                        size={20}
                        emptyIcon={<i className="far fa-star"></i>}
                        readonly={true}
                        allowFraction={true}
                        count={5}
                        isHalf={true}
                        value={item.Rating}
                      />
                    </div>

                    <div className="flex mt-2">
                      <p className="text-xl font-bold mt-1">
                        ${item.offerPrice}
                      </p>
                      <p className="text-xl font-bold mt-1 ml-2 text-gray-400 line-through">
                        ${item.Price}
                      </p>
                    </div>

                    <div className="mt-2">
                      <p className="text-gray-500 text-xs">
                        {item.description}
                      </p>
                    </div>

                    <div className="border-b-2 mt-5"></div>

                    <div>
                      <p className="text-gray-500 text-xs mt-2">
                        Available Sizes
                      </p>
                    </div>
                    {/* <div className="flex justify-between mt-3 w-1/2">
                        <button className="mr-1 w-1/4 rounded-full bg-black text-white p-2 font-extralight text-xs">
                          Small
                        </button>
                        <button className="mr-1 w-1/4 rounded-full bg-black text-white p-2 font-extralight text-xs">
                          Medium
                        </button>{" "}
                        <button className="mr-1 w-1/4 rounded-full bg-black text-white p-2 font-extralight text-xs">
                          Large
                        </button>{" "}
                        <button className="mr-1 w-1/4 rounded-full bg-black text-white p-2 font-extralight text-xs">
                          XL
                        </button>
                      </div> */}

                    <div className="flex justify-between mt-3 w-1/2">
                      {item.size[0] == "Small" ? (
                        <button className="mr-1 w-1/4 rounded-full bg-black text-white p-2 font-extralight text-xs">
                          Small
                        </button>
                      ) : (
                        <button
                          disabled
                          className="mr-1 w-1/4 rounded-full bg-[#f2f0f1] text-black p-2 font-extralight text-xs"
                        >
                          Small
                        </button>
                      )}

                      {item.size[1] == "Medium" ? (
                        <button className="mr-1 w-1/4 rounded-full bg-black text-white p-2 font-extralight text-xs">
                          Medium
                        </button>
                      ) : (
                        <button
                          disabled
                          className="mr-1 w-1/4 rounded-full bg-[#f2f0f1] text-black p-2 font-extralight text-xs"
                        >
                          Medium
                        </button>
                      )}

                      {item.size[2] == "Large" ? (
                        <button className="mr-1 w-1/4 rounded-full bg-black text-white p-2 font-extralight text-xs">
                          Large
                        </button>
                      ) : (
                        <button
                          disabled
                          className="mr-1 w-1/4 rounded-full bg-[#f2f0f1] text-black p-2 font-extralight text-xs"
                        >
                          Large
                        </button>
                      )}

                      {item.size[0] == "XL" ? (
                        <button className="mr-1 w-1/4 rounded-full bg-black text-white p-2 font-extralight text-xs">
                          XL
                        </button>
                      ) : (
                        <button
                          disabled
                          className="mr-1 w-1/4 rounded-full bg-[#f2f0f1] text-black p-2 font-extralight text-xs"
                        >
                          XL
                        </button>
                      )}
                    </div>

                    <div className="border-b-2 mt-5 w-full"></div>

                    <div className="flex mt-5 text-center">
                      <div className="flex bg-[#f2f0f1] rounded-full items-center w-1/6">
                        <button
                          className="p-2 font-bold text-xs ml-2"
                          onClick={dec}
                        >
                          -
                        </button>
                        <p className="font-extralight text-xs ml-1">{count}</p>
                        <button
                          className="p-2 font-bold text-xs ml-1"
                          onClick={inc}
                        >
                          +
                        </button>
                      </div>

                      <button className="bg-black w-1/2 text-white ml-3 rounded-full p-2 font-extralight text-xs">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
