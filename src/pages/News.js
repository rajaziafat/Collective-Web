import NewsCard from "components/NewsCard";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import React from "react";

function News() {
  return (
    <div>
      <Navbar />

      <div className="mb-2 lg:mb-50px mt-24 lg:mt-150px">
        <div className="container-wrapper">
          <h1 className="fs-80px text-white font-bold uppercase pb-4 lg:pb-2vw border-b-1pxToVw">
            Richmond Coworking News
          </h1>
        </div>
      </div>

      <div className="mb-20 lg:mb-150px">
        <div className="mb-10 lg:mb-50px">
          <div className="container-wrapper">
            <NewsCard img="images/card-img.png" />
            <NewsCard img="images/card-img.png" />
            <NewsCard img="images/card-img.png" />
            <NewsCard img="images/card-img.png" />
            <NewsCard img="images/card-img.png" />
          </div>
        </div>

        <div className="container-wrapper flex items-center space-x-6 lg:space-x-2vw">
          <button className="fs-16px font-black">1</button>
          <button className="fs-16px font-normal">2</button>
          <button className="fs-16px font-normal">3</button>
          <button className="fs-16px font-normal">4</button>
          <button className="fs-16px font-normal">5</button>
          <button className="fs-16px font-normal">6</button>
          <button className="fs-16px font-normal">7</button>
        </div>
      </div>

      <div className="mb-14 lg:mb-50px">
        <Footer />
      </div>
    </div>
  );
}

export default News;
