import React from 'react';
import logoBlack from '../assets/images/logo-black.svg';
import phoneIcon from "../assets/images/phone-icon.svg";
import { BsArrowDownLeft } from 'react-icons/bs';

const Header = () => {
    return (
        <header className='shadow-md bg-white'>
        <div className="container mx-auto px-4 sm:px-6">
            <div className='flex items-center justify-between py-3 md:py-4'>
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img 
                        src={logoBlack} 
                        alt="Lou's Coney Island" 
                        className="w-32 md:w-40 lg:w-52" // Progressive logo sizing
                    />
                </div>
                
                {/* Right side elements */}
                <div className='flex items-center gap-3 sm:gap-4 md:gap-6'>
                    {/* Phone number - hidden on smallest screens, shown from sm breakpoint */}
                    <div className="hidden sm:flex items-center gap-2">
                        <img 
                            src={phoneIcon} 
                            alt="phone icon" 
                            className="w-6 h-6 md:w-7 md:h-7" 
                        />
                        <a 
                            href="tel:+13135515232" 
                            className="text-sm md:text-base hover:text-yellow-600 font-bold whitespace-nowrap transition-colors"
                        >
                            (313) 551-5232
                        </a>
                    </div>
                    
                    {/* Phone icon - shown only on mobile */}
                    <a href="tel:+13135515232" className='sm:hidden'>
                        <img 
                            src={phoneIcon} 
                            alt="phone icon" 
                            className="w-6 h-6" 
                        />
                    </a>
                    
                    {/* Menu button */}
                    <button className="bg-[#42A672] hover:bg-yellow-600 text-white text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center gap-1 sm:gap-2 cursor-pointer">
                        <span>Menu</span>
                        <span className="text-sm sm:text-lg font-bold"><BsArrowDownLeft /></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;