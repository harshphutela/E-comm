import React from "react";

const NewsLetterView = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-6 relative top-16 z-10">
        <div className="bg-black w-11/12 rounded-3xl flex justify-center">
          <div className="w-4/5 flex">
            <div className="w-1/2">
              <p className=" text-4xl text-white font-extrabold pt-8 pb-8">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </p>
            </div>
            <div className="w-3/5 flex justify-center mt-6 ml-6">
              <div className="w-2/5">
                <div className="w-full flex justify-center">
                  <input
                    className="w-full rounded-2xl bg-white p-2 text-xs"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="w- flex justify-center mt-3">
                  <button
                    className="w-full rounded-2xl bg-white p-2"
                    type="email"
                  >
                    <p className="text-xs">Subscribe to newsletter</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetterView;
