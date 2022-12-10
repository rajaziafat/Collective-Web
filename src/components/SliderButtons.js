import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SliderButtons({ prevRef, nextRef }) {
  return (
    <div className="flex items-center justify-start space-x-3 lg:space-x-1vw">
      <button
        ref={prevRef}
        className="w-8 lg:w-3vw h-8 lg:h-3vw rounded-full fs-30px border-2 border-blue flex items-center justify-center text-blue disabled:opacity-50 transition-all duration-300"
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        ref={nextRef}
        className="w-8 lg:w-3vw h-8 lg:h-3vw rounded-full fs-30px border-2 border-blue flex items-center justify-center text-blue disabled:opacity-50 transition-all duration-300"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}

export default SliderButtons;
