import React from 'react'

function Navbar() {
  return (
    <div className='bg-black '>
      <nav className=' flex justify-around p-1 items-center'>
        <div className='text-white font-bold text-2xl '>
            <span className='text-green-700 font-bold'>&lt;</span>
            Pass
            <span className='text-green-700 font-bold'>OP/&gt;</span>

        </div>
       
        <button className='flex gap-2 items-center text-white bg-green-900 px-2 py-1 rounded-full'>
          <img className='h-7 invert text-sm  ' src="src/assets/github.svg" alt="" />
          <span className='font-bold '>GITHUB</span>                                   
          </button>
      </nav>
    </div>
  )
}

export default Navbar
