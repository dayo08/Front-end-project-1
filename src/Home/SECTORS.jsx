import React from "react";
import img1 from "../img/1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import AOS from "aos";

function SECTORS() {
  AOS.init();
  const team = [
    {
      id: 0,
      img: img1,
      name: "Industrial",
    },
    {
      id: 1,
      img: img2,
      name: "Corporate",
    },
    {
      id: 2,
      img: img3,
      name: "Institutions",
    },
    {
      id: 3,
      img: img4,
      name: "Government",
    },
  ];
  return (
    <div className="container mx-auto p-5">
      <p className="text-black md:text-4xl text-2xl pb-3 font-bold ">
        OUR{" "}
        <span className="text-[#f16d07] md:text-4xl text-2xl ">
          FOCUS SECTORS
        </span>
      </p>

      <div className="gap-10 md:p-4 p-0 md:px-0 px-2 flex flex-wrap justify-evenly items-center ">
        {team.map((items, key) => (
          <div
            className="w-full max-w-xs bg-[black] text-white  hover:bg-opacity-70 rounded-3xl border-[#f16d07] border-2  shadow-lg mt-16   hover:-translate-y-8 hover:scale-110 duration-700 hover:shadow-2xl"
            key={key}
          >
            <div
              className="flex flex-col items-center gap-3 pb-10 py-7 transition ease-in-out delay-150 p-3"
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              <img
                className="mb-3 w-32 rounded-md "
                src={items.img}
                alt="Bonnie"
              />

              <h5 className="mb-1 text-xl font-bold member-name">
                {items.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SECTORS;
