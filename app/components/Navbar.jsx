"use client";
import React, { useState } from "react";
import {
  UserIcon,
  StarIcon,
  ShoppingBagIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Navigation from "./Navigation";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false); // state to toggle the menu

  return (
    <div className="">
      <nav
        className="text-gray-600 font-semibold bg-white/40 p-1 fixed top-0 w-full z-50 backdrop-blur-xl shadow
      "
      >
        <div className="container mx-auto flex-wrap p-5 flex items-center justify-between">
          <div className="block md:hidden">
            <button onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? (
                <XIcon className="h-6 md:h-8 w-6" />
              ) : (
                <MenuIcon className="h-6 md:h-8 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <button className="items-center ">
              <SearchIcon className="h-5 md:h-8 w-6" />
            </button>
          </div>
          <div className="text-black">
            <h4 className="text-xl md:text-3xl font-light"> Tailblocks </h4>
          </div>
          <div>
            <div className="flex space-x-4 text-black">
              <button className="flex items-center">
                <StarIcon className="h-5 md:h-8 w-6" />
              </button>
              <button className="flex items-center">
                <ShoppingBagIcon className="h-5 md:h-8 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="md:block hidden">
        <Navigation />
      </div>

      {/* mobile sidebar */}
      <div
        className={`
      ${showMenu ? "block md:hidden " : "md:hidden "} 
      
      `}
      >
        <div
          className={` ${
            showMenu
              ? " translate-x-0 duration-700 "
              : " -translate-x-full duration-500 "
          }
          
   fixed top-15 left-0 w-3/4 h-full bg-white/40 z-50 backdrop-blur-2xl shadow 
  `}
        >
          <div>
            <button className="p-6 sm:p-8">
              <XIcon
                className="h-6 sm:h-8 w-8"
                onClick={() => setShowMenu(!showMenu)}
              />
            </button>
          </div>
          <div className="flex flex-col space-y-6 text-black container p-8 sm:p-10 font-semibold sm:text-2xl ">
            <div href="#">Home</div>
            <a href="#">Collections</a>
            <a href="#">Hoodie & T-Shirts</a>
            <a href="#">Summer Collection</a>
            <a href="#">Winter Collection</a>
            <a href="#">Accessories</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
