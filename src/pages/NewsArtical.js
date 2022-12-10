import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import React from "react";

function NewsArtical() {
  return (
    <div>
      <Navbar />

      <div className="mb-6 lg:mb-50px mt-24 lg:mt-150px">
        <div className="container-wrapper">
          <h1 className="fs-80px text-white font-bold uppercase pb-4 lg:pb-2vw border-b-1pxToVw mb-4 lg:mb-2vw">
            Are Standing Desks in Offices the New Norm?
          </h1>

          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:items-center justify-between">
            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-60 font-normal">
              21 June 2022 - 5 Mins
            </p>
            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-60 font-normal">
              Written by Kiara Hickman
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24 lg:mb-150px">
        <div className="container-wrapper">
          <img
            src="images/grid-img-3.png"
            className="w-full mb-8 lg:mb-3vw"
            alt=""
          />

          <div className="mb-16 lg:mb-6vw">
            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-80 font-light mb-4 lg:mb-1_6vw">
              {" "}
              According to a Medibank Health study, around 77% of the average
              Australian’s workday is spent sitting down, usually in lengthy
              bouts – it is not surprising when the majority of office members
              sit for long periods of time to accomplish their daily work
              requirements. We can all recognise that this sedentary lifestyle
              habit can reduce both mental and physical health, which can result
              in a potential occupational hazard.
            </p>

            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-80 font-light">
              {" "}
              After a long week, most sedentary office members are too drained
              to proceed with other activities, let alone focus on their jobs.
              This is certainly something we want to avoid in any offices; hence
              it is possible that standing desks may be the answer we’re looking
              for.
            </p>
          </div>

          <div className="mb-16 lg:mb-6vw">
            <h2 className="fs-30px lh-1_2 text-white font-semibold mb-5 lg:mb-2vw">
              What are the benefits of standing desks?
            </h2>

            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-80 font-light mb-4 lg:mb-1_6vw">
              {" "}
              It’s not recent news that standing desks are seeing an upsurge in
              popularity – they can also be referred to as standing
              workstations, sit stand desks, or simply adjustable desks. They
              are beneficial for increasing physical activity and decreasing
              sedentariness in a workplace. Here are some benefits of standing
              desks that you should know:
            </p>

            <div className="mb-4 lg:mb-1_6vw pl-1vw space-y-0_2vw">
              <p className="bullet ">
                <span>Standing Office Desks Reduce Back Pain</span>
              </p>

              <p className="bullet ">
                <span>Adjustable Standing Desks Can Help Burn Calories</span>
              </p>

              <p className="bullet ">
                <span>Standing Aids in Lower Blood Sugar Levels</span>
              </p>

              <p className="bullet ">
                <span>
                  A Sit Stand Desk Boosts Energy and Concentration Levels
                </span>
              </p>

              <p className="bullet ">
                <span>Standing Relieves Stress</span>
              </p>

              <p className="bullet ">
                <span>Standing Improves Job Performance and Productivity</span>
              </p>
            </div>

            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-80 font-light ">
              {" "}
              The ability to choose between sitting and standing, means that
              employees can work the way they find most conducive to
              productivity. As a result, employees benefit from greater mental
              alertness and an increased attention span, which will ultimately
              improve the quality of their work. Studies from standing desks
              experts highlight that thinking on your feet is also a better way
              of grounding innovative ideas, while at the same time improving
              circulation.
            </p>
          </div>

          <div className="mb-16 lg:mb-6vw">
            <h2 className="fs-30px lh-1_2 text-white font-semibold mb-5 lg:mb-2vw">
              So, is standing better than sitting?
            </h2>

            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-80 font-light">
              {" "}
              Ultimately, yes, standing at work is generally better than
              sitting, however the perfect ratio between standing and sitting
              will vary from person to person. Hence, you can adjust your
              standing desk throughout the day to remain comfortable as you
              work. Standing desks also encourage users to take breaks by moving
              and adjusting whenever they have been sitting for too long. This
              change encourages daily movement and can contribute to improving
              ones’ lifestyle and overall health.
            </p>
          </div>

          <div>
            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-80 font-light mb-4 lg:mb-1_6vw">
              {" "}
            </p>
            <h2 className="fs-30px lh-1_2 text-white font-semibold mb-5 lg:mb-2vw">
              Companies based at collective 100 have the option of upgrading to
              a sit-stand desk.
            </h2>

            <p className="text-base md:text-lg lg:text-[1.4641288433382138vw]  text-white opacity-80 font-light">
              {" "}
              More people today are aware of the benefits of standing at work,
              thus standing desks have become one of the top workplace perks
              that offices provide. US Study by SHRM (Society of Human Resource
              Management) shows that 60% of employers offer standing desks as
              part of benefits to meet office members’ needs. Hence, there is a
              good chance that a workplace may already have a policy in place
              for standing desks. So, if you opt for active workstations and the
              desire to stand and work, we at Collective_100 provide standing
              work desk options to accommodate our members.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-14 lg:mb-50px">
        <Footer />
      </div>
    </div>
  );
}

export default NewsArtical;
