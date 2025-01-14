import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex w-full text-white p-2 md:p-4 justify-between'>
        <div className='text-3xl item-center font-bold text-[#FF014F]'>Abhi</div>
        <ul className='gap-4 hidden md:flex font-semibold cursor-pointer'>
          <li className='m-2 font-semibold  text-[#FF014F]'>Home</li>
          <li className='m-2 font-semibold'>About</li>
          <li className='m-2 font-semibold'>Skills</li>
          <li className='m-2 font-semibold'>Projects</li>
        </ul>
        <div className='hidden md:block hover:bg-[#1F2226] px-3  shadow-lg bg-[#292b2e] text-white font-bold pt-2 cursor-pointer rounded-xl'>Contact Us</div>
        <div className='md:hidden cursor-pointer'>
          <a className='text-4xl font-semibold'>&#8801;</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar