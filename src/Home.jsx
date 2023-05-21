import React from 'react';
import './Home.css';
import NavBar from './components/home/NavBar'
import HomeDisplay from './components/home/HomeDisplay'
import About from './components/about/About'


function Home() {
  const [currentView, setCurrentView] = useSate('home');

  const onClickChangeView = () => {
    setCurrentView(view);
  }
  

  return (
    <div id="content">
      <NavBar/>
      <HomeDisplay/>
      <About/>

    </div>
  );
}

export default Home;
