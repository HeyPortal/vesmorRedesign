import { AnimatePresence } from 'framer-motion';
import '../globals.css';
import Landing from './pages/Landing';
import Projects from './pages/Projects/Projects';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import About from './pages/About/About';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Teleop from './pages/Projects/ProjectPages/Teleop';
import LemonDrop from './pages/Projects/ProjectPages/LemonDrop';
import ResearchBuddy from './pages/Projects/ProjectPages/ResearchBuddy';
import SpaceBackground from './components/SpaceBackground';
import { LightboxProvider } from './context/LightboxContext';
import Lightbox from './components/Lightbox';


interface IActive{
  isActive: boolean;
}

//side bar will not be rendered on the landing page or error page
function App() {



  const location = useLocation();


  return (
    <LightboxProvider>
      <SpaceBackground />
      <Lightbox />
      <div className="relative z-10 w-full min-h-screen pointer-events-none">
        <Header />
        {/* Enable pointer events for interactive elements */}
        <div className="pointer-events-auto pt-24 px-4 md:px-20">
          <AnimatePresence mode='sync'>
            <Routes key={location.pathname} location={location}> 
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/rassor-teleoperation-console" element={<Teleop />} />
              <Route path="/projects/lemon-drop" element={<LemonDrop />} />
              <Route path="/projects/research-buddy" element={<ResearchBuddy />} />
              
              <Route path="/*" element={<Navigate to={"/404"}/>} />
              <Route path="/404" element={<ErrorPage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </LightboxProvider>
  );
}

export default App;
