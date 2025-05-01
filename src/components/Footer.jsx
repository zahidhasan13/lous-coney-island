import React from "react";
import logoWhite from "../assets/images/logo-white.svg";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4 border-b border-[#ddd] pb-8">
          {/* Logo Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img src={logoWhite} alt="Footer Logo" className="h-12" />
            </div>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl" style={{ fontFamily: "Gotham Medium" }}>
                Lou's Coney Island
              </p>
              <p className="capitalize text-sm hidden md:block" style={{ fontFamily: "Gotham Book" }}>
                open 24 hours
              </p>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-4 text-center order-3 md:order-2">
            <p className="text-base">
              19100 Mount Rd., <br />
              Detroit, MI 48234
            </p>
            <p className="capitalize text-base md:hidden" style={{ fontFamily: "Gotham Book" }}>
                open 24 hours
              </p>
            <a
              href="tel:(313) 551-5232"
              className="inline-block bg-[#FFC013] hover:bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base transition-colors"
              style={{ fontFamily: "Gotham Medium" }}
            >
              (313) 551-5232
            </a>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4 text-center order-2 md:order-3">
            <p className="text-sm md:text-base hidden md:block">Follow Us</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFC013] hover:bg-yellow-500 rounded-full p-2 text-black transition-colors"
              >
                <FaGoogle size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFC013] hover:bg-yellow-500 rounded-full p-2 text-black transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>
        {/* footer nav menu */}
        <div className="md:hidden border-b border-[#ddd] py-4">
          <ul className="flex justify-center gap-16 text-lg" style={{fontFamily: "Gotham Medium"}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Menu Links Section */}
        <div className="flex flex-wrap justify-between md:gap-y-8 md:gap-x-4 gap-3 mt-8 border-b border-[#ddd] pb-8">
          {/* Column 1 */}
          <div className="min-w-[150px] flex-1">
            <ul className="space-y-3">
              <li className="text-[#bbb] hover:text-white transition-colors text-sm">Louis Breakfast Specials</li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Omelettes</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Country Style</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Breakfast Sandwiches</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Our Famous Skillets</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="min-w-[150px] flex-1">
            <ul className="space-y-3">
              <li className="text-[#bbb] hover:text-white transition-colors text-sm">Specialty Breakfasts</li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">From Our Griddle</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Breakfast Sides</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Coneys & Fries</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Daily Specials</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="min-w-[150px] flex-1">
            <ul className="space-y-3">
              <li className="text-[#bbb] hover:text-white transition-colors text-sm">Lou's 24 Hour Specials</li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Super Sandwiches</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Combination Platters</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Sensational Salads</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Soups & Chili</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="min-w-[150px] flex-1">
            <ul className="space-y-3">
              <li className="text-[#bbb] hover:text-white transition-colors text-sm">Appetizers</li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Daily Dinners</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Stir Fry</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Gio's Kiddie Menu</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Super Burgers</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="min-w-[150px] flex-1">
            <ul className="space-y-3">
              <li className="text-[#bbb] hover:text-white transition-colors text-sm">Pita Wraps</li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Super Subs</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Lou's Sides</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Beverages</a></li>
              <li><a href="#" className="text-[#bbb] hover:text-white transition-colors text-sm">Desserts</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-[#bbb] text-sm" style={{fontFamily: "Gotham Book"}}>
            Design by <a href="#" className="hover:text-[#FFC013] transition-colors">webmastersdesktop.com</a> &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;