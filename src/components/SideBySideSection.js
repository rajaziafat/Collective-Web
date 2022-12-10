import React from "react";

const LAYOUT = "grid lg:grid-cols-2";
const SPACING = "gap-10 lg:gap-50px";

function SideBySideSection(props) {
  const {
    layout = LAYOUT,
    spacing = SPACING,
    SectionLeft,
    SectionRight,
  } = props;

  return (
    <div>
      <div className={`${layout} ${spacing}`}>
        {SectionLeft && <SectionLeft />}
        {SectionRight && <SectionRight />}
      </div>
    </div>
  );
}

export default SideBySideSection;
