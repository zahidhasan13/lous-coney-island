// src/components/GoogleReviews.jsx
import React from "react";
import reviewIcon from "../assets/images/review-icon.svg";
import review1 from "../assets/images/jordan-crehan.jpg"
import review2 from "../assets/images/yonikka-jackson.jpg"
import review3 from "../assets/images/cortez-cochran.jpg"
import star from "../assets/images/star.svg"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const reviews = [
  {
    id: 1,
    name: "Jordan Crehan",
    avatar: review1,
    rating: 4,
    text: "Great food and service. The corned beef sandwiches are 🔥.",
  },
  {
    id: 2,
    name: "Yonikka Jackson",
    avatar: review2,
    rating: 5,
    text: "They made my coffee so perfect to-go. My breakfast sandwich was delicious and made just right, too. Quick, great service in the drive thru. Thanks!",
  },
  {
    id: 3,
    name: "Cortez Cochran",
    avatar: review3,
    rating: 5,
    text: "Grilled chicken salad 🥗 is great! Chicken cut bite sized and evenly spread! Lady at the drive thru has the Sweet southern hospitality. Makes the food more soulful 🧡",
  },
];

function GoogleReviews() {
  return (

    <>
    <section className="py-10 md:py-20">
    <div className="container mx-auto lg:px-20 sm:px-6">
    <h2
            className="text-4xl md:text-5xl text-center font-bold mb-8"
            style={{ fontFamily: "Expend Bold" }}
          >
            Google Review
          </h2>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border-2 border-gray-200 p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} />
                    <span className="text-lg" style={{fontFamily: "Gotham Medium"}}>{item.name}</span>
                  </div>
                  <div>
                    <img src={reviewIcon} alt="Review Icon" />
                  </div>
                </div>
                <div>
                  {
                    Array.from({ length: item.rating }, (_, i) => (
                      <img
                        key={i}
                        src={star}
                        alt="Star Icon"
                        className="inline-block mr-1 w-4"
                      />
                    ))
                  }
                </div>
                <div>
                  <p className="text-sm text-gray-600 mt-4" style={{fontFamily: "Gotham Book"}}>{item.text}</p>
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
            {reviews.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                key={idx}
                className="rounded-xl overflow-hidden border-2 border-gray-200 p-5 h-72"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} />
                    <span className="text-lg" style={{fontFamily: "Gotham Medium"}}>{item.name}</span>
                  </div>
                  <div>
                    <img src={reviewIcon} alt="Review Icon" />
                  </div>
                </div>
                <div>
                  {
                    Array.from({ length: item.rating }, (_, i) => (
                      <img
                        key={i}
                        src={star}
                        alt="Star Icon"
                        className="inline-block mr-1 w-4"
                      />
                    ))
                  }
                </div>
                <div>
                  <p className="text-sm text-gray-600 mt-4" style={{fontFamily: "Gotham Book"}}>{item.text}</p>
                </div>
              </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
    </>
    // <section className="py-12 bg-gray-100">
    //   <h2 className="text-5xl text-center font-bold mb-8" style={{fontFamily: "Expend Bold"}}>Google Reviews</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    //     {
    //       reviews.map((review) => (
    //         <div
    //           key={review.id}
    //           className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition p-4"
    //         >
    //           <div className="flex items-center mb-4">
    //             <img
    //               src={review.avatar}
    //               alt={review.name}
    //               className="w-12 h-12 rounded-full mr-4"
    //             />
    //             <div>
    //               <h3 className="font-bold text-xl" style={{fontFamily: "Expend Bold"}}>{review.name}</h3>
    //               <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
    //             </div>
    //           </div>
    //           <p>{review.text}</p>
    //         </div>
    //       ))
    //     }
    //   </div>
    // </section>
  );
}

export default GoogleReviews;
