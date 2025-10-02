import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinkClass = ({ isActive }) =>
    `cursor-pointer transition ${
      isActive ? "text-blue-400 font-semibold" : "text-white hover:text-blue-200"
    }`;

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-zinc-600 to-zinc-950 py-6 px-5 relative z-50">
      <div className="flex justify-between items-center max-w-5xl min-w-[20rem] mx-auto">
        {/* Logo */}
        <h1 className="tracking-[12px] md:tracking-[15px] font-extralight text-xl md:text-2xl text-white">
          World-Atlas
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-xl">
          <NavLink to="/" className={navLinkClass} end>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            <li>About</li>
          </NavLink>
          <NavLink to="/country" className={navLinkClass}>
            <li>Country</li>
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            <li>Contact-us</li>
          </NavLink>
        </ul>

        {/* Hamburger / Close Btn */}
        <div className="md:hidden text-3xl text-white z-50">
          <button onClick={handleShowMenu}>
            {showMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 transition-opacity duration-300 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleShowMenu}
      ></div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 right-0 h-full bg-zinc-900 shadow-xl w-60 flex flex-col gap-8 py-10 px-6 transform transition-transform duration-500 z-50 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavLink to="/" className={navLinkClass} end onClick={handleShowMenu}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" className={navLinkClass} onClick={handleShowMenu}>
          <li>About</li>
        </NavLink>
        <NavLink to="/country" className={navLinkClass} onClick={handleShowMenu}>
          <li>Country</li>
        </NavLink>
        <NavLink to="/contact" className={navLinkClass} onClick={handleShowMenu}>
          <li>Contact-us</li>
        </NavLink>
      </ul>
    </header>
  );
}