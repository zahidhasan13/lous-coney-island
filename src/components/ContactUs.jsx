// src/components/ContactUs.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import contactImg from "../assets/images/contact.jpg";

function ContactUs() {
  return (
      <section>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:pl-32 bg-[#F4F0E5] order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tight" style={{fontFamily: "Expend Bold"}}>CONTACT US</h2>

            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base max-w-md">
              Learn more about our services and menu. <br />
              Call us and we will help you to get direction <br />
              to the Lou's Coney Island restaurant.
            </p>

            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <a
                href="tel:3138915222"
                className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base"
              >
                <FaPhoneAlt className="h-4 w-4" />
                (313) 891-5222
              </a>

              <span className="text-gray-700 font-medium text-sm sm:text-base mt-2 sm:mt-0">Open 24 Hours</span>
            </div>
          </div>
          <div className="w-full h-full min-h-[300px] order-1 md:order-2">
            <img
              src={contactImg}
              alt="Person using mobile phone with restaurant app"
              className="w-full h-full object-cover"/>
          </div>
          </div>
        </div>
      </section>
   
  );
}

export default ContactUs;
