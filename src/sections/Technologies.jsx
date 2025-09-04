import React from "react";
import ItemTech from "../components/ItemTech";

const Technologies = () => {
  return (
    <div className="relative w-full h-10 z-10 flex justify-center items-center">
      <div className="w-82 h-28 mt-4 rounded-2xl border-light z-1 flex flex-col justify-center items-center">
        <h1 className="text-1xl bg-gradient-to-b from-white to-gray-400/50 bg-clip-text text-transparent z-2">
          Technologies & Tools
        </h1>
        <div  className="flex  gap-2">
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
