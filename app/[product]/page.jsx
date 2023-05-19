import React from "react";
import {
  StarIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import DemoImage from "./components/DemoImage";

const page = () => {
  return (
    <div className="grid grid-rows-2 p-3 my-4 mx-2 md:grid-cols-2 overflow-x-hidden">
      <div className="flex">
        <div className="md:flex md:flex-col gap-4 hidden ">
          <DemoImage />
          <DemoImage />
          <DemoImage />
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_2.png?v=1683259693&width=823"
            alt=""
            className=""
          />
        </div>
      </div>

      {/* product ratings and title */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Streetstyle Tees</h1>
          <div className="flex justify-center space-x-5">
            <div className="flex">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-3">
              <h4>4.53</h4>
              <sspan className="text-sm text-gray-500 text-center">
                (0 reviews)
              </sspan>
            </div>
          </div>
        </div>

        {/* product price */}
        <div className="flex mt-6 space-x-6 justify-start items-center">
          <h1 className="text-2xl font-semibold">$19.99 USD</h1>
          <s className="text-red-500">$35.99 USD</s>
          <p className="rounded-full bg-red-500 text-white text-sm p-1">
            save 44%
          </p>
        </div>

        {/* color */}
        <div className="flex mt-8">
          <span className="font-semibold">Color: </span>
          <span className="text-gray-800">Young Drake</span>
        </div>

        {/* styles */}
        <div className="flex space-x-5 mt-5">
          <DemoImage />
          <DemoImage />
          <DemoImage />
          <DemoImage />
        </div>
        {/* size */}

        <div className="font-semibold">
          Size: <span className="text-xl font-semibold text-center">XS</span>
        </div>
        <div className="mt-4 flex space-x-3 md:space-x-5">
          <div className="border border-black bg-black text-white rounded-lg p-2 font-semibold">
            XS
          </div>
          <div className="border border-black rounded-lg p-2 font-semibold">
            S
          </div>
          <div className="border border-black rounded-lg p-2 font-semibold">
            M
          </div>
          <div className="border border-black rounded-lg p-2 font-semibold">
            L
          </div>
          <div className="border border-black rounded-lg p-2 font-semibold">
            XL
          </div>
          <div className="border border-black rounded-lg p-2 font-semibold">
            XXL
          </div>
          <div className="border border-black rounded-lg p-2 font-semibold">
            XXXL
          </div>
        </div>

        {/* quantity */}
        <div className="mt-8 flex  space-x-9">
          <div className="flex border border-gray-500 justify-center items-center rounded-md">
            <button className="w-10 h-10 text-xl">-</button>
            <p className="text-xl">0</p>
            <button className="w-10 h-10 text-xl">+</button>
          </div>
          <button className="border-black p-3 border w-full">
            Add to cart
          </button>
        </div>

        <button className="w-full p-3 bg-black text-white mt-5">
          Buy it now
        </button>
        <div className="flex mt-5 justify-center items-center space-x-6">
          <div className="p-3 flex space-x-2 items-center">
            <QuestionMarkCircleIcon className="h-5 w-5 text-gray-500 text-center" />
            <span className="text-center">Ask a Question</span>
          </div>
          <div className="p-3 flex space-x-2 items-center">
            <ShareIcon className="h-5 w-5 text-gray-500 text-center" />
            <span className="text-center">Share</span>
          </div>
        </div>
        <hr className="w-full " />
      </div>
    </div>
  );
};

export default page;
