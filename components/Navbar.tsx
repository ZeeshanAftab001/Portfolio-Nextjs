"use client";

import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import {navItems} from "@/data"

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex fixed top-0 left-0 w-full p-4 justify-center backdrop-blur-md z-50">
        <ul className="flex flex-row gap-10 text-white text-lg font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <a className="hover:text-gray-300 transition-colors" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden fixed top-0 left-0 w-full p-4 flex justify-between items-cente backdrop-blur-md z-50">
        <h1 className="text-white text-xl font-bold">Mudassir</h1>

        <button onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <FiX className="w-7 h-7 text-white" />
          ) : (
            <FiMenu className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {toggle && (
        <div className="sm:hidden fixed top-14 left-0 w-full text-white flex flex-col items-center gap-6 py-6 z-40  backdrop-blur-md">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-lg hover:text-purple-900 transition-colors"
              onClick={() => setToggle(false)} // close on click
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
