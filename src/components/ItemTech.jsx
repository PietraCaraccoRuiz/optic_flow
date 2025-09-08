import React from "react";

const ItemTech = ({ img }) => {
  return (
    <div className="w-13 h-13 mt-4 rounded-[5px] item-tech bg-white z-1 flex flex-col justify-center items-center">
      <img src={img} className="w-8 h-8" />
    </div>
  );
};

export default ItemTech;
