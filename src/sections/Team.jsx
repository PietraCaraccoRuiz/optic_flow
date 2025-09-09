import React from 'react'

import Grid from "../assets/grid.svg"
import Circle from "../assets/circle2.svg"
import Logo from "../assets/65anos.svg"
import Foto from "../assets/team.jfif"

const Team = () => {
  return (
    <>
      <div className="h-fit w-full flex justify-center mt-[15vh] relative">
      <div className="w-full h-full relative overflow-hidden">
        <img 
          src={Foto}
          className="w-full object-cover" 
          alt="Imagem com sombras"
        />
        
        {/* Shadow layer top */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10"></div>
        
        {/* Shadow layer bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/60 via-black/50 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
      {/* Content section */}
      <div className="flex flex-col items-center justify-end px-6 text-center mb-[4vh] mt-[6vh] relative z-20">
        <div className="relative">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide bg-gradient-to-b from-white via-white to-gray-400/60 bg-clip-text text-transparent">
            Development Team
          </h1>
          {/* Decorative line under title */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        </div>
        
        <p className="bg-gradient-to-r from-white via-white to-gray-400/80 md:text-xl mt-[4vh] bg-clip-text text-transparent leading-relaxed max-w-4xl">
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
