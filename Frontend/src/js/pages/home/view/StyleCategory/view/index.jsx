import React from "react";

const StyleCategoryView = () => {
  return (
    <>
      <div className="w-full flex mt-4 justify-center">
        <div className="bg-[#f2f0f1] w-11/12 rounded-3xl mb-6">
          <div className="w-full flex items-center justify-center h-14 mb-6 mt-10 text-center p-4">
            <p className="text-4xl font-black font-expanded">
              BROWSE BY DRESS STYLE
            </p>
          </div>

          <div className="w-full p-2 mb-8">
            <div className="lg:flex block w-full justify-center">
              <img
                className="lg:w-1/3 w-full lg:m-3 mr-2"
                src="http://localhost:3000/Casual.png"
              />
              <img
                className="lg:m-2 lg:w-1/2 w-full mt-3"
                src="http://localhost:3000/Formal.png"
              />
            </div>

            <div className="lg:flex block w-full justify-center">
              <img
                className="lg:w-1/2 lg:m-3 w-full mt-3"
                src="http://localhost:3000/Party.png"
              />
              <img
                className="lg:w-1/3 lg:m-3 mt-3 w-full"
                src="http://localhost:3000/Gym.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleCategoryView;
