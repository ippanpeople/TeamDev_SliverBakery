import React from 'react'
import Footer from './footer';
import Header from './header';
import Recommends from './recommends';
import Month from './this_month';
import Swiper from './swiper';
import News from './this_news';
import News_swiper from './news_swiper';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const home = () => {
  return (
    <div className='z-0'>
        <Header /> 
        
        <div class="flex flex-col">  
            <div><Recommends /></div>
            <div><Month /></div>
            <div><Swiper /></div>
            <div><News /></div>
            <div><News_swiper /></div>
        </div>
        
        <Footer />
    </div>
  )
}

export default home;