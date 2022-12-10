import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="pt-10 lg:pt-5vw border-t-2 border-white">
          <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto] lg:grid-cols-[1fr_auto_auto_auto_auto] gap-10 lg:gap-6vw mb-20 lg:mb-8vw">
            <div className="col-span-2 sm:col-span-1">
              <h1 className="fs-44px text-white font-bold mb-2 lg:mb-1_4vw leading-1">
                collective_100
              </h1>
              <p className="text-sm lg:text-16px mb-6 lg:mb-2vw font-light">
                Cremorne based coworking space. Level 2, 100 Cubitt Street,
                Cremorne, Victoria, Australia.{" "}
              </p>

              <div className="flex items-center space-x-4 lg:space-x-1vw">
                <a href="/" target="_blank" className="fs-24px text-white-gray">
                  <FaFacebookF />
                </a>
                <a href="/" target="_blank" className="fs-24px text-white-gray">
                  <FaTwitter />
                </a>
                <a href="/" target="_blank" className="fs-24px text-white-gray">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div>
              <h4 className="fs-20px text-blue font-light mb-1_4vw">About</h4>

              <div className="space-y-1_2vw">
                <a href="/" className="block text-sm lg:text-16px font-light">
                  About collective_100
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Our impact
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Location
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  News
                </a>
              </div>
            </div>
            <div>
              <h4 className="fs-20px text-blue font-light mb-1_4vw">
                Memberships
              </h4>

              <div className="space-y-1_2vw">
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Private offices
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Dedicated desk
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Shared desk
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Virtual office
                </a>
              </div>
            </div>
            <div>
              <h4 className="fs-20px text-blue font-light mb-1_4vw">
                Ammenities
              </h4>

              <div className="space-y-1_2vw">
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Meeting rooms
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Launch event space
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Meeting room bundles
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Ammenities overview
                </a>
              </div>
            </div>
            <div>
              <h4 className="fs-20px text-blue font-light mb-1_4vw">Contact</h4>

              <div className="space-y-1_2vw">
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Contact us
                </a>
                <a href="/" className="block text-sm lg:text-16px font-light">
                  Request a tour
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm lg:text-16px font-light text-center sm:text-left">
              © 2022 collective_100. Developed by Ten Squared.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-1_4vw">
              <a
                href="/"
                target="_blank"
                className="text-sm lg:text-16px font-light"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                target="_blank"
                className="text-sm lg:text-16px font-light"
              >
                Terms and Conditions
              </a>
              <a
                href="/"
                target="_blank"
                className="text-sm lg:text-16px font-light"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
