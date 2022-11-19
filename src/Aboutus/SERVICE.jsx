import React from "react";
import aboutimg from "../img/aboutimg.jpg";
import purpose from "../img/purpose.png";
import vision from "../img/vision.png";
import mission from "../img/mission.png";
import AOS from "aos";
function SERVICE() {
  AOS.init();
  const team = [
    {
      id: 0,
      img: purpose,
      name: "OUR PURPOSE",
      dec: `We are dedicated to enhancing our consumer’s quality of life with effective solutions and creating a positive impact on society.`,
    },
    {
      id: 1,
      img: vision,
      name: "OUR VISION",
      dec: `‘To be a leader by’ Driving excellence Developing innovative and efficient services & solutions Delivering the best in class quality, consistently`,
    },
    {
      id: 2,
      img: mission,
      name: "OUR MISSION",
      dec: `‘To offer varied & unique products & services’ Alkush Group aims to provide a wide spectrum of unique services and solutions with the best talent available. We endeavour to offer complete, best in class solutions and augment our clients’ base.`,
    },
  ];
  return (
    <div className="">
      <div className="fill">
        <img src={aboutimg} alt="" />
      </div>
      <div className="container mx-auto">
        {" "}
        <div className=" p-5 w-2/3 mx-auto">
          <p className="text-black md:text-4xl text-2xl pb-3 font-bold ">
            Catering SERVICE{" "}
            <span className="text-[#f16d07] md:text-4xl text-2xl ">
              ORIENTED VENTURE
            </span>
          </p>
          <p>
            Established in the year 1996 with a different name, Logis Catering
            is a trusted, reputed and well-established firm in Catering
            providing excellent food experience to its esteemed customers. It
            has become synonymous with the customer-oriented approach by serving
            timely, enjoyable, refreshing and best-quality hygienic meals.
          </p>
          <br />
          <p>
            Logis Catering offers a dedicated support structure that facilitates
            efficiency across all facets of Catering service development and
            operations. We believe in providing single-source solutions for
            specific requirements of our valued clients.
          </p>
        </div>
        <div className=" mt-10">
          <div className=" gap-10 md:p-10 md:px-0 px-2 flex flex-wrap justify-evenly items-center  ">
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
      </div>
    </div>
  );
}

export default SERVICE;
