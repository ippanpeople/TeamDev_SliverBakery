import React from 'react'
import { ReactComponent as Logo } from './svg/cart.svg';

const header = () => {
  return (
    <header className="w-640 sm:w-768 md:w-1024 lg:w-1280 2xl:w-1536 h-120 fixed  bg-red-700 z-20">
        <div className="bg-white-700 absolute w-72 h-67 left-152 top-43">
            store pic
        </div>
        <Logo className="absolute left-80 right-6 top-71 bottom-18 bg-white" />
    </header>
  )
}

export default header