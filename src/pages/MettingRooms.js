import Button from "components/Button";
import HeadingAndTitle from "components/HeadingAndTitle";
import Footer from "layouts/Footer";
import Born from "layouts/MeetingRooms/Born";
import Enquire from "layouts/MeetingRooms/Enquire";
import Flexibility from "layouts/MeetingRooms/Flexibility";
import Hero from "layouts/MeetingRooms/Hero";
import HightLight from "layouts/MeetingRooms/HightLight";
import Team from "layouts/MeetingRooms/Team";
import Vibrand from "layouts/MeetingRooms/Vibrand";
import Navbar from "layouts/Navbar";

function MettingRooms() {
  return (
    <div>
      <Navbar />
      <div className="mb-12 lg:mb-100px">
        <Hero />
      </div>
      <div className="mb-24 lg:mb-100px" id="down">
        <HightLight />
      </div>
      <div className="mb-24 lg:mb-150px">
        <Vibrand />
      </div>
      <div className="mb-24 lg:mb-150px">
        <Flexibility />
      </div>
      <div className="mb-24 lg:mb-150px">
        <Enquire />
      </div>
      <div className="mb-24 lg:mb-150px">
        <Born />
      </div>
      <div className="mb-24 lg:mb-150px">
        <img src="images/One-Hundred.png" className="w-full" alt="" />
      </div>
      <div className="mb-24 lg:mb-150px">
        <div className="container-wrapper">
          <HeadingAndTitle
            headingWidth="sm:w-full"
            heading={
              <>
                <span className="text-blue">
                  collective_100 was born to be different
                </span>{" "}
                from existing work <br /> spaces. Our goal was to create a space
                where corporate could <br /> collide with coworking and benefit
                from the balance provided.
              </>
            }
          />

          <div className="mt-6 lg:mt-3vw">
            <Button title="Enquire" />
          </div>
        </div>
      </div>
      <div className="mb-24 lg:mb-150px">
        <Team />
      </div>

      <div className="mb-14 lg:mb-50px">
        <Footer />
      </div>
    </div>
  );
}

export default MettingRooms;
