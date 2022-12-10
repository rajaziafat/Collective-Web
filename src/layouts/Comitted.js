import HeadingAndTitle from "components/HeadingAndTitle";
import React from "react";

function Comitted() {
  return (
    <div className="container-wrapper">
      <HeadingAndTitle
        heading={
          <>
            We are committed to creating a workspace that fosters creativity,
            improves energy, lifts mood and increases overall wellbeing and
            productivity{" "}
            <span className="text-blue">in Richmond, Melbourne</span>.
          </>
        }
        title={
          <>
            Our goal is to bring people back into the office, not by force, but
            by creating a space where people can thrive, grow and form real
            connections. A vibrant, productive offices space is our main mission
          </>
        }
      />
    </div>
  );
}

export default Comitted;
