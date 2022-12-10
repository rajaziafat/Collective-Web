import Button from "components/Button";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <div className="min-h-screen flex items-center relative z-10">
      <div className="container-wrapper flex items-center justify-center">
        <div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-60px lg:leading-1 sm:pl-5vw text-center sm:text-left font-light uppercase mb-2 lg:mb-1vw">
              Cremorne
            </h2>
            <h1 className="text-[1.6rem] sm:text-4xl md:text-5xl lg:text-80px font-bold uppercase mb-2 lg:mb-1vw text-center">
              Meeting Rooms
            </h1>
          </div>

          <div className="flex items-center justify-center sm:justify-end mt-4 lg:mt-0 sm:mr-6 lg:mr-6vw">
            <Button title="Enquire" />
          </div>
        </div>
      </div>

      <ScrollLink
        to="down"
        offset={-200}
        className="cursor-pointer absolute bottom-6 lg:bottom-1_6vw left-1/2 -translate-x-1/2 text-2xl lg:text-30px"
      >
        <HiOutlineChevronDown />
      </ScrollLink>

      <img
        src="images/hero-banner.png"
        className="absolute top-0 left-0 w-full h-full -z-50 object-cover select-none pointer-events-none"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-70 select-none pointer-events-none -z-40 bg-black"></div>
    </div>
  );
}

export default Hero;
