"use client";
import Link from "next/link";

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
    <div class="w-64 h-96 md:w-80 md:h-112 flex flex-col justify-center bg-white rounded-lg  hover:cursor-pointer">
      <div class="relative h-80 items-center">
        <Image
          src={imageSrc}
          alt="Product image"
          width={500}
          height={500}
          class="w-full h-full object-contain rounded-lg transform hover:scale-110 transition-transform duration-500 fade"
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
