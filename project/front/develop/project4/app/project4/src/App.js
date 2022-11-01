// npm install方法 : docker-compose run --rm node sh -c "npm install bootstrap@5"
import { useEffect, useState } from 'react';
import Footer from './footer';
import Header from './header';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App;
