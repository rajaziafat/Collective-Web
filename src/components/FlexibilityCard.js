import React from "react";

function FlexibilityCard({ title, desc }) {
  return (
    <div className="grid lg:grid-cols-[.8fr_1fr] gap-4 lg:gap-[0vw] items-center border-b-1px lg:border-b-1pxToVw py-5 sm:py-8 lg:py-2vw">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-[2.8vw] font-light">
          {title}
        </h1>
      </div>
      <div>
        <p className="fs-16px font-light" style={{ lineHeight: 1.5 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default FlexibilityCard;
