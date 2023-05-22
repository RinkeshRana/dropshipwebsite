import React from "react";

function CartItem() {
  return (
    <div class="flex py-6">
      <div class="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
          alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
          class="h-full w-full object-cover object-center"
        />
      </div>

      <div class="ml-4 flex flex-1 flex-col">
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">Medium Stuff Satchel</a>
            </h3>
            <p class="ml-4">$32.00</p>
          </div>
          <p class="mt-1 text-sm text-gray-500">Blue</p>
        </div>
        <div class="flex flex-1 items-end justify-between text-sm">
          <p class="text-gray-500">Qty 1</p>

          <div class="flex">
            <button
              type="button"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
