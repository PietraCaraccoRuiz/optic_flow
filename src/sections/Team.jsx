import React from 'react'

import Grid from "../assets/grid.svg"
import Circle from "../assets/circle2.svg"
import Logo from "../assets/65anos.svg"

const Team = () => {
  return (
    <div className='relative w-full h-[40vh]'>
      <img className='absolute bottom-0' src={Grid} />
      <img className='absolute bottom-0 w-30 z-4' src={Circle} />
      <img className='absolute bottom-0 w-25 z-4' src={Logo} />
      <div className='absolute bottom-0 w-full h-[200vh] bg-gradient-to-b from-[#131416]/60 to-[#131416]/0' src={Grid} />
      <div className='w-full h-full'></div>
    </div>
  )
}

export default Team
