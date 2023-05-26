import React from "react";

function Navigation() {
  return (
    <div className=" mt-28 p-2">
      <div className=" flex justify-center space-x-16">
        <div className="group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Collections
          </span>
        </div>
        <div className="group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Hoodie & T-Shirts
          </span>
        </div>
        <div className="group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Summer Collection
          </span>
        </div>
        <div className="group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Winter Collection
          </span>
        </div>
        <div className="group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Accessories
          </span>
        </div>
        <div className="group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Track Orders
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
