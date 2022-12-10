import HeadingAndTitle from "components/HeadingAndTitle";
import React from "react";

function Evolving() {
  return (
    <div className="container-wrapper">
      <HeadingAndTitle
        headingWidth="sm:w-[96%]"
        titleMaxWidth="max-w-[20em]"
        heading={
          <>
            Our space is evolving, houseing industry leaders from companies
            globally.{" "}
            <span className="text-blue">
              {" "}
              Balancing tradition, with innovation culminates in a workspace
              recognised by comanpies worldwide
            </span>
            .{" "}
          </>
        }
        title={
          <>
            We know not all work happens the same, sometime you need a space to
            collaborate, other times a desk is completely appropriate, no one
            always needs the same.{" "}
          </>
        }
      />
    </div>
  );
}

export default Evolving;
