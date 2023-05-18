import React from "react";

function Product() {
  return (
    <div class="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4">
      <div class="relative w-64 h-64">
        <img
          src="71li-ujtlUL._AC_UX679_.jpg"
          alt="Product image"
          class="w-full h-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-300"
        />
        <div class="absolute top-0 left-0 bg-red-500 text-white font-bold px-2 py-1 rounded-tr-lg">
          20% OFF
        </div>
      </div>
      <div class="mt-4 text-gray-800 text-xl font-semibold">Product name</div>
      <div class="mt-2 text-gray-600 text-lg">$19.99</div>
    </div>
  );
}

export default Product;
