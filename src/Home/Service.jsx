import React from "react";
import about from "../img/about.png";
import AOS from "aos";
function Service() {
  AOS.init();
  return (
    <div className="container mx-auto p-5">
      <div className="grid lg:grid-cols-2 place-content-center place-items-center gap-5">
        <div className="col-span-1 text-justify" data-aos="zoom-in-down">
          <p className="text-black md:text-4xl text-2xl pb-3 font-bold">
            Catering SERVICE <br />
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
        <div className="col-span-1" data-aos="zoom-in">
          <div className="hover:-translate-y-1 hover:scale-110 duration-700">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
