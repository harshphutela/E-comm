import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "../../../../assets/cartIcon.png";
import UserAccountIcon from "../../../../assets/userAccountIcon.png";
import SearchIcon from "../../../../assets/searchBarIcon.png";
import MenuIcon from "../../../../assets/menuIcon.png";

function HeaderView() {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex justify-center items-center pt-4">
      <div className="w-11/12 lg:w-full flex justify-center h-12 items-center">
        <div className=" w-1/7 mr-2 flex justify-center items-center">
          <h1 className=" text-3xl font-black">SHOP.CO</h1>
        </div>

        <div className="lg:block  lg:w-1/4 m-4 hidden">
          <ul className="flex items-center h-full w-full">
            <li className="w-1/4 text-center text-xs">
              <Link>On sale</Link>
            </li>
            <li className="w-1/4 text-center text-xs">
              <Link>New Arivals</Link>
            </li>
            <li className="w-1/4 text-center text-xs ">
              <Link>Brand</Link>
            </li>
          </ul>
        </div>

        <div className="flex w-1/3 h-8 mr-6">
          <div className="flex w-full border rounded-3xl mr-2 bg-[#F0F0F0]">
            <label htmlFor="">
              <img src={SearchIcon} className=" w-4 m-2 " alt="search" />
            </label>

            <input
              className="w-full rounded-3xl bg-[#f2f0f1] text-xs p-2 focus:outline-none"
              type="text"
              name="SearchBox"
              id=""
              placeholder="Search for Products..."
            />
          </div>
        </div>
        <div className="flex w-1/8 justify-start m-2 items-center">
          <img className="mr-3 w-5 h-5" src={CartIcon} alt="cartIcon" />
          <img
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="mr-3 w-5 h-5"
            src={UserAccountIcon}
            alt="user"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderView;
