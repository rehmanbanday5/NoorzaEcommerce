import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaInstagram,FaWhatsapp,FaLocationDot,FaEnvelope,FaPhone} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div>
           <img src={assets.Noorza} className="mb-5 w-40" alt="Noorza" />
           <p className="w-full md:w-2/3 text-gray-600">
            Premium Fashion And Essentials Designed To Bring Style, Comfort And
            Confidence To Your Everyday Life.
          </p>
          
        
          

          <div className="flex items-center gap-4 mt-6 text-xl">
            <a
              href="https://www.instagram.com/noorza_essentials/"
              target="blank"
            >
              <FaInstagram className="hover:text-[#c89116] transition" />
            </a>

            <a href="#">
              <FaWhatsapp className="hover:text-[#c89116] transition" />
            </a>
          </div>
          </div>
        
        

        <div>
          <p className="text-2xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col gap-3 text-gray-600">
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
          <p className="text-2xl font-medium mb-5">CONTACT</p>

          <div className="flex flex-col gap-4 text-gray-600">
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

      <div className="border-t  mt-12 pt-5">
        <p className="text-center text-sm text-black mb-5">
          Copyright © 2026{" "}
          <a href="/" className="hover:text-[#c89116] transition duration-300">
            Noorza
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </div>
    
  );
};

export default  Footer;




