import Slider from "components/Slider";
import SliderButtons from "components/SliderButtons";
import TitleBar from "components/TitleBar";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import MembershipCard from "./MembershipCard";

function OurSpaces() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-10 lg:mb-50px">
          <TitleBar title="Explore our spaces" />
        </div>
      </div>

      <div>
        <div className="mb-12 lg:mb-3vw ml-6vw">
          <Slider
            slidesPerView={1.75}
            spaceBetween={20}
            prevRef={prevRef}
            nextRef={nextRef}
            breakpoints={{
              768: {
                slidesPerView: 1.75,
              },
              200: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <MembershipCard
                title="Collabroative booths"
                desc="A space for informal meetings, team lunches, casual working or a change from you desk, this is a space that has numerous meetings and represents what it means to work in a office in 2022."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                title="AV meeting room"
                desc="Since 2020, the way we work has changed, with more remote worked than ever before, our AV meeting room was introuced to enable productive online meetings with your remote and in office staff. "
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                title="Collabroative booths"
                desc="A space for informal meetings, team lunches, casual working or a change from you desk, this is a space that has numerous meetings and represents what it means to work in a office in 2022."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard
                title="AV meeting room"
                desc="Since 2020, the way we work has changed, with more remote worked than ever before, our AV meeting room was introuced to enable productive online meetings with your remote and in office staff. "
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

export default OurSpaces;
