import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l  bottom-0 from-blue-600 via-zinc-600 to-zinc-950 w-full py-8 px-6 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Copyright */}
        <h1 className=" text-md md:text-md">
          &copy; {new Date().getFullYear()} World-Atlas. All rights reserved.
        </h1>

        {/* Center - Address */}
        <div className="text-center text-md md:text-left md:text-md">
          <p>123 World Street, Global City</p>
          <p>Email: contact@worldatlas.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-5 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}