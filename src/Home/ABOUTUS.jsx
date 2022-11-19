import React from "react";
import blockquote from "../img/blockquote.png";
import Slider from "react-slick";
import AOS from "aos";
function ABOUTUS() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "sample",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  AOS.init();
  const team = [
    {
      id: 0,
      name: "-   Krunal Lad",
      dec: `We are enjoying food service from Logis Catering, and are satisfied with the food and service they provide.`,
    },

    {
      id: 1,

      name: "Mr. Krunal Lad",
      dec: `Our organisation has been taking food services from Logis Catering for 3 years now. It has never failed to provide us with quality food for our delegates. Thanks to their team for continuous efforts in providing the best food experience to our people."`,
    },
    {
      id: 2,
      name: "Arnawaz Karai",
      dec: `Our organization has been taking food services from Logis Catering for years now. Team Alkush has never failed to provide us with quality food for our delegates. Thanks to the team for continuous efforts in providing the best food experience.`,
    },
    {
      id: 3,
      name: " Sanjay Sharma",
      dec: `We are enjoying food from Alkush for years and the passionate team has gained our trust by serving good quality food to our employees every time.`,
    },
    {
      id: 4,
      name: "Mr. Pankaj Mohan",
      dec: `It has been quite a long, experiencing the service of Logis Catering at our unit with integrity and consistency. We are delighted to have you as our food partner.`,
    },
    {
      id: 5,

      name: "Mr. Bhavesh Mahyavanshi",
      dec: `Logis Catering has been associated with Wockhardt Ltd. for more than two decades, and it has served us tasty food and prompt service throughout.`,
    },
  ];
  return (
    <div className="bg-[#ffebd5] mt-10 p-5">
      <div className="  container mx-auto">
        <p className="text-black md:text-4xl text-2xl pb-3 font-bold ">
          PEOPLE{" "}
          <span className="text-[#f16d07] md:text-4xl text-2xl ">
            SAY ABOUT US
          </span>
        </p>
        <div className=" md:p-10 md:px-0 px-2 flex   justify-center items-center">
          <Slider {...settings}>
            {team.map((items, key) => (
              <div
                className=" w flex justify-between items-center gap-5   bg-[white] text-black  hover:bg-opacity-70 rounded-3xl border-[#f16d07] border-2  shadow-lg text-center   hover:shadow-2xl"
                key={key}
              >
                <div
                  className="flex flex-col h-96 items-center justify-center gap-5 pb-10 py-7 transition ease-in-out delay-150 p-3"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    className="mb-3 w-12 rounded-md "
                    src={blockquote}
                    alt="Bonnie"
                  />
                  <p>{items.dec}</p>
                  <h5 className="mb-1 text-xl font-bold member-name text-[#f16d07]">
                    {items.name}
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ABOUTUS;
