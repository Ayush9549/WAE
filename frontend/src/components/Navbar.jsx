import React from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo.png";

const Navbar = ({ mode, setMode }) => {
  const handlerTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <nav
      className={`flex items-center justify-between w-full px-[8%] h-20 z-10 ${
        mode === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <img
        src={mode == "light" ? logoDark : logoWhite}
        alt="logo"
        className="w-[200px] cursor-pointer "
      />
      <div
        className={`flex items-center border-2 rounded-full p-2 ${
          mode == "light" ? "border-black" : "border-white"
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="outline outline-none bg-transparent pl-2 "
        />
        <IoSearchOutline
          size={20}
          className={`cursor-pointer font-bold ${
            mode == "light" ? "text-black" : "text-white"
          }`}
        />
      </div>

      <ul className={`flex ${mode == "light" ? "text-black" : "text-white"}`}>
        <li className="text-lg mx-7 cursor-pointer">Home</li>
        <li className="text-lg mx-7 cursor-pointer">Languages</li>
        <li className="text-lg mx-7 cursor-pointer">Services</li>
        <li className="text-lg mx-7 cursor-pointer">Contact Us</li>
      </ul>

      <button
        className={`px-4 py-2 ${
          mode == "light" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Login
      </button>

      {mode == "light" ? (
        <MdDarkMode
          size={35}
          className="cursor-pointer"
          onClick={() => handlerTheme()}
        />
      ) : (
        <MdLightMode
          size={35}
          className="cursor-pointer text-white"
          onClick={() => handlerTheme()}
        />
      )}
    </nav>
  );
};

export default Navbar;
