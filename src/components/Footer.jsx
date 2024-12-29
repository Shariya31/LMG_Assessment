import React, { useState } from "react";
import logo from "../assets/images/Logo.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { LiaAngleDownSolid } from "react-icons/lia";
// import FooterBanner from "../components/Banner/FooterBanner";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    company: false,
    support: false,
    legal: false,
    resources: false,
  });

  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      {/* <FooterBanner /> */}
      <footer className="bg-black text-white py-8 w-full">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row md:justify-between">
          {/* Logo and Company Information */}
          <div className="w-full md:w-[25%] md:pr-8 mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link to="/">
                <img
                  src={logo}
                  className="h-28 w-auto transform transition-transform duration-300 hover:scale-110"
                  alt="Company Logo"
                />
              </Link>
            </div>
          </div>

          {/* Centered Links Section */}
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <div className="space-y-2 md:w-full flex flex-col md:flex-row justify-center text-center md:items-start">
              {/* Company Section */}
              <div className="md:w-1/2 flex flex-col items-center">
                <h3 className="text-lg font-bold mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/" className="hover:text-gray-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/catagery/userprofile"
                      className="hover:text-gray-400"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="/catagery/myorder" className="hover:text-gray-400">
                      Order
                    </a>
                  </li>
                  <li>
                    <a href="/cart" className="hover:text-gray-400">
                      Cart
                    </a>
                  </li>
                  <li>
                    <a href="/catagery" className="hover:text-gray-400">
                      Category
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Section */}
              <div className="md:w-1/2 flex flex-col items-center mt-6 md:mt-0">
                <h3 className="text-lg font-bold mb-3">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/franchise" className="hover:text-gray-400">
                      Franchise
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-400">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-400">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-400">
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-400">
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-400">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Address and Social Icons Section */}
          <div className="w-full md:w-[25%] md:pl-8 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
            {/* Address */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Address</h2>
              <p className="text-sm md:text-base">
                1st 2nd 3rd 4th Floors, 509, PID No 81-1-509,
              </p>
              <p className="text-sm md:text-base">
                Bengaluru, Karnataka, India - 560038.
              </p>
              <p className="text-sm md:text-base">Phone: +91 8095733338</p>
              <p className="text-sm md:text-base">Email: care@wrogn.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebookF className="h-7 w-7 transform transition-transform duration-300 hover:scale-125" />
              </Link>
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter className="h-7 w-7 transform transition-transform duration-300 hover:scale-125" />
              </Link>
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram className="h-7 w-7 transform transition-transform duration-300 hover:scale-125" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedinIn className="h-7 w-7 transform transition-transform duration-300 hover:scale-125" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-center border-t-[1px] border-slate-400 mt-6">
          <p className="text-sm my-4">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
