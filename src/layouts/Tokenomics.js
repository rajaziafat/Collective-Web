import SideBySideCard from "components/SideBySideCard";
import Slider from "components/Slider";
import SliderButtons from "components/SliderButtons";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import MembershipCard from "./MembershipCard";

function Tokenomics() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-10 lg:mb-3vw">
          <Slider
            slidesPerView={1}
            spaceBetween={20}
            prevRef={prevRef}
            nextRef={nextRef}
          >
            <SwiperSlide>
              <SideBySideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SideBySideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SideBySideCard />
            </SwiperSlide>
            <SwiperSlide>
              <SideBySideCard />
            </SwiperSlide>
          </Slider>
        </div>

        <SliderButtons prevRef={prevRef} nextRef={nextRef} />
      </div>
    </div>
  );
}

export default Tokenomics;
