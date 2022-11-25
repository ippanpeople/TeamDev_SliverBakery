import React from 'react'
import black from './images/black.jpg';
import sample from './images/sample.png';

const swiper = () => {
  return (
    <>
      <div className='relative -mb-4 flex item-center space-x-4 overflow-auto pb-4 top-448 right-6 bottom-192 left-6'>
        <div className='relative shrink-0 overflow-hidden rounded-2xl border border-white border-opacity-10 text-[0px]'>
          <img src={sample} alt="sample" height="172" width="172" className='w-56 lazy block cursor-pointer rounded-2xl loaded' />
        </div>
        <div className='relative shrink-0 overflow-hidden rounded-2xl border border-white border-opacity-10 text-[0px]'>
          <img src={sample} alt="sample" className='w-56 lazy block cursor-pointer rounded-2xl loaded' />
        </div>
        <div className='relative shrink-0 overflow-hidden rounded-2xl border border-white border-opacity-10 text-[0px]'>
          <img src={sample} alt="sample" className='w-56 lazy block cursor-pointer rounded-2xl loaded' />
        </div>
      </div>
    </>
  )
}

export default swiper

{/*  */ }