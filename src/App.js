// src/App.js or src/pages/Home.js (wherever you want to use the WeatherReport)
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Footer from './components/Footer';
import FlashlightCursor from './components/FlashlightCursor';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Schedule from './pages/Schedule';
import Home from './pages/Home';
import CountdownTimer from './components/CountdownTimer';
import WeatherReport from './components/WeatherReport'; // Import the WeatherReport component

// Import the global CSS file
import './styles/global.css'; // Ensure this path is correct

// Define page transition settings
const pageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5 },
};

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
              <WeatherReport /> {/* Include WeatherReport here */}
            </motion.div>
          }
        />
        <Route
          path="/schedule"
          element={
            <motion.div {...pageTransition}>
              <Schedule />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const KumbhMelaDashboard = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    video.oncanplaythrough = () => {
      setVideoLoaded(true);
      console.log('Background video loaded successfully');
    };
    video.onerror = (e) => {
      console.error('Failed to load background video:', e);
    };
  }, []);

  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative" data-video-loaded={videoLoaded}>
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            style={{ opacity: videoLoaded ? 1 : 0 }} // Optional fade-in effect
          >
            <source src="/videos/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay content on top of the video */}
          <div className="relative z-10 flex-grow flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <FlashlightCursor />
              <AnimatedRoutes />
            </main>

            {/* Countdown Timer with text shadow */}
            <div className="mt-4 text-shadow">
              <CountdownTimer />
            </div>

            {/* Footer with optional text shadow */}
            <Footer className="text-shadow" />
          </div>
        </div>
      </Router>
    </DarkModeProvider>
  );
};

export default KumbhMelaDashboard;
