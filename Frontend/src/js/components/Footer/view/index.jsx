import React from "react";
import TwitterIcon from "../../../../assets/TwitterIcon.png";
import FaceBookIcon from "../../../../assets/FaceBookIcon.png";
import InstaIcon from "../../../../assets/InstaIcon.png";
import GitIcon from "../../../../assets/GitIcon.png";
import { Link } from "react-router-dom";

function FooterView() {
  return (
    <div className="flex p-16 bg-[#F2F0F1] w-full absolute">
      <div className="w-1/3">
        <div className=" w-1/7 mr-2 flex justify-start items-center">
          <h1 className=" text-3xl font-bold pb-4">SHOP.CO</h1>
        </div>
        <div className="w-2/3">
          <p className="text-sm text-gray-500">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
        <div className="flex mt-3 w-1/3 justify-between">
          <Link>
            <img src={TwitterIcon} alt="TwitterLogo" />
          </Link>
          <Link>
            <img src={FaceBookIcon} alt="FaceBookLogo" />
          </Link>

          <Link>
            <img src={InstaIcon} alt="InstaLogo" />
          </Link>

          <Link>
            <img src={GitIcon} alt="GitLogo" />
          </Link>
        </div>
      </div>
      <div className="flex justify-evenly w-2/3">
        <div>
          <p className="font-bold pb-4 text-sm">Company</p>
          <ul className="text-gray-500 text-sm">
            <Link>
              <li className="pb-3">About</li>
            </Link>
            <Link>
              <li className="pb-3">Features</li>
            </Link>
            <Link>
              <li className="pb-3">Works</li>
            </Link>
            <Link>
              <li className="pb-3">Career</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-bold pb-4 text-sm">Help</p>
          <ul className="text-gray-500 text-sm">
            <Link>
              <li className="pb-3"> Customer Support</li>
            </Link>
            <Link>
              <li className="pb-3">Delivery Details</li>
            </Link>
            <Link>
              <li className="pb-3">Terms & Conditions</li>
            </Link>
            <Link>
              <li className="pb-3"> Privacy Policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-bold pb-4 text-sm">FAQ</p>
          <ul className="text-gray-500 text-sm">
            <Link>
              <li className="pb-3">Account</li>
            </Link>
            <Link>
              <li className="pb-3">Manage Deliveries</li>
            </Link>
            <Link>
              <li className="pb-3">Orders</li>
            </Link>
            <Link>
              <li className="pb-3">Payments</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-bold pb-4 text-sm">Resources</p>
          <ul className="text-gray-500 text-sm">
            <Link>
              <li className="pb-3"> Free eBooks</li>
            </Link>
            <Link>
              <li className="pb-3">Development Tutorial</li>
            </Link>
            <Link>
              <li className="pb-3">How to - Blog</li>
            </Link>
            <Link>
              <li className="pb-3">Youtube Playlist</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterView;
