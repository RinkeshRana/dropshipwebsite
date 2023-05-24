"use client";

import React, { useState } from "react";
import {
  StarIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import DemoImage from "./DemoImage";
import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";

function ProductDetails({ product }) {
  const [productCount, setProductCount] = useState(1);

  return (
    <div class="bg-white mt-20 md:mt-0">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start ">
          {/* <!-- Image gallery --> */}
          <div class="flex flex-col-reverse ">
            {/* <!-- Image selector --> */}
            <div class="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div
                class="flex space-x-4"
                aria-orientation="horizontal"
                role="tablist"
              >
                {product.images.map((image, index) => (
                  <button
                    id="tabs-1-tab-1"
                    class="relative h-24 w-36 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 ring-black"
                    aria-controls="tabs-1-panel-1"
                    role="tab"
                    type="button"
                  >
                    <span class="sr-only"> Angled view </span>
                    <span class="absolute inset-0 rounded-md overflow-hidden">
                      <img
                        src={image}
                        alt=""
                        class="w-full h-full object-center object-cover"
                      />
                    </span>
                    {/* <!-- Selected: "ring-black", Not Selected: "ring-transparent" --> */}
                    <span
                      class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                      aria-hidden="true"
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            <div class="w-full aspect-w-1 aspect-h-1">
              {/* <!-- Tab panel, show/hide based on tab state. --> */}
              <div
                id="tabs-1-panel-1"
                aria-labelledby="tabs-1-tab-1"
                role="tabpanel"
                tabindex="0"
              >
                <img
                  src={product.images[0]}
                  alt="Angled front view with bag zipped and handles upright."
                  class="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </div>

              {/* <!-- More images... --> */}
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.title}
            </h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">${product.price}</p>
            </div>

            {/* <!-- Reviews --> */}
            <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  {/* <!--
                  Heroicon name: solid/star
  
                  Active: "text-indigo-500", Inactive: "text-gray-300"
                --> */}
                  <StarIcon class="h-5 w-5 text-indigo-500" />
                  <StarIcon class="h-5 w-5 text-indigo-500" />
                  <StarIcon class="h-5 w-5 text-indigo-500" />
                  <StarIcon class="h-5 w-5 text-indigo-500" />
                  <StarIcon class="h-5 w-5 text-gray-300" />
                </div>
                <p class="sr-only">4 out of 5 stars</p>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>

              <div class="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            {/* <!-- Colors --> */}
            <div className="my-2">
              <h3 class="text-sm text-gray-600">Color</h3>

              <legend class="sr-only">Choose a color</legend>
              <div class="flex items-center space-x-3">
                {/* <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  --> */}
                {product.tailwindColors.map((color) => (
                  <label
                    key={color}
                    class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500"
                  >
                    <input
                      type="radio"
                      name="color-choice"
                      value={color}
                      class="sr-only"
                      aria-labelledby={`${color}-label`}
                    />
                    <p id={`${color}-label`} class="sr-only">
                      {color}
                    </p>
                    <span
                      aria-hidden="true"
                      class={`h-8 w-8 ${color} border border-black border-opacity-10 rounded-full`}
                    ></span>
                  </label>
                ))}
              </div>
            </div>

            {/* size */}

            <div className="my-4">
              <h3 class="text-sm text-gray-600">Size</h3>

              <legend class="sr-only">Choose a size</legend>

              <div class="flex space-x-4 ">
                {/* <!-- Active & Hovered: "ring ring-offset-1", Not Active: "ring-2" --> */}
                {product.sizes.map((size) => (
                  <label
                    key={size}
                    class="-m-0.5 relative  rounded-md flex items-center justify-center cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-black bg-opacity-10 ring-gray-500 p-4  md:text-md"
                  >
                    <input
                      type="radio"
                      name="size-choice"
                      value={size}
                      class="sr-only"
                      aria-labelledby={`${size}-label`}
                    />
                    <p id={`${size}-label`}>{size}</p>
                  </label>
                ))}
              </div>
            </div>

            <h3 class="text-sm text-gray-600 mt-6 ">Quantity</h3>
            <div class="flex sm:flex-col1">
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
                  class=" flex-1 rounded-md py-3 md:px-10 px-4 flex items-center justify-center text-sm md:text-base font-medium hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black sm:w-full border-black border-2 duration-500 hover:ring-2 hover:ring-black "
                >
                  Add to cart
                </button>
                {/* <button
                  type="button"
                  class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  {/* <!-- Heroicon name: outline/heart --> */}
                {/* <HeartIcon class="h-6 w-6" aria-hidden="true" />
                  <span class="sr-only">Add to favorites</span>
                </button>  */}
              </div>
            </div>
            {/* buy it now */}
            <div className="flex space-x-9 mt-6">
              <button
                type="submit"
                class="max-w-xs flex-1 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black sm:w-full border-black border-2 bg-black text-white hover:ring-2 hover:ring-black duration-500 "
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
