import React from "react";
import Slider from "react-slick";
import dhanveen from "../img/dhanveen.png";
import legact from "../img/legact.png";
import aj from "../img/aj.png";
import jewlws from "../img/jewlws.png";
import pb from "../img/pb.png";
import indai from "../img/indai.png";

function clients() {
  const settings = {
    // infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "sample",
    speed: 2000,
  };
  const slider = [
    {
      id: 0,
      img: dhanveen,
    },
    {
      id: 1,
      img: legact,
    },

    {
      id: 3,
      img: aj,
    },
    {
      id: 4,
      img: jewlws,
    },
    {
      id: 5,
      img: pb,
    },
    {
      id: 5,
      img: indai,
    },
  ];
  return (
    <div className="container mx-auto p-5">
      <p className="text-black md:text-4xl text-2xl pb-3 font-bold ">
        OUR{" "}
        <span className="text-[#f16d07] md:text-4xl text-2xl ">CLIENTS</span>
      </p>
      <div className=" bg-white flex justify-center flex-col items-center gap-10 py-20">
        <Slider {...settings}>
          {slider.map((i) => (
            <div>
              <img src={i.img} alt="" className="w-64 mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default clients;
