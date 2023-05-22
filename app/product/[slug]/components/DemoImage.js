import React from "react";

function DemoImage({ imgUrl }) {
  return (
    <div>
      <img src={imgUrl} alt="demo" className="w-20 h-20 border-black border" />
    </div>
  );
}

export default DemoImage;
