import React, {useState} from 'react';
import './Home.css';
import NavBar from './components/home/NavBar'
import HomeDisplay from './components/home/HomeDisplay'
import About from './components/about/About'
import Notifications from './components/notifications/Notifications'
import Panel from './components/panel/Panel'

function Home({setShowLanding}) {
  const [currentView, setCurrentView] = useState('home');

  const onClickChangeView = (view) => {
    setCurrentView(view);
  }

  return (
    <div id="content">
      <NavBar
      setShowLanding={setShowLanding}
      onClickChangeView={onClickChangeView}
      />
      {currentView === 'home' && <HomeDisplay/>}
      {currentView === 'about' && <About/>}
      {currentView === 'panel' && <Panel/>}
      {currentView === 'notifications' && <Notifications/>}
    </div>
  );
}

export default Home;
