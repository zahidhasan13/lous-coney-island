import React from "react";
import breakFastCombo from "../assets/images/big-breakfast-combo.png";
import chiliSpecial from "../assets/images/chili.png";
import baconEggSandwich from "../assets/images/sandwich.png";
import greekSalad from "../assets/images/salad.png";
import chickenStirFry from "../assets/images/stir-fry.png";
import grannyPeachCobbler from "../assets/images/peach-cobbler.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const menuItems = [
  {
    title: "BIG BREAKFAST COMBO",
    img: breakFastCombo,
    description:
      "3 XL eggs with hash browns or grits, a slice of ham, 3 pc. bacon, 3 pc. sausage, toast & jelly.",
    price: "11.00",
  },
  {
    title: "CHILI SPECIAL",
    img: chiliSpecial,
    description:
      "Chili topped with ground beef, onions & cheese. All our soups are prepared fresh daily!",
    price: "5.50",
  },
  {
    title: "BACON & EGG SANDWICH",
    img: baconEggSandwich,
    description:
      "Topped with lettuce, tomato & mayo eggs any way you like! Add Cheese for $1.00",
    price: "7.00",
  },
  {
    title: "GREEK SALAD",
    img: greekSalad,
    description:
      "Lettuce, tomatoes, olives, beets, pepperoncini & feta cheese.",
    price: "12.00",
  },
  {
    title: "CHICKEN STIR FRY",
    img: chickenStirFry,
    description:
      "Bell pepper, onion, tomato, mushrooms and carrots. Served with Rice.",
    price: "13.00",
  },
  {
    title: "GRANNY'S PEACH COBBLER",
    img: grannyPeachCobbler,
    description:
      "Ripe peaches, sugar, cinnamon, a buttery golden crust, and a hint of vanilla.",
    price: "5.00",
  },
];

function ExploreMenu() {
  return (
    <>
      <section className="pb-10 md:pb-20">
        <div className="container mx-auto lg:px-20 sm:px-6">
          <h2
            className="text-4xl md:text-5xl text-center font-bold mb-8"
            style={{ fontFamily: "Expend Bold" }}
          >
            Explore Menu
          </h2>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition mb-6 relative"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3
                    className="font-bold text-2xl mb-2"
                    style={{ fontFamily: "Expend Bold" }}
                  >
                    {item.title}
                  </h3>
                  <p className="h-32 font-normal pr-2">{item.description}</p>
                  <div className="flex justify-between items-center mt-4 absolute bottom-4 left-4 right-4">
                    <span className="text-lg font-bold text-gray-800">
                      ${item.price}
                    </span>
                    <button className="bg-[#FFC013] px-4 py-2 rounded-full hover:bg-yellow-500 transition cursor-pointer font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
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
            {menuItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition mb-6 relative"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3
                      className="text-lg md:text-2xl mb-2 truncate"
                      style={{ fontFamily: "Expend Bold" }}
                    >
                      {item.title}
                    </h3>
                    <p className="h-36 pr-2" style={{fontFamily:"Gotham Book"}}>{item.description}</p>
                    <div className="flex justify-between items-center mt-4 absolute bottom-4 left-4 right-4">
                      <span className="text-lg font-bold text-gray-800">
                        ${item.price}
                      </span>
                      <button className="bg-[#FFC013] px-4 py-2 rounded-full hover:bg-yellow-500 transition cursor-pointer font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default ExploreMenu;
