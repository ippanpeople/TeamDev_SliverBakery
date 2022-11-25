import React from 'react'
import sample  from './images/black.jpg';

const recommends = () => {
  return (
    <>
        <img src={sample} alt="sample" className='absolute w-327 h-200 left-6 top-175 rounded-2xl' />
        <p className='absolute w-168 h-9 not-italic text-24 text-white top-192 right-45 bottom-586 left-162 m-0 font-original'>台湾の味を再現</p>
        <p className='absolute w-120 h-15 not-italic font-extrabold text-10 text-white top-223 right-45 bottom-574 left-210 m-0 mt-1 font-original'>大阪難波の台湾火鍋専門店</p>
    </>
  )
}

export default recommends