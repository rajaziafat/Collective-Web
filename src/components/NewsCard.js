import React from "react";
import { Link } from "react-router-dom";
import SideBySideSection from "./SideBySideSection";

const SectionLeft = ({ img }) => {
  return (
    <div>
      <img src={img} className="w-full" alt="" />
    </div>
  );
};
const SectionRight = ({ title, desc, date, link }) => {
  return (
    <div className="flex flex-col justify-end">
      <div className="mb-4 lg:mb-1_8vw">
        <Link
          to={link ? link : "/"}
          className="fs-20px text-blue hover:text-white mb-1 lg:mb-0_2vw block w-fit"
        >
          {title}
        </Link>
        <p className="text-white opacity-60 fs-20px font-normal">{date}</p>
      </div>
      <p className="fs-16px text-white font-light">{desc}</p>
    </div>
  );
};

// DEFAULT VALUES (if not passed from outside)

const TITLE = "Are Standing Desks in Offices the New Norm?";
const DATE = "21 June 2022 - 5 Mins";
const DESC = ` Headed by brothers Barry and Paul Hickman, collective100 brings together
a legacy of creative and corporate aspirations. Barry and Paul together
possess intimate knowledge of Cremorne’s tech-meets-art reputation as
the directors and photographers behind well known and beloved CI
Studios. Years of service to Melbourne’s most talented and prestigious
brands sets the scene for the creation of yet another creative space,
this time servicing the entrepreneurial and innovative...`;

function NewsCard(props) {
  const { img, title = TITLE, desc = DESC, date = DATE, link } = props;

  return (
    <div className="border-b-1pxToVw py-10 lg:py-3vw">
      <SideBySideSection
        spacing="gap-6 lg:gap-3vw"
        SectionLeft={() => <SectionLeft img={img} />}
        SectionRight={() => (
          <SectionRight title={title} date={date} desc={desc} link={link} />
        )}
      />
    </div>
  );
}

export default NewsCard;
