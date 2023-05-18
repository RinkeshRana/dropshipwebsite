import React from "react";

function Product() {
  return (
    <div class="w-72 bg-white drop-shadow-md rounded-lg">
      <img
        class="object-cover rounded-tl-lg rounded-tr-lg transform hover:scale-110 transition duration-300"
        src="https://www.kindacode.com/wp-content/uploads/2022/06/computer-example.jpg"
      />
      <div class="px-5 py-3 space-y-2">
        <h3 class="text-lg font-semibold">Super Computer 9064GB RAM</h3>
        <div class="space-x-2">
          <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
            Free Ship
          </span>
          <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
            7 Day Return
          </span>
        </div>
        <p class="space-x-2">
          <span class="text-2xl font-semibold">$600</span>
          <span class="text-sm line-through text-gray-500">$1000</span>
          <span class="text-sm text-red-700">40% off</span>
        </p>
        <div class="flex justify-between items-center pt-3 pb-2">
          <a
            href="#"
            class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
          >
            {" "}
            Add to Cart
          </a>
          <a
            href="#"
            title="Add to Favorites"
            class="text-2xl text-gray-300 hover:text-red-500 duration-300"
          >
            ♥
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
