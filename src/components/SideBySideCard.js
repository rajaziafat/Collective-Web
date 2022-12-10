import React from "react";
import { GoQuote } from "react-icons/go";

function SideBySideCard() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <img
          src="images/card-img.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="bg-white-gray p-8 md:p-10 lg:p-50px grid grid-rows-[1fr_auto]">
        <div className="mb-10 lg:mb-0">
          <GoQuote className="text-xl lg:text-[3vw] mb-1vw text-black fill-black opacity-40" />
          <p className="fs-24px font-light text-black">
            The office is very inviting and just right for a young IT company
            like ours and the facilities provide just the right atmosphere. A
            great place!
          </p>
        </div>
        <div>
          <p className="fs-24px font-light text-black">- Jonathan Sanders</p>
        </div>
      </div>
    </div>
  );
}

export default SideBySideCard;
