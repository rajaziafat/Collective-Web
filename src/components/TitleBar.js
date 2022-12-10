import React from "react";
import Button from "./Button";

function TitleBar({ title, buttonShow = true }) {
  return (
    <div className="flex flex-col sm:flex-row items-start space-y-5 sm:space-y-0 sm:items-center justify-between">
      <h1 className="fs-44px text-white font-light">{title}</h1>

      {buttonShow && <Button title="Enquire" />}
    </div>
  );
}

export default TitleBar;
