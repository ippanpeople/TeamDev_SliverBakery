import React from 'react'
import { ReactComponent as Gift } from './svg/gift.svg';
import { ReactComponent as Home } from './svg/house-door.svg';
import { ReactComponent as Person } from './svg/person-circle.svg';
import { ReactComponent as Menu } from './svg/tools.svg';

const footer = () => {
  return (
    <footer id='footer'>
      <div id='category'>
        <Home id="home"/>
        <p id='home_text'>Home</p>
        <Menu id="menu"/>
        <p id="menu_text">Menu</p>
        <Gift id="gift"/>
        <p id="gift_text">Corpon</p>
        <Person id="person"/>
        <p id="person_text">MyPage</p>
      </div>
    </footer>
  )
}

export default footer