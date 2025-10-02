import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeChange, ThemeContext } from "../../Hooks/DarkLight";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  const navLinkClass = ({ isActive }) =>
    `cursor-pointer transition ${
      isActive
        ? "text-blue-400 font-semibold"
        : theme === "light"
        ? "text-black hover:text-blue-500"
        : "text-white hover:text-blue-200"
    }`;

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-zinc-600 to-zinc-950 py-6 px-5 relative z-50">
      <div className="flex justify-between items-center max-w-5xl min-w-[20rem] mx-auto">
        {/* Logo */}
        <h1 className="tracking-[12px] md:tracking-[15px] font-extralight text-xl md:text-2xl text-white">
          World-Atlas
        </h1>

        {/* Desktop Nav + Theme Toggle */}
        <div className="hidden md:flex gap-6 items-center">
          <ul className="flex gap-8 text-xl">
            <li>
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/country" className={navLinkClass}>
                Country
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact-us
              </NavLink>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <ThemeChange />
        </div>

        {/* Hamburger / Close Btn */}
        <div className="md:hidden flex items-center gap-4 text-3xl text-white z-50">
          <ThemeChange /> {/* mobile toggle */}
          <button onClick={handleShowMenu} aria-label="Toggle Menu">
            {showMenu ? <IoCloseSharp  /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleShowMenu}
      ></div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 right-0 h-[40%] shadow-xl w-50 flex flex-col gap-8 py-10 px-6 transform transition-transform duration-500 z-50 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}
      >
        <li>
          <NavLink to="/" className={navLinkClass} end onClick={handleShowMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass} onClick={handleShowMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/country" className={navLinkClass} onClick={handleShowMenu}>
            Country
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass} onClick={handleShowMenu}>
            Contact-us
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
