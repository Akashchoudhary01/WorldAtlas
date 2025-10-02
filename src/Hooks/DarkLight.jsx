import { createContext, useContext, useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleButton = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Apply theme class to <html> tag
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleButton }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeChange = () => {
  const { theme, handleToggleButton } = useContext(ThemeContext);

  return (
    <button
      onClick={handleToggleButton}
      className="flex justify-end items-center  p-3 rounded-full shadow-lg 
                  text-white text-xl  transition"
    >
      {theme === "dark" ? <LuSun /> : <FaRegMoon />}
    </button>
  );
};
