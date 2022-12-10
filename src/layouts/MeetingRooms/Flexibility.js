import Button from "components/Button";
import FlexibilityCard from "components/FlexibilityCard";
import HeadingAndTitle from "components/HeadingAndTitle";
import React from "react";

function Flexibility() {
  return (
    <div className="container-wrapper">
      <div className="mb-24 lg:mb-100px">
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
              With flexible terms avaiable, offices of varying sizes and the
              addition of dedicated and flexible workspaces, collecitve_100 is a
              workspace that is positioned to scale alongside your team.
            </>
          }
        />
      </div>

      <div className="border-t-1px lg:border-t-1pxToVw mb-8 lg:mb-2vw">
        <FlexibilityCard
          title="01 - Super fast WIFI"
          desc="Your workspace should never mean compromise. Our space is designed to impress not only visitors and clients, but enrich the day-to-day activities of our full time members. With detail and consideration in every corner, you’ll understand why we are the chosen home for brands like Nespresso."
        />
        <FlexibilityCard
          title="02 - Showers"
          desc="What makes a workspace a joy to work in? When designing collective_100, we kept in mind the touches that make an office special. Unlike many other coworking spaces in Melbourne, we ensured premium elements, such as intimate workspaces, more private offices and A-grade amenities."
        />
        <FlexibilityCard
          title="03 - Bike racks"
          desc="Our unique space attracts unique members who understand the importance of a friendly yet distinguished work environment. This naturally forms a respectful and collaborative culture, which invites discussion, friendships and collaboration between businesses and brands."
        />
        <FlexibilityCard
          title="04 - Meeting room"
          desc="Our unique space attracts unique members who understand the importance of a friendly yet distinguished work environment. This naturally forms a respectful and collaborative culture, which invites discussion, friendships and collaboration between businesses and brands."
        />
        <FlexibilityCard
          title="05 - Private phone booths"
          desc="Your workspace should never mean compromise. Our space is designed to impress not only visitors and clients, but enrich the day-to-day activities of our full time members. With detail and consideration in every corner, you’ll understand why we are the chosen home for brands like Nespresso."
        />
        <FlexibilityCard
          title="06 - Kitchen with Lunch Area"
          desc="What makes a workspace a joy to work in? When designing collective_100, we kept in mind the touches that make an office special. Unlike many other coworking spaces in Melbourne, we ensured premium elements, such as intimate workspaces, more private offices and A-grade amenities."
        />
        <FlexibilityCard
          title="07 - Collaboration Spaces"
          desc="Our unique space attracts unique members who understand the importance of a friendly yet distinguished work environment. This naturally forms a respectful and collaborative culture, which invites discussion, friendships and collaboration between businesses and brands."
        />
        <FlexibilityCard
          title="08 - Mailing address"
          desc="Our unique space attracts unique members who understand the importance of a friendly yet distinguished work environment. This naturally forms a respectful and collaborative culture, which invites discussion, friendships and collaboration between businesses and brands."
        />
        <FlexibilityCard
          title="09 - Sparkling water"
          desc="Our unique space attracts unique members who understand the importance of a friendly yet distinguished work environment. This naturally forms a respectful and collaborative culture, which invites discussion, friendships and collaboration between businesses and brands."
        />
        <FlexibilityCard
          title="10 - Rooftop Deck"
          desc="Our unique space attracts unique members who understand the importance of a friendly yet distinguished work environment. This naturally forms a respectful and collaborative culture, which invites discussion, friendships and collaboration between businesses and brands."
        />
        <FlexibilityCard
          title="11 - Catering services"
          desc="Our unique space attracts unique members who understand the importance of a friendly yet distinguished work environment. This naturally forms a respectful and collaborative culture, which invites discussion, friendships and collaboration between businesses and brands."
        />
        <FlexibilityCard
          title="12 - Accessible"
          desc="Our unique space attracts unique members who understand the importance of a friendly yet distinguished work environment. This naturally forms a respectful and collaborative culture, which invites discussion, friendships and collaboration between businesses and brands."
        />
      </div>

      <Button title="Enquire" />
    </div>
  );
}

export default Flexibility;
