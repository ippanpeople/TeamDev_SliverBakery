import React from 'react'
import black from './images/black.jpg';
import sample from './images/sample.png';

const swiper = () => {
  return (
    <>
      <div class="flex flex-nowrap">
      
        <div class="w-172 h-172">
          <img src={sample}  alt="sample" className='w-172 h-172 lazy block cursor-pointer rounded-2xl loaded' />
        </div>

        <div>
          <img src={sample} alt="sample" className='w-172 h-172 lazy block cursor-pointer rounded-2xl loaded' />
        </div>

        <div>
          <img src={sample}  alt="sample" className='w-172 h-172 lazy block cursor-pointer rounded-2xl loaded' />
        </div>
        

      </div>
    </>
  )
}

export default swiper

{/*  */ }