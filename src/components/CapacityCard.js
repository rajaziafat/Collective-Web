import React from "react";

function CapacityCard({ Icon, min, max }) {
  return (
    <div className="flex items-center fs-16px space-x-2 lg:space-x-0_4vw border-2 rounded-full border-blue px-2 lg:px-0_6vw">
      {Icon ? <Icon /> : null}

      <p className="fs-inherit text-blue">
        {min}-{max}
      </p>
    </div>
  );
}

export default CapacityCard;
