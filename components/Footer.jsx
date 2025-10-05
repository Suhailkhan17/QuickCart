import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            QuickCart by GreatStack is your one-stop e-commerce platform delivering high-quality electronics, gadgets, and accessories with fast shipping and reliable customer service. Our mission is to provide a seamless online shopping experience for every tech enthusiast.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="/">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/about">About Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/contact">Contact Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>Phone: +91-98765-43210</p>
              <p>Email: support@quickcart.dev</p>
              <p>Address: 123 Tech Street, Moradabad, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm">
        © 2025 QuickCart by GreatStack. All Rights Reserved. Patents Pending.
      </p>
    </footer>
  );
};

export default Footer;
