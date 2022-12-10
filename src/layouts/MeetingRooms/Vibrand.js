import SideBySideSection from "components/SideBySideSection";
import React from "react";

const LeftSection = () => {
  return (
    <div>
      <img src="images/ladies.png" className="w-full" alt="" />
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="flex items-end">
      <div>
        <h1
          className="fs-44px text-white font-light mb-4 lg:mb-1_6vw"
          style={{ lineHeight: 1.3 }}
        >
          A vibrand welcome every single time.
        </h1>
        <p className="fs-16px text-white font-light">
          Welcoming you to the collective100 experience at our 100 Cubitt St,
          Cremorne office, is Kiara Hickman, who heads the concierge team and
          ensures a seamless experience for all new and existing members. Kiara
          is an asset to the community as an indefatigable community manager,
          smoothly organising meeting rooms, troubleshooting technical issues
          and keeping the Nespresso pods well stocked.
        </p>
      </div>
    </div>
  );
};

function Vibrand() {
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

export default Vibrand;
