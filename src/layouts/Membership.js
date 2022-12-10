import Slider from "components/Slider";
import SliderButtons from "components/SliderButtons";
import TitleBar from "components/TitleBar";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import MembershipCard from "./MembershipCard";

function Membership() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-12 sm:mb-9 lg:mb-50px">
          <TitleBar title="Explore our memberships" />
        </div>
      </div>

      <div>
        <div className="mb-10 lg:mb-3vw ml-6vw">
          <Slider
            slidesPerView={2.5}
            spaceBetween={20}
            prevRef={prevRef}
            nextRef={nextRef}
            breakpoints={{
              1024: {
                slidesPerView: 2.5,
              },

              500: {
                slidesPerView: 1.8,
                spaceBetween: 30,
              },
              300: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <MembershipCard
                title="Private office"
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
                min="2"
                max="20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                title="Private office"
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
                min="2"
                max="20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                title="Private office"
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
                min="2"
                max="20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                title="Private office"
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
                min="2"
                max="20"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                title="Private office"
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
                min="2"
                max="20"
              />
            </SwiperSlide>
          </Slider>
        </div>

        <div className="container-wrapper">
          <SliderButtons prevRef={prevRef} nextRef={nextRef} />
        </div>
      </div>
    </div>
  );
}

export default Membership;
