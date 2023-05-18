import React from "react";

function Product() {
  return (
    <div className="w-72 bg-white drop-shadow-md rounded-lg ml-2 mx-auto p-3">
      <div className="relative">
        <span className="absolute left-3 top-4 w-10 h-5 text-white text-xs  bg-red-500 text-center rounded-full">
          -44%
        </span>
        <img
          src="https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1.png?v=1683259693&width=360"
          alt=""
        />
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
    </div>
  );
}

export default Product;
