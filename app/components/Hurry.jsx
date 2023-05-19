import React from "react";

function Hurry() {
  return (
    <div className="bg-[#c02b30] min-h-[500px] text-white font-semibold">
      <div className="text-center text-xl md:text-4xl ">
        <div className="pt-10 ">Hurry up! Sale ends in</div>
        <div>
          {/* show timer in days hrs mins and secs  */}
          <div className="flex justify-center space-x-5 text-sm md:text-4xl mt-20">
            <div className="">
              00 <div className="">Days</div>
            </div>
            :
            <div className="">
              00 <div className="">Hrs</div>
            </div>
            :
            <div className="">
              00 <div className="">Mins</div>
            </div>
            :
            <div className="">
              00 <div className="">Secs</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-white px-3 py-2 text-sm md:text-md md:px-5 md:py-3 rounded-lg text-black">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hurry;
