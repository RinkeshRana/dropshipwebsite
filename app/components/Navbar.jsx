import React from "react";
import {
  UserIcon,
  StarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
function Navbar() {
  return (
    <div>
      <nav class="text-gray-600 font-semibold">
        <div
          class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
          bis_skin_checked="1"
        >
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Home</a>
            <a class="mr-5 hover:text-gray-900">Summer Collections</a>
            <a class="mr-5 hover:text-gray-900">Track Order</a>
            <a class="mr-5 hover:text-gray-900">Cargo Pants</a>
          </nav>
          <div className="flex space-x-4 text-black ">
            <button class="">
              <UserIcon className="h-5 w-5 " />
            </button>
            <button class="">
              <StarIcon className="h-5 w-5" />
            </button>
            <button class="">
              <ShoppingBagIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
