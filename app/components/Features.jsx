import React from "react";
import {
  TruckIcon,
  BanknotesIcon,
  ChatBubbleOvalLeftIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
function Features() {
  return (
    <div className="flex items-center space-x-4 justify-center py-6">
      <div className="flex items-center space-x-4">
        <TruckIcon className="w-16 h-16" />{" "}
        <div>
          <div className="font-bold">Free Shipping</div>
          <div className="font-semibold">On all orders over $75.00</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <BanknotesIcon className="w-16 h-16" />{" "}
        <div>
          <div className="font-bold ">Money Guarantee</div>
          <div className="font-semibold">Within 10 days for an exchange</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ChatBubbleOvalLeftIcon className="w-16 h-16 " />{" "}
        <div>
          <div className="font-bold ">Online Support</div>
          <div className="font-semibold">24 hours a day, 7 days a week</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <CreditCardIcon className="w-16 h-16 " />{" "}
        <div>
          <div className="font-bold ">Flexible Payment</div>
          <div className="font-semibold">Pay with Multiple Ways</div>
        </div>
      </div>
    </div>
  );
}

export default Features;
