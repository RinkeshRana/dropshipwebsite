"use client";

import React, { useState } from "react";
import {
  StarIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import DemoImage from "./components/DemoImage";
const page = () => {
  const [productCount, setProductCount] = useState(1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-3 my-4 mx-2">
      <div className="flex">
        <img
          src="https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1_2000x2000.png?v=1683259693"
          alt=""
          className="w-auto h-auto"
        />
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
            <h4>4.53</h4>
            <h1 className="text-sm text-gray-500">(0 reviews)</h1>
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
          <DemoImage
            imgUrl={
              "https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1_100x.png?v=1683259693"
            }
          />
          <DemoImage
            imgUrl={
              "https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1_100x.png?v=1683259693"
            }
          />
          <DemoImage
            imgUrl={
              "https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1_100x.png?v=1683259693"
            }
          />
        </div>

        {/* size */}
        <div className="font-semibold mt-4">
          Size: <span className="text-xl font-semibold text-center">XS</span>
        </div>
        <div className="mt-4 flex space-x-5 flex-wrap ">
          <div className="border border-black rounded-lg p-2 font-semibold bg-black text-white">
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
        <div className="mt-8 flex space-x-9">
          <div className="flex border border-gray-500 justify-center items-center rounded-md">
            <button
              className="w-10 h-10 text-xl"
              onClick={() => {
                if (productCount > 1) {
                  setProductCount(productCount - 1);
                } else {
                  setProductCount(1);
                }
              }}
            >
              -
            </button>
            <p className="text-xl">{productCount}</p>
            <button
              className="w-10 h-10 text-xl"
              onClick={() => {
                if (productCount < 10) {
                  setProductCount(productCount + 1);
                }
              }}
            >
              +
            </button>
          </div>
          <button
            className="border-black p-3 border w-full rounded-md
          hover:bg-black hover:text-white transition duration-300 ease-in-out
          "
          >
            Add to cart
          </button>
        </div>

        <button className="w-full p-3 bg-black text-white mt-5 rounded-md">
          Buy it now
        </button>
        <div className="flex mt-5">
          <div className="p-3 flex space-x-2 items-center">
            <QuestionMarkCircleIcon className="h-5 w-5 text-gray-500 text-center" />
            <span className="text-center">Ask a Question</span>
          </div>
          <div className="p-3 flex space-x-2 items-center">
            <ShareIcon className="h-5 w-5 text-gray-500 text-center" />
            <span className="text-center">Share</span>
          </div>
        </div>

        <hr className="w-full" />
      </div>
    </div>
  );
};

export default page;
