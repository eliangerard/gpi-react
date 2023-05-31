// Home.jsx

import React, { useEffect, useState } from 'react';
import './Home.css';
import NavBar from './components/home/NavBar';
import HomeDisplay from './components/home/HomeDisplay';
import About from './components/about/About';
import Admin from './Admin';
import Panel from './components/panel/Panel';
import Profile from './components/home/Profile';
import { MobileNavBar } from './components/home/MobileNavBar';
import { getProfile } from './helpers/js/getProfile';

function Home({ setShowLanding }) {
  const [currentView, setCurrentView] = useState('home');
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    const { result } = await getProfile(localStorage.getItem('id'));
    console.log(result);
    setProfile(result);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const changeView = (view) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Agregar animación suave
    });
    setCurrentView(view);
  };

  return (
    <div id="content">
      <MobileNavBar />
      <NavBar
        setShowLanding={setShowLanding}
        changeView={changeView}
        profile={profile}
        fetchProfile={fetchProfile}
      />
      {currentView === 'home' && <HomeDisplay />}
      {currentView === 'about' && <About />}
      {currentView === 'panel' && <Panel />}
      {currentView === 'admin' && <Admin />}
      {currentView === 'profile' && <Profile />}
    </div>
  );
}

export default Home;
