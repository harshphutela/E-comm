import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../../../assets/HeroMain.jpeg";
import VersaceLogo from "../../../../../assets/Vercase.png";
import ZaraLogo from "../../../../../assets/Zara.png";
import GucciLogo from "../../../../../assets/Gucci.png";
import PradaLogo from "../../../../../assets/Prada.png";
import CKLogo from "../../../../../assets/CK.png";

const HomeHeroSection = () => {
  return (
    <>
      <div className="bg-[#f2f0f1] w-full h-full mt-3 lg:flex block">
        <div className="w-full lg:w-1/2 bg-[#f2f0f1] lg:ml-24">
          <div className="w-3/4 mt-9">
            <p className="text-5xl font-extrabold leading-[52px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </p>
          </div>

          <div className="mt-6 w-8/12">
            <p className="text-xs text-gray-600">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>

          <div className="bg-black lg:w-1/5 w-full h-8 mt-8 rounded-3xl flex justify-center items-center">
            <Link className="text-white">Shop Now</Link>
          </div>

          <div className="flex mt-8">
            <div className="lg:w-1/4 ">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-xs text-gray-600">International Brands</p>
            </div>

            <div className="w-1/4">
              <p className="text-2xl font-bold">2000+</p>
              <p className="text-xs text-gray-600">High Quality Products</p>
            </div>

            <div className="w-1/4">
              <p className="text-2xl font-bold">30,000+</p>
              <p className="text-xs text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 w-full lg:ml-14">
          <img src={HeroImage} />
        </div>
      </div>
      <div className="bg-black lg:w-full w-full h-16 flex flex-wrap items-center justify-between">
        <img className="w-21 h-5 ml-24" src={VersaceLogo} />
        <img className="w-21 h-5" src={ZaraLogo} />
        <img className="w-21 h-5" src={GucciLogo} />
        <img className="w-21 h-5" src={PradaLogo} />
        <img className="w-21 h-5 mr-24" src={CKLogo} />
      </div>
    </>
  );
};

export default HomeHeroSection;
