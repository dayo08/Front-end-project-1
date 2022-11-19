import React, { useEffect, useState } from "react";
import alkush from "../img/alkush.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Service from "./Service";
import SECTORS from "./SECTORS";
import AOS from "aos";
import SECTORS2 from "./SECTORS2";
import BRANDS from "./BRANDS";
import ABOUTUS from "./ABOUTUS";
import Clients from "./Clients";
function Home() {
  const [counteron, setCounterOn] = useState(false);
  AOS.init();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="">
        <div className="item active">
          <div className="fill">
            <img src={alkush} alt="" />
          </div>
        </div>
        <div className="bg-home-counter container mx-auto p-5">
          <div className="container mx-auto  p-5">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <p className="text-center 2xl:text-5xl lg:text-3xl text-xl font-bold md:w-3/5 mx-auto pb-5">
                SERVING MORE THAN 17000 MEALS PER DAY AND COUNTING
              </p>
              <div className="flex lg:flex-row flex-col items-center gap-10 justify-around text-[BLACK] font-bold rounded-lg border p-4">
                <div
                  data-aos={"flip-left"}
                  className="flex gap-3 justify-center items-center"
                >
                  <div>
                    <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                      {counteron && (
                        <CountUp start={0} end={300} duration={2} delay={0} />
                      )}
                      <span>+</span>
                    </div>
                    <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">
                      Total Employees
                    </div>
                  </div>
                </div>
                <div
                  data-aos={"flip-left"}
                  className="flex gap-3 justify-center items-center"
                >
                  <div>
                    <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                      {counteron && (
                        <CountUp start={0} end={20} duration={2} delay={0} />
                      )}
                      <span>+</span>
                    </div>
                    <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">
                      Years of Experience
                    </div>
                  </div>
                </div>
                <div
                  data-aos={"flip-left"}
                  className="flex gap-3 justify-center items-center"
                >
                  <div>
                    <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                      {counteron && (
                        <CountUp start={0} end={40} duration={2} delay={0} />
                      )}
                      <span>+</span>
                    </div>
                    <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">
                      Total Kitchen
                    </div>
                  </div>
                </div>
                <div
                  data-aos={"flip-left"}
                  className="flex gap-3 justify-center items-center"
                >
                  <div>
                    <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                      {counteron && (
                        <CountUp start={0} end={150} duration={2} delay={0} />
                      )}
                      <span>+</span>
                    </div>
                    <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">
                      Total Satisfied Clients
                    </div>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
      <Service />
      <SECTORS />
      <SECTORS2 />
      <BRANDS />
      <ABOUTUS />
      <Clients />
    </>
  );
}

export default Home;
