import React from "react";
import DailySpecialCard from "./DailySpecialCard";
import burgerImg from "../assets/images/cheeseburger.png";
import coneyDogs from "../assets/images/coney-dogs.png";
import fries from "../assets/images/fries.png";
import pita from "../assets/images/pita.png";
import wings from "../assets/images/wings.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const specials = [
  {
    title: "Bacon Cheeseburger",
    price: "$7.00",
    color: "#42A672",
    image: burgerImg,
    day: "Monday",
  },
  {
    title: "Coney Dogs",
    price: "$2.50",
    color: "#F4F0E5",
    image: coneyDogs,
    day: "Tuesday",
  },
  {
    title: "Chili Fries",
    price: "$4.00",
    color: "#F4F0E5",
    image: fries,
    day: "Wednesday",
  },
  {
    title: "Chicken Pita",
    price: "$5.00",
    color: "#F4F0E5",
    image: pita,
    day: "Thrusday",
  },
  {
    title: "6 Pc. Wing Dings",
    price: "$7.00",
    color: "#F4F0E5",
    image: wings,
    day: "Friday",
  },
];

function DailySpecials() {
  return (
    <>
      {/* Large Device */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-4xl md:text-5xl text-center font-bold mb-8"
            style={{ fontFamily: "Expend Bold" }}
          >
            Daily Specials
          </h2>
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {specials.map((item, idx) => (
              <div key={idx} className="mb-6">
                <DailySpecialCard item={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Device */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={16}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "2rem" }}
          >
            {specials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="mb-6">
                  <DailySpecialCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default DailySpecials;
