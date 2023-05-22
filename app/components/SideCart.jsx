import React from "react";
import { XIcon } from "@heroicons/react/outline";
import CartItem from "./CartItem";
import { TicketIcon } from "@heroicons/react/outline";
function SideCart(props) {
  const sendData = () => {
    props.cartStatus(false);
  };
  return (
    <div className="h-screen p-4 overflow-auto flex flex-col scrollbar">
      <div>
        <div className="flex justify-between items-center p-4 sticky top-0 bg-white/80 backdrop-blur-2xl shadow ">
          <h1 className="md:text-lg">Your Cart</h1>
          <button onClick={sendData}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex-grow"></div>
      <div className="mt-4">
        <div className="flex justify-center items-center p-4 bg-white/80 backdrop-blur-2xl shadow space-x-5">
          <TicketIcon className="w-6 h-6" />
          <div>Coupan</div>
        </div>
        <div className="flex justify-between p-4 text-black">
          <h1 className="md:text-lg">Subtotal</h1>
          <h1 className="md:text-lg">$ 100</h1>
        </div>

        <div className="flex justify-center items-center p-4 bg-black text-white ">
          <div>Checkout</div>
        </div>
        <div className="flex justify-center items-center p-4 underline underline-offset-3">
          View Cart
        </div>
      </div>
    </div>
  );
}

export default SideCart;
