import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaInstagram,FaWhatsapp,FaLocationDot,FaEnvelope,FaPhone} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-40 pt-1 pb-6 sm:pb-8">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
          <div>
            <div className="mb-5">
              <h2 className="text-3xl font-medium">Noorza</h2>
              <div className="w-12 h-[3px] bg-[#c89116] mt-2"></div>
            </div>
            <p className="w-full md:w-2/3 text-gray-600">
              Premium Fashion And Essentials Designed To Bring Style, Comfort
              And Confidence To Your Everyday Life.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/noorza_essentials/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] rounded-full border border-gray-300 flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-[#c89116] hover:border-[#c89116] hover:text-white hover:-translate-y-1"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-[45px] h-[45px] rounded-full border border-gray-300 flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-[#c89116] hover:border-[#c89116] hover:text-white hover:-translate-y-1"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-5">
              <p className="text-2xl font-medium">COMPANY</p>
              <div className="w-12 h-[3px] bg-[#c89116] mt-2"></div>
            </div>

            <ul className="flex flex-col gap-3 text-gray-300">
              <Link to="/" className="hover:text-[#c89116] transition">
                Home
              </Link>

              <Link to="/Delivery" className="hover:text-[#c89116] transition">
                Delivery
              </Link>

              <Link
                to="/Privacy-Policy"
                className="hover:text-[#c89116] transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/Refund-Policy"
                className="hover:text-[#c89116] transition"
              >
                Refund Policy
              </Link>
            </ul>
          </div>

          <div>
            <div className="mb-5">
              <p className="text-2xl font-medium">CONTACT</p>
              <div className="w-12 h-[3px] bg-[#c89116] mt-2"></div>
            </div>

            <div className="flex flex-col gap-4 text-gray-300">
              <div className="flex items-start gap-5">
                <FaLocationDot className="mt-1 text-[#c89116]" />

                <p>Commercial Market, Rawalpindi, Pakistan</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-[#c89116]" />

                <p href="tel:+923371234567">+92 337 1234567</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#c89116]" />

                <a href="mailto:support@noorza.com">support@noorza.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-20 pt-5">
          <p className="text-center text-md text-gray-400">
            Copyright © 2026{" "}
            <a
              href="/"
              className="text-white hover:text-[#c89116] transition duration-300"
            >
              Noorza
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default  Footer;









  // "w-[45px] h-[45px] rounded-full border border-gray-700 flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-[#c89116] hover:border-[#c89116] hover:-translate-y-1";