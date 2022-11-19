import React from "react";
import sectors from "../img/sectors.jpg";
import img1 from "../img/1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
function Business() {
  const business = [
    {
      id: 0,
      img: img1,
      title: "INDUSTRIAL",
      dec: `The world of industries is the industry that is diverse in nature – with multiple sectors, different work shifts, people from various walks of life coming together, and all striving day in and day out for a better life. The industrial working staff has irregular eating patterns coupled with loss of appetite and energy over a period of time. This makes it more imperative that the food they intake fulfills their everyday health supplement that they should get. This is where Alkush comes into the picture. We know the perfect formula that works. Be it tacking volume, blending nutrition and taste, serving major people in a short time or managing portion control, we know all of it better. Food can be fun when work is not!`,
    },
    {
      id: 1,
      img: img2,
      title: "CORPORATE",
      dec: `Food plays an important role in creating a workplace that inspires, engages and improves the productivity of the workforce. In today's fast moving world, it's important to recognize the value of a wholesome lunch that could fuel a day of productivity. We are committed to give you the best, culinary office to make a difference in the way employees picture their lunch breaks. We deliver a range of consumer-focused food built using strong consumer insight and tailored to meet client’s needs.Our long-lasting customer relationships, our innovative mindset, and our willingness to create a balanced and constantly evolving cuisine set our organization apart from the rest.`,
    },
    {
      id: 2,
      img: img3,
      title: "INSTITUTION",
      dec: `The young crowd always are looking for multiple options, be it in education, clothing, goals and ambitions or even food. They want everything the best of both worlds - taste and health. At Alkush, we offer a plethora of food options to the young crowds which are both healthy and nutritious from cuisines across the globe. We come across various menu patterns to ensure that the food isn't boring or cyclic to the kids. We put in efforts to curb food wastage by judicious portions of serving that fits into stipulated lunch durations. We plan and prepare the wholesome meals that are rich in needed nutrients for the students to keep them going throughout the day that is filled with activities and learning.`,
    },
    {
      id: 3,
      img: img4,
      title: "GOVERNMENT",
      dec: `Logis Catering serves the government sector through the delivery of a broad range of food and facilities management services to around 5 government facilities in nearby areas. We have partnered with government sectors for more than 10 years to elevate the potential of people and make a positive public impact for all. With more than 26 years of experience working in partnership with municipal authorities, we serve the highest quality food standards and compliances.`,
    },
  ];
  return (
    <div>
      <div className="fill">
        <img src={sectors} alt="" />
      </div>
      <div className="container mx-auto p-5 lg:w-2/3">
        {business.map((i) => (
          <div className="border-b py-3">
            <div className="">
              <img src={i.img} alt="" className="w-28" />
              <p className="text-4xl font-extrabold py-3 text-[#f16d07]">
                {i.title}
              </p>
            </div>
            <div>
              <p className="text-justify">{i.dec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Business;
