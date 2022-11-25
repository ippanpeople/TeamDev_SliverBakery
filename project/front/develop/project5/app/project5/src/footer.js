import React from 'react'
import { ReactComponent as Gift } from './svg/gift.svg';
import { ReactComponent as Home } from './svg/house-door.svg';
import { ReactComponent as Person } from './svg/person-circle.svg';
import { ReactComponent as Menu } from './svg/tools.svg';

const footer = () => {
  return (
    <footer className='absolute w-375 h-20 left-0 top-732 bg-red-700'>
      {/* <div id='category'> */}
        <Home className='absolute left-45 right-304 top-19 bottom-37'/>
        <p className='absolute w-30 h-15 left-43 top-52 font-original not-italic font-extrabold text-10 text-black'>Home</p>
        <Menu className='absolute left-132 right-218 top-5 bottom-38'/>
        <p className='absolute w-10 h-15 left-125 top-52 font-original not-italic font-extrabold text-10 text-black'>Menu</p>
        <Gift className='absolute left-218 right-132 top-5 bottom-37'/>
        <p className='absolute w-10 h-15 left-211 top-52 font-original not-italic font-extrabold text-10 text-black'>Corpon</p>
        <Person className='absolute left-304 right-45 top-5 bottom-36'/>
        <p className='absolute w-50 h-15 left-292 top-52 font-original not-italic font-extrabold text-10 text-black'>MyPage</p>
      {/* </div> */}
    </footer>
  )
}

export default footer