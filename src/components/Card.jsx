import React from "react";

const Card = ({ top, shadow, z, rotate, translateX, translateY }) => {
  return (
    <>
      <div
        className="w-[18.6vh] h-[26vh] card-gradient flex justify-center rounded-[17px]"
        style={{
        top: `${top}px`,
        boxShadow: shadow ? shadow : "none",
        zIndex: z,
        transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
        transition: "transform 0.3s",
      }}
      >
        <div className="absolute h-[2px] w-10 bg-[#2BFFFF] blur-[1px] clip-pontuda"></div>
        <div className="absolute h-[1.5px] w-18 bg-[#2BFFFF] top-[1px] blur-[2px] clip-pontuda"></div>
        <div className="w-[18.4vh] h-[25.5vh] bg-white rounded-2xl card-radial mt-0.5"></div>
      </div>
    </>
  );
};

export default Card;

// drop shdow 41A682 80¨% blur-200
