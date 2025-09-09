import React from 'react'

import Grid from "../assets/grid.svg"
import Circle from "../assets/circle2.svg"
import Logo from "../assets/65anos.svg"
import Foto from "../assets/team.jfif"

const Team = () => {
  return (
    <>
      <div className="h-[30vh] w-full flex justify-center mt-[15vh] relative">
        <div className="w-full h-full relative overflow-hidden">
          <img src={Foto} className="w-full h-full object-cover" />
          <div className="shadow-layer-top"></div>
          <div className="shadow-layer-bottom"></div>
        </div>
        <div className="absolute w-full h-[20vh] z-1 top-30 bg-gradient-to-t from-black/100 to-black/0"></div>
      </div>
      <div className="flex flex-col items-center justify-end px-6 text-center mb-[4vh] z-100">
            <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-b z-100 from-white to-gray-500/40 bg-clip-text text-transparent mt-[2vh]">
              Development Team
            </h1>
            <p className="bg-gradient-to-l z-100 from-white to-gray-400/80 text-[1.2vh] mt-[1vh] text-justify bg-clip-text text-transparent z-2">
              Alex Pinheiro, Antônio Rodrigues, Pedro Carreteiro, Pietra Ruiz, Samuel Miller
            </p>
          </div>

      <div className='relative w-full h-[35vh]'>
        <img className='absolute bottom-0' src={Grid} />
        <img className='absolute bottom-0 w-30 z-4' src={Circle} />
        <img className='absolute bottom-0 w-25 z-4' src={Logo} />
        <div className='absolute bottom-0 w-full h-[200vh] bg-gradient-to-b from-[#131416]/60 to-[#131416]/0' src={Grid} />
      </div>
    </>

  )
}

export default Team
