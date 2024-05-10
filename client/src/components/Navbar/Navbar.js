import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#f8b208] w-full">
      <div className="py-2 max-w-[1200px] w-full mx-auto flex items-center justify-between ">
        <div>
          <img src={Logo} alt="Logo" className="w-[50px]" />
        </div>
        <div>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="/"
                className="text-[18px] leading-[20px] font-semibold hover:underline underline-offset-4 transition duration-300"
              >
                Home
              </a>
            </li>
            {/* <li><a href='/order-line' className='text-[18px] leading-[20px] font-semibold hover:underline'>Order Online</a></li> */}
            <li>
              <a
                href="/feedback"
                className="text-[18px] leading-[20px] font-semibold hover:underline underline-offset-4 transition duration-300"
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="text-[18px] leading-[20px] font-semibold hover:underline underline-offset-4 transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <a
              href="/login"
              className="text-[18px] leading-[20px] font-semibold hover:underline underline-offset-4 transition duration-300"
            >
              Register
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
