import React from 'react'
import { ReactComponent as Gift } from './svg/gift.svg';
import { ReactComponent as Home } from './svg/house-door.svg';
import { ReactComponent as Person } from './svg/person-circle.svg';
import { ReactComponent as Menu } from './svg/tools.svg';

const footer = () => {
  return (
    <footer className='absolute w-375 h-20 left-0 top-732 bg-red-700'>
      <a href="/home" className='no-underline'>
        <Home className='absolute left-45 right-304 top-19 bottom-37 text-black' />
        <p className='absolute w-30 h-15 left-43 top-52 font-original not-italic font-extrabold text-10 text-black'>Home</p>
      </a>
      <a href="/menu" className='no-underline'>
        <Menu className='absolute left-132 right-218 top-5 bottom-38 text-black'/>
        <p className='absolute w-10 h-15 left-125 top-52 font-original not-italic font-extrabold text-10 text-black'>Menu</p>
      </a>
      <a href="/coupon" className='no-underline'>
        <Gift className='absolute left-218 right-132 top-5 bottom-37 text-black'/>
        <p className='absolute w-10 h-15 left-211 top-52 font-original not-italic font-extrabold text-10 text-black'>Corpon</p>
      </a>
      <a href="/my-page" className='no-underline'>
        <Person className='absolute left-304 right-45 top-5 bottom-36 text-black'/>
        <p className='absolute w-50 h-15 left-292 top-52 font-original not-italic font-extrabold text-10 text-black'>MyPage</p>
      </a>
    </footer>
  )
}

export default footer