import React from 'react';
import './Home.css';
import NavBar from './components/home/NavBar'
import HomeDisplay from './components/home/HomeDisplay'

function Home() {
  return (
    <div id="content">
      <NavBar/>
      <HomeDisplay/>
    </div>
  );
}

export default Home;
