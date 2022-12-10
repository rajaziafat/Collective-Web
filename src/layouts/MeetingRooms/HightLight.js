import SideBySideSection from "components/SideBySideSection";
import React from "react";

const LeftSection = () => {
  return (
    <div className="flex items-end">
      <div>
        <h1
          className="fs-44px text-white font-light mb-4 lg:mb-1_6vw"
          style={{ lineHeight: 1.3 }}
        >
          Highlight additional selling poins original collective: Family.
        </h1>
        <p className="fs-16px text-white font-light">
          Headed by brothers Barry and Paul Hickman, collective100 brings
          together a legacy of creative and corporate aspirations. Barry and
          Paul together possess intimate knowledge of Cremorne’s tech-meets-art
          reputation as the directors and photographers behind well known and
          beloved CI Studios. Years of service to Melbourne’s most talented and
          prestigious brands sets the scene for the creation of yet another
          creative space, this time servicing the entrepreneurial and
          innovative.
        </p>
      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="row-start-1 row-end-2 lg:row-start-auto lg:row-end-auto">
      <img src="images/ladies.png" className="w-full" alt="" />
    </div>
  );
};

function HightLight() {
  return (
    <div className="container-wrapper">
      <SideBySideSection
        spacing="gap-5 lg:gap-4vw"
        SectionLeft={LeftSection}
        SectionRight={RightSection}
      />
    </div>
  );
}

export default HightLight;
