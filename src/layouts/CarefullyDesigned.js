import HeadingAndTitle from "components/HeadingAndTitle";
import React from "react";

function CarefullyDesigned() {
  return (
    <div>
      <div className="container-wrapper">
        <HeadingAndTitle
          reverse={true}
          headingWidth="sm:w-[92%]"
          titleMaxWidth="max-w-[20em]"
          heading={
            <>
              Through a thought process of careful consideration, we have
              carefully structured a range of spaces,{" "}
              <span className="text-blue">
                each space carefully designed to compliment different moods and
                tasks
              </span>
              .
            </>
          }
          title={
            <>
              We know not all work happens the same, sometime you need a space
              to collaborate, other times a desk is completely appropriate, no
              one always needs the same.{" "}
            </>
          }
        />
      </div>
    </div>
  );
}

export default CarefullyDesigned;
