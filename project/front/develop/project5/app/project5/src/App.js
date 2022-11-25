// npm install方法 : docker-compose run --rm node sh -c "npm install bootstrap@5"
// errorの場合: docker logs project名

// rafce: new_file
// 例) docker logs project5_node_1
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link
} from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Recommends from './recommends';
import Month from './this_month';
import Swiper from './swiper';
import News from './this_news';
import News_swiper from './news_swiper';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './home';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/'>
              <Recommends />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </>
  )
}

export default App;
