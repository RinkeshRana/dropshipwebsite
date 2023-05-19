
import React from "react";
import Link from "next/link";
=======
"use client";

import React, { useState } from "react";
import Image from "next/image";
function Product({
  image,
  setImage,
  productName,
  productPrice,
  productDiscount,
}) {
  // Use state to store the image source
  const [imageSrc, setImageSrc] = useState(image);

  // Define a function to change the image source on hover
  const handleHover = () => {
    // Use a ternary operator to toggle between two images
    setImageSrc(imageSrc === image ? "/71li-ujtlUL._AC_UX679_.jpg" : image);
  };


  return (

    <div className="w-72 bg-white drop-shadow-md rounded-lg ml-2 mx-auto p-3">
      <div className="relative">
        <span className="absolute left-3 top-4 w-10 h-5 text-white text-xs  bg-red-500 text-center rounded-full">
          -44%
        </span>
        <Link href="/product">
          <img
            src="https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1.png?v=1683259693&width=360"
            alt=""
          />
        </Link>
      </div>
      <div className="flex flex-col ml-2 gap-3">
        <h1 className="text-lg font-semibold uppercase">streestyle tees</h1>
        <div className="flex justify-between">
          <h1>$19.99 USD</h1>
          <s className="text-red-500">$19.99 USD</s>
        </div>
      </div>
      <div className="p-1">
        <button className="w-full bg-gray-800 text-white rounded-lg py-2">
          Add to cart
        </button>
      </div>

    <div class="flex flex-col justify-center bg-white shadow-lg rounded-lg p-4 hover:cursor-pointer hover:shadow-2xl ">
      <div class="relative h-80 items-center">
        {/* Add the onMouseEnter and onMouseLeave events to the Image component */}
        {/* Add a className to the Image component to apply the fade transition */}
        <Image
          src={imageSrc}
          alt="Product image"
          width={500}
          height={500}
          class="w-full h-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-500 fade"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        />
        <div class="absolute top-0 left-0 bg-red-500 text-white font-extrabold px-2 py-1 rounded-full text-xs">
          -20%
        </div>
      </div>
      <div class="mt-4 text-gray-800 text-base font-bold uppercase">
        Product name
      </div>
      <div class="mt-2 text-gray-600 font-medium">$19.99</div>

    </div>
  );
}

export default Product;

// Add a style tag to define the fade transition
<style jsx>{`
  .fade {
    opacity: 1;
    transition: opacity 0.5s;
  }
  .fade:hover {
    opacity: 0;
  }
`}</style>;
