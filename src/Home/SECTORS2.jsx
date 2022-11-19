import React from "react";
import operational from "../img/operational-excellence.png";
import timeline from "../img/timeline.png";
import fssai from "../img/fssai.png";
import AOS from "aos";
function SECTORS2() {
  AOS.init();
  const team = [
    {
      id: 0,
      img: operational,
      name: "Operational Excellence",
      dec: `Standard operating procedures
      Easy handling of industrial requirements
      Team cooperation across every operation`,
    },
    {
      id: 1,
      img: timeline,
      name: "Timelines",
      dec: `Quick set-up and turnaround time
      Timely delivery of food across sessions
      Easy client handling under short notice`,
    },
    {
      id: 2,
      img: fssai,
      name: "Hygiene, Quality, Cost, Service",
      dec: `Stringent Checks
      FSSAI Certified
      Compliance Policies and procedures`,
    },
  ];
  return (
    <div className="bg-[#e1e3e4] mt-10">
      <div className="container mx-auto  gap-10 md:p-10 md:px-0 px-2 flex flex-wrap justify-evenly items-center  ">
        {team.map((items, key) => (
          <div
            className="w-full max-w-md my-auto bg-[black] text-white  hover:bg-opacity-70 rounded-3xl border-[#f16d07] border-2  shadow-lg text-center  hover:-translate-y-1 hover:scale-110 duration-700 hover:shadow-2xl"
            key={key}
          >
            <div
              className="flex flex-col items-center gap-3 pb-10 py-7 transition ease-in-out delay-150 p-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                className="mb-3 w-32 rounded-md "
                src={items.img}
                alt="Bonnie"
              />

              <h5 className="mb-1 text-xl font-bold member-name">
                {items.name}
              </h5>
              <p>{items.dec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SECTORS2;
