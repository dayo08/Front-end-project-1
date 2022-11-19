import React from "react";
import canteen01 from "../img/canteen01.png";
import canteen02 from "../img/canteen02.png";
import canteen03 from "../img/canteen03.png";
import canteen04 from "../img/canteen04.png";
import AOS from "aos";

function BRANDS() {
  AOS.init();
  const team = [
    {
      id: 0,
      img: canteen01,
    },
    {
      id: 1,
      img: canteen02,
    },
    {
      id: 2,
      img: canteen03,
    },
    {
      id: 3,
      img: canteen04,
    },
  ];
  return (
    <div className="container mx-auto p-5">
      <p className="text-black md:text-4xl text-2xl pb-3 font-bold ">
        OUR <span className="text-[#f16d07] md:text-4xl text-2xl ">BRANDS</span>
      </p>

      <div className="gap-10 md:p-4 p-0 md:px-0 px-2 flex flex-wrap justify-evenly items-center ">
        {team.map((items, key) => (
          <div
            className="w-full max-w-xs  text-white  hover:bg-opacity-70 rounded-3xl border-[#f16d07] border-2  shadow-lg   hover:translate-y-2 hover:rotate-6 hover:scale-110 duration-700 hover:shadow-2xl"
            key={key}
          >
            <div
              className="flex flex-col items-center gap-3 pb-10 py-7 transition ease-in-out delay-150 p-3"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <img
                className="mb-3 w-44 rounded-md hover:origin-center"
                src={items.img}
                alt="Bonnie"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BRANDS;
