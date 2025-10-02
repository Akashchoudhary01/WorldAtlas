import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Ui/Header";
import Footer from "../Ui/Footer";
import { ThemeContext } from "../../Hooks/DarkLight";

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-black"
      } transition-colors duration-500`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
