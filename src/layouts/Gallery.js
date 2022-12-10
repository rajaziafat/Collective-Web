import React from "react";

function Gallery() {
  return (
    <div>
      <div className="container-wrapper grid grid-cols-2 gap-3vw">
        <img src="images/grid-img-1.png" className="w-full" alt="" />
        <img src="images/grid-img-2.png" className="w-full" alt="" />
        <img src="images/grid-img-3.png" className="w-full col-span-2" alt="" />
      </div>
    </div>
  );
}

export default Gallery;
