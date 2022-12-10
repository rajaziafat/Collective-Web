import React from "react";

function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fs-16px font-normal border-[1px] border-white rounded-full py-2 lg:py-1vw px-6 lg:px-2_8vw leading-1"
    >
      {title}
    </button>
  );
}

export default Button;
