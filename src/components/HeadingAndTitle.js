import React from "react";

function HeadingAndTitle({
  heading,
  title,
  reverse = false,
  headingWidth = "sm:w-[90%]",
  titleMaxWidth = "max-w-[18em]",
}) {
  return (
    <div>
      <div className={`${reverse ? null : headingWidth}`}>
        <p
          style={{ lineHeight: 1.3 }}
          className={`fs-44px font-light ${title && "mb-6 lg:mb-3vw"} ${
            reverse ? `${headingWidth} ml-auto` : ""
          }`}
        >
          {heading}
        </p>
        {title && (
          <div className={`flex ${reverse ? "justify-start" : "justify-end"}`}>
            <p className={`text-sm lg:text-18px font-light ${titleMaxWidth}`}>
              {title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeadingAndTitle;
