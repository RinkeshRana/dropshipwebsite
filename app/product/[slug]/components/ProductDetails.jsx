"use client";

import React, { useState } from "react";
import {
  StarIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import DemoImage from "./DemoImage";
import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import ProductOptions from "./ProductOptions";

function ProductDetails({ product }) {
  const [productCount, setProductCount] = useState(1);

  return (
    <div className="bg-white mt-20 md:mt-0">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start ">
          {/* <!-- Image gallery --> */}
          <div className="flex flex-col-reverse ">
            {/* <!-- Image selector --> */}
            <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div
                className="flex space-x-4 overflow-x-auto sm:overflow-visible"
                aria-orientation="horizontal"
                role="tablist"
              >
                {product.images.map((image, index) => (
                  <button
                    id="tabs-1-tab-1"
                    className="relative h-36 w-36 bg-white rounded-md flex items-center justify-center text-sm font-medium flex-shrink-0 uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 ring-black"
                    aria-controls="tabs-1-panel-1"
                    role="tab"
                    type="button"
                  >
                    <span className="sr-only"> Angled view </span>
                    <span className="absolute inset-0 rounded-md overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-center object-cover inline-block"
                      />
                    </span>
                    {/* <!-- Selected: "ring-black", Not Selected: "ring-transparent" --> */}
                    <span
                      className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                      aria-hidden="true"
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full aspect-w-1 aspect-h-1">
              {/* <!-- Tab panel, show/hide based on tab state. --> */}
              <div
                id="tabs-1-panel-1"
                aria-labelledby="tabs-1-tab-1"
                role="tabpanel"
                tabIndex="0"
              >
                <img
                  src={product.images[0]}
                  alt="Angled front view with bag zipped and handles upright."
                  className="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </div>

              {/* <!-- More images... --> */}
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price}</p>
            </div>

            {/* <!-- Reviews --> */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {/* <!--
                  Heroicon name: solid/star
  
                  Active: "text-indigo-500", Inactive: "text-gray-300"
                --> */}
                  <StarIcon className="h-5 w-5 text-indigo-500" />
                  <StarIcon className="h-5 w-5 text-indigo-500" />
                  <StarIcon className="h-5 w-5 text-indigo-500" />
                  <StarIcon className="h-5 w-5 text-indigo-500" />
                  <StarIcon className="h-5 w-5 text-gray-300" />
                </div>
                <p className="sr-only">4 out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            {/* product variety */}

            <ProductOptions options={product.options} />

            <h3 className="text-sm text-gray-600 mt-6 ">Quantity</h3>
            <div className="flex sm:flex-col1">
              {/* quantity with increment and decrement */}
              <div className="flex space-x-2 md:space-x-5">
                <div className="flex border border-gray-300 justify-center items-center rounded-md">
                  <button
                    className="w-10 h-10 text-xl md:mx-2"
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
                    className="w-10 h-10 text-xl md:mx-2"
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
                  type="submit"
                  className=" flex-1 rounded-md py-3 md:px-10 px-4 flex items-center justify-center text-sm md:text-base font-medium hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black sm:w-full border-black border-2 duration-500 hover:ring-2 hover:ring-black "
                >
                  Add to cart
                </button>
                {/* <button
                  type="button"
                  className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  {/* <!-- Heroicon name: outline/heart --> */}
                {/* <HeartIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Add to favorites</span>
                </button>  */}
              </div>
            </div>
            {/* buy it now */}
            <div className="flex space-x-9 mt-6">
              <button
                type="submit"
                className="max-w-xs flex-1 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black sm:w-full border-black border-2 bg-black text-white hover:ring-2 hover:ring-black duration-500 "
              >
                Buy it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
