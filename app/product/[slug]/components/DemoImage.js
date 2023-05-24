import React from "react";

function DemoImage({ src, alt }) {
  return (
    <div
      className="
    hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105 transform cursor-pointer
    "
    >
      <img src={src} alt={alt} className="w-20 h-20 border-black border" />
    </div>
  );
}

export default DemoImage;
