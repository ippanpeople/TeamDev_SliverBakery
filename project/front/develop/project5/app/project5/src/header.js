import React from 'react'
import { ReactComponent as Logo } from './svg/cart.svg';

const header = () => {
  return (
    <header className="w-375 h-120 absolute bg-red-700">
        <div className="bg-white-700 absolute w-72 h-67 left-152 top-43">
            store pic
        </div>
        <Logo className="absolute left-80 right-6 top-71 bottom-18 bg-white" />
    </header>
  )
}

export default header