import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import GallerySection from './components/GallerySection';
import UiUxSection from './components/UiUxSection';
import ContactSection from './components/ContactSection';
import { HERO_IMAGE } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [loaderComplete, setLoaderComplete] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  // Monitor Scroll positions to sync currently viewed section with corresponding Navbar indicators
  useEffect(() => {
    // Initial pre-loader simulation to accentuate high-end studio feel
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoaderComplete(true), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 60);

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'illustrations', 'uiux', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.45; // trigger offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg text-off-white font-sans selection:bg-crimson selection:text-black">
      
      {/* Cinematic Studio Preloader Screen */}
      {!loaderComplete && (
        <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
          {/* Subtle noise and tech grids on loader */}
          <div className="absolute inset-0 pointer-events-none tech-grid opacity-[0.2]" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(255,30,30,0.02)_1px,transparent_0)] bg-[size:10px_10px]" />
          
          <div className="max-w-md w-full relative z-10 flex flex-col items-center">
            {/* Pulsing loading wing icon */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-16 h-16 fill-none stroke-current text-white mb-8 animate-pulse-slow"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDuration: '1.5s' }}
            >
              <path d="M25,25 L25,75 L50,40 L50,75 L75,25" className="stroke-white" />
              <path d="M15,40 C5,45 10,60 25,50" className="stroke-crimson" />
              <path d="M85,35 C95,40 90,55 75,45" className="stroke-crimson" />
              <circle cx="50" cy="15" r="3" className="fill-crimson stroke-none" />
            </svg>

            <div className="flex flex-col items-center mb-6">
              <span className="font-display text-2xl tracking-[0.3em] font-black text-white uppercase">
                NAVAMEY
              </span>
              <span className="font-mono text-[9px] text-gray-500 tracking-[0.25em] uppercase mt-1">
                ART_DIRECTION_SYS // BOOTSTAGE_v4.20
              </span>
            </div>

            {/* Simulated progress bars */}
            <div className="w-48 h-[2px] bg-[#111] rounded-full overflow-hidden mb-2 border border-white/5">
              <div 
                className="h-full bg-crimson transition-all duration-100 ease-out shadow-[0_0_10px_#FF1E1E]" 
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            <span className="font-mono text-[9px] text-crimson animate-pulse tracking-widest">
              LAUNCH_COHERENCE_LINK ... {loadingProgress}%
            </span>
          </div>

          <div className="absolute bottom-8 font-mono text-[8px] text-gray-600">
            SYSTEM_REGISTERED_TO_INGRESS_PORT_3000 // UTC_2026
          </div>
        </div>
      )}

      {/* 1. Atmospheric Ambient Noise and Grain Layers */}
      <NoiseOverlay />

      {/* 2. Interactive Trail Mouse Cursor */}
      <CustomCursor />

      {/* 3. Sticky frosted navbar header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 4. Complete Immersive Layout sections */}
      <main className="relative z-30">
        
        {/* Home Block */}
        <HeroSection heroImage={HERO_IMAGE} />

        {/* About Block */}
        <AboutSection />

        {/* Projects Block */}
        <ProjectsSection />

        {/* Illustrations Block */}
        <GallerySection />

        {/* UI/UX Active Cockpit Terminal */}
        <UiUxSection />

        {/* Contact Block + Extreme Universe ending statement */}
        <ContactSection />

      </main>

    </div>
  );
}
