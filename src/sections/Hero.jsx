import React from "react";
import Grid from "../components/Grid";
import "../App.css";
import Circles from "../assets/circles.svg";
import Circle from "../assets/circle.svg";
import Computador from "../assets/mockup.svg";
import Logo from "../assets/logo.svg";
import Camera from "../assets/camera.svg";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] overflow-x-hidden">
      <div className="flex relative w-full">
        <div className="absolute bg-[#19E99E] w-100 h-100 rounded-full blur-[200px] -left-100 md:-left-50 -top-70"></div>
        <div className="absolute bg-[#18363F] w-100 h-100 rounded-full blur-[150px] -right-80 md:-right-10 -top-40"></div>
        <div className="absolute left-10 w-0.5 h-60 bg-gradient-to-b from-white/50  to-white/10 clip-pontuda"></div>
        <div className="absolute left-10 top-30 w-0.5 h-15 bg-gradient-to-b from-[#19E99E]/10  to-[#19E99E]/100 cima"></div>
        <div className="absolute right-12 top-15 w-0.5 h-15 bg-gradient-to-b from-[#3BD0FF]/100  to-[#3BD0FF]/10 baixo"></div>
        <div className="absolute right-12 w-0.5 h-70 bg-gradient-to-b from-white/50  to-white/10 clip-pontuda"></div>
        <div className="flex absolute w-full justify-center top-20">
          <div className="absolute flex gap-2 items-center">
            <img src={Logo} className="w-10" />
            <h1 className="text-2xl bg-gradient-to-b from-white to-gray-400/50 bg-clip-text text-transparent">
              Safety
              <span className="font-semibold">Sight</span>
            </h1>
          </div>
          <img
            className="absolute top-20 w-60 flex justify-center z-2"
            src={Computador}
          />
          <div className="absolute top-50 bg-black/80 rounded-full w-40 h-10 z-1 blur-[20px]"></div>
          <img
            className="absolute top-52 w-80 flex justify-center"
            src={Circles}
          />
        </div>
      </div>
      <Grid />
      <div className="flex relative w-full top-30 z-1">
        <img src={Circle} className="absolute w-40 right-0 -top-10" />
        <img src={Camera} className="absolute w-40 left-0 z-2" />
        <div className="absolute w-65 h-30 mt-4 rounded-2xl border-light z-1 flex flex-col justify-center items-center left-18 gap-1">
          <h1 className="text-white text-[1.9vh] pl-10 font-semibold z-2">Overview</h1>
           <p className="bg-gradient-to-l from-white to-gray-800/80 text-[1.2vh] pl-15 pr-5 text-justify bg-clip-text text-transparent z-2">
            <span className=" text-white">SafetySight</span> is an artificial intelligence system developed to
            enhance safety in industrial environments. Using factory-installed
            cameras and computer vision algorithms, the AI ​​performs real-time
            verification of employees' correct use of Personal Protective
            Equipment (PPE).{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
