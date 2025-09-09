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
          <img src={Foto} className="w-full" />
          <div className="shadow-layer-top"></div>
          <div className="absolute w-full h-[5vh] z-1 bottom-6 bg-gradient-to-t from-[#131416]/100 to-black/0"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end px-6 text-center mb-[4vh] z-100">
        <h1 className="text-3xl font-semibold tracking-wide bg-gradient-to-b z-100 from-white to-gray-500/40 bg-clip-text text-transparent mt-[2vh]">
          Development Team
        </h1>
        <p className="bg-gradient-to-l font text-center z-100 from-white to-gray-400/80 text-[2vh] mt-[2vh] bg-clip-text text-transparent">
          Alex Pinheiro, Antônio Rodrigues, Pedro Carreteiro, Pietra Ruiz, Samuel Miller
        </p>
      </div>

      <div className='relative w-full h-[25vh]'>
        <img className='absolute bottom-0' src={Grid} />
        <img className='absolute bottom-0 w-30 z-4' src={Circle} />
        <img className='absolute bottom-0 w-25 z-4' src={Logo} />
      </div>
    </>

  )
}

export default Team
