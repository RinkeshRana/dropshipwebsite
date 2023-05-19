"use client";
import React, { useState } from "react";
import {
  UserIcon,
  StarIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false); // state to toggle the menu

  return (
    <div>
      <nav className="text-gray-600 font-semibold bg-white shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          {/* Add a button to show the menu icon on small screens */}
          <button
            className="md:hidden"
            onClick={() => setShowMenu(!showMenu)} // toggle the menu state
          >
            {showMenu ? (
              // show the close icon if the menu is open
              <XMarkIcon className="h-5 w-5" />
            ) : (
              // show the menu icon if the menu is closed
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
          {/* Add a conditional class to show or hide the menu based on the state */}
          <nav
            className={`${
              showMenu
                ? "fixed left-0 top-0 h-screen w-screen bg-white z-10"
                : "hidden"
            } md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:flex transition-all duration-300 transform translate-x-0 md:translate-x-full`}
          >
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Summer Collections</a>
            <a className="mr-5 hover:text-gray-900">Track Order</a>
            <a className="mr-5 hover:text-gray-900">Cargo Pants</a>
          </nav>
          <div className="flex space-x-4 text-black">
            <button className="">
              <UserIcon className="h-5 w-5" />
            </button>
            <button className="">
              <StarIcon className="h-5 w-5" />
            </button>
            <button className="">
              <ShoppingBagIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
