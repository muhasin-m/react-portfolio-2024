import React, { useState } from "react";
import { links } from "../data";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50 ">
      <div className="justify-around flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-4 relative jus">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <h2 className="text-3xl font-bold text-white">
            M<span className="text-white">M</span>
          </h2>

          <button className="sm:hidden text-white" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`flex gap-x-8  ${
            isSidebarOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row absolute sm:relative bg-gray-800 sm:bg-transparent w-full sm:w-auto left-0 sm:left-auto top-full sm:top-auto sm:items-center p-4 sm:p-0 `}
        >
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-100 duration-300 text-white"
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
