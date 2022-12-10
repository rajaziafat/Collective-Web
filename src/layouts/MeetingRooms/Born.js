import HeadingAndTitle from "components/HeadingAndTitle";
import React from "react";

function Born() {
  return (
    <div>
      <div className="container-wrapper">
        <HeadingAndTitle
          headingWidth="sm:w-[92%]"
          titleMaxWidth="max-w-[20em]"
          heading={
            <>
              <span className="text-blue">It’s all about flexibility</span>. An
              enviroment that not only fosters growth but also grows with you.
              collective_100 is desgined to help you scale your business.
            </>
          }
          title={
            <>
              <span className="block mb-1_4vw">Get access too:</span>
              <span className="block mb-1_4vw">
                Premium business mailing address.
              </span>
              <span className="block mb-1_4vw">
                Access to well-equipped meeting rooms
              </span>
              <span className="block mb-1_4vw">
                Complimentary usage of Kew meeting room
              </span>
              <span className="block mb-1_4vw">
                Access to collabroative workspaces
              </span>
              <span className="block mb-1_4vw">
                Access to private phone booths
              </span>
              <span className="block mb-1_4vw">Conceirge service</span>
              <span>Conceirge service</span>
            </>
          }
        />
      </div>
    </div>
  );
}

export default Born;
