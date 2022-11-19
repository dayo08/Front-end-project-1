import React from "react";
import AOS from "aos";
function JOURNEY() {
  AOS.init();
  const JOURNEY = [
    {
      id: 0,
      years: "1996",
      titile: `Started serving in a pharmaceutical company, served 7 meals on day
      1, with 2 employees, 1 unit`,
    },
    {
      id: 1,
      years: "2009",
      titile: `Started Pukhraj Restaurant at Daman and also started serving at corporates at location of Kutch`,
    },
    {
      id: 2,
      years: "1999",
      titile: `Started Hotel Prayag later upgraded name to Prayag Thali, served 12 meals on day 1, employees 5, unit – 2`,
    },
    {
      id: 3,
      years: "2015",
      titile: `Started Prayag Thali Restaurant at Atul, also started serving at corporates at MP, Allahabad and Ghatkopar, and organized Bhagwat Katha where food was served to everyone for 7 days as part of our social service`,
    },
    {
      id: 4,
      years: "2000",
      titile: `Started another unit of Prayag Thali at Silvassa, served 18 meals on day 1, employees 8, unit – 3`,
    },
    {
      id: 5,
      years: "2020",
      titile: `Served meals to needy people during COVID`,
    },
    {
      id: 6,
      years: "2005",
      titile: `Started serving in corporates like HUL and Pharma companies at Uttarakhand and Badd`,
    },
    {
      id: 7,
      years: "2022",
      titile: `Started serving in companies in SEZ Dahej and Vishakhapatnam`,
    },
  ];
  return (
    <div>
      <div className="container mx-auto p-5">
        <p className="text-black md:text-4xl text-2xl pb-3 font-bold ">
          OUR{" "}
          <span className="text-[#f16d07] md:text-4xl text-2xl ">JOURNEY</span>
        </p>
        <div className="grid md:grid-cols-2 gap-10 place-content-center ">
          {JOURNEY.map((i) => (
            <div className="hover:-translate-y-8 hover:scale-100 duration-700">
              <p
                className={`${
                  i.id === 3 || i.id === 2 || i.id === 6 || i.id === 7
                    ? "bg-[#f16d07]  "
                    : "bg-[#939293]"
                } text-white p-3 rounded-2xl flex justify-end font-bold text-2xl`}
              >
                {i.years}
              </p>
              <p className="mt-2">{i.titile}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JOURNEY;
