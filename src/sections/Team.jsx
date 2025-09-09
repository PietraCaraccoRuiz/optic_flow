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

          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 text-center mb-[4vh]">
            <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              Development Team
            </h1>
            <p className="mt-3 max-w-[40vh] text-white text-[1.5vh] sm:text-base drop-shadow-md">
              Alex Pinheiro, Antônio Rodrigues, Pedro Carreteiro, Pietra Ruiz, Samuel Miller
            </p>
          </div>
        </div>
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
