import React, { useRef } from "react";
import Slider from "components/Slider";
import SliderButtons from "components/SliderButtons";
import TitleBar from "components/TitleBar";
import { SwiperSlide } from "swiper/react";
import MembershipCard from "layouts/MembershipCard";

function Team() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-12 sm:mb-9 lg:mb-50px">
          <TitleBar title="Meet the team" buttonShow={false} />
        </div>
      </div>

      <div>
        <div className="mb-10 lg:mb-3vw ml-6vw">
          <Slider
            slidesPerView={3.2}
            spaceBetween={20}
            prevRef={prevRef}
            nextRef={nextRef}
            breakpoints={{
              1200: {
                slidesPerView: 3.2,
              },
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
                titleBorder={false}
                img="images/lady-white.png"
                imgHeight="h-auto"
                title="Kiara Hickman - Conceirge "
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                titleBorder={false}
                img="images/lady-white.png"
                imgHeight="h-auto"
                title="Kiara Hickman - Conceirge "
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                titleBorder={false}
                img="images/lady-white.png"
                imgHeight="h-auto"
                title="Kiara Hickman - Conceirge "
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                titleBorder={false}
                img="images/lady-white.png"
                imgHeight="h-auto"
                title="Kiara Hickman - Conceirge "
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                titleBorder={false}
                img="images/lady-white.png"
                imgHeight="h-auto"
                title="Kiara Hickman - Conceirge "
                desc=" This option is available to teams of any size. Private offices come fully furnished with desks, chairs, and shelves."
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

export default Team;
