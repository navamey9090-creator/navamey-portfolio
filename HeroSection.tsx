import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Layers, Crosshair, Star } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

export default function HeroSection({ heroImage }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // range -0.5 to 0.5
      const y = (e.clientY - top) / height - 0.5; // range -0.5 to 0.5
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax multipliers for subtle layered floating movement
  const depth1 = { transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` };
  const depth2 = { transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` };
  const depth3 = { transform: `translate(${mousePosition.x * -35}px, ${mousePosition.y * -35}px)` };
  const depth4 = { transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)` };

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen bg-dark-bg flex items-center justify-center overflow-hidden py-24 px-6 md:px-12"
    >
      {/* Editorial dots background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 editorial-dot-grid z-0" />

      {/* Dynamic SVG Filter for Liquid Melting Text effect */}
      <svg className="hidden">
        <defs>
          <filter id="melt-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Genesis Absolute Text Backdrop */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-0 pointer-events-none">
        <h1 className="text-[120px] sm:text-[200px] md:text-[280px] font-black tracking-tighter leading-none text-white/[0.03] select-none uppercase">Genesis</h1>
      </div>

      {/* Extreme ambient back glow in dark-crimson red */}
      <div 
        className="absolute w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[160px] pointer-events-none"
        style={{
          top: '30%',
          left: '10%',
          ...depth1
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none"
        style={{
          bottom: '10%',
          right: '5%',
          ...depth2
        }}
      />

      {/* Decorative absolute manga grid coordinates */}
      <div className="absolute top-24 left-12 hidden md:flex flex-col gap-1 font-mono text-[9px] text-gray-500 pointer-events-none z-10">
        <span>GRID_COORD // X_881 // Y_129</span>
        <span>LAT_35.6762 // LNG_139.6503</span>
        <span>SYSTEM_LOAD: ONLINE</span>
      </div>

      <div className="absolute bottom-12 left-12 hidden md:flex items-center gap-4 font-mono text-[9px] text-gray-500 pointer-events-none z-10">
        <Crosshair className="w-3.5 h-3.5 text-crimson animate-spin" style={{ animationDuration: '8s' }} />
        <span>CALIBRATED // INTERACTIVE_UNIVERSE</span>
      </div>

      {/* Main Layered layout */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 mt-12">
        
        {/* LEFT COLUMN: Layered Custom Anime Character Artwork with Flowing Red Clouds */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-start">
          
          {/* Halftone canvas backdrop */}
          <div className="absolute w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] rounded-full manga-halftone opacity-25 -z-10 animate-pulse-slow" />
          
          {/* Layered Japanese characters under artwork */}
          <div className="absolute -left-[5%] top-[10%] text-white/[0.03] font-sans font-black text-[12vw] select-none pointer-events-none leading-none z-0">
            狂気 //
          </div>

          {/* Under-artwork vector cloud 1 (Crimson Red) */}
          <div 
            className="absolute -top-4 -right-12 sm:-right-[10%] w-[180px] sm:w-[260px] h-[70px] bg-gradient-to-r from-crimson to-[#990000] rounded-full opacity-85 blur-[2px] shadow-[0_0_30px_rgba(255,30,30,0.4)] z-0 mix-blend-screen animate-float-slow"
            style={{
              clipPath: "polygon(10% 40%, 30% 20%, 55% 25%, 70% 5%, 90% 45%, 100% 70%, 75% 90%, 50% 75%, 25% 95%, 0% 65%)",
              ...depth2
            }}
          />

          {/* Under-artwork Vector red cloud 2 (Deep Blood Red) */}
          <div 
            className="absolute -bottom-10 -left-6 sm:-left-[5%] w-[190px] sm:w-[280px] h-[80px] bg-gradient-to-l from-[#CC0000] to-crimson rounded-full opacity-90 blur-[1px] shadow-[0_0_20px_rgba(255,30,30,0.3)] z-0 mix-blend-screen animate-float-medium"
            style={{
              clipPath: "polygon(15% 45%, 35% 15%, 50% 30%, 75% 10%, 95% 40%, 85% 85%, 60% 70%, 35% 95%, 5% 70%)",
              ...depth4
            }}
          />

          {/* Star visual items floating in background */}
          <div className="absolute top-[20%] left-[8%] text-white/30 animate-pulse-slow z-0">
            <Star className="w-4 h-4 text-white" />
          </div>
          <div className="absolute bottom-[30%] right-[5%] text-white/20 animate-bounce duration-[2.5s] z-0">
            <Star className="w-3.5 h-3.5 text-crimson" />
          </div>

          {/* Centerpiece image wrapper with frame and glitch bars */}
          <div 
            className="relative w-[340px] sm:w-[480px] aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto overflow-visible rounded-lg flex items-center justify-center transition-all duration-300 pointer-events-auto group mt-4 sm:mt-0"
            style={depth3}
          >
            {/* Custom stylized image frame overlay */}
            <div className="absolute -inset-1 border border-crimson/30 rounded-lg group-hover:border-crimson/80 transition-colors duration-500 z-20" />
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-white/5 rounded-md z-20" />

            {/* Glowing tech corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-crimson z-30" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-crimson z-30" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-crimson z-30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-crimson z-30" />

            <img 
              src={heroImage} 
              alt="NAVAMEY Character Design" 
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-md shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[460px] select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Glitch Tech Panel tag overlapping image */}
            <div className="absolute -bottom-5 right-6 bg-dark-panel border border-crimson/40 px-3 py-1 text-[8px] font-mono tracking-widest text-white/80 z-20 flex items-center gap-1.5 shadow-20xl">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-ping" />
              <span>CORE_FILE_081//NAVAMEY.SYS</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Massive dynamic typography layered details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left relative">
          
          {/* Subtle manga screentones behind typography */}
          <div className="absolute -right-24 top-0 w-[400px] h-[250px] manga-halftone-red opacity-[0.22] pointer-events-none -z-10" />

          {/* Sub-header stylized line-and-title badge */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
            <span className="h-[1px] w-12 bg-crimson"></span>
            <span className="text-crimson uppercase tracking-[0.5em] text-[10px] sm:text-xs font-bold">Cyber-Physical Designer</span>
          </div>

          {/* Big Oversized Italic Typography Pairings as seen in Editorial Aesthetic */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tight italic select-none">
            UI/UX<br/>
            <span className="text-transparent text-stroke-white pointer-events-none">Designer</span>
          </h2>

          {/* Subtitle credentials block */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start font-mono text-xs text-gray-400">
            <span className="text-crimson font-semibold tracking-wider flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-crimson animate-pulse" />
              CREATIVE DIRECTOR
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-700" />
            <span className="tracking-[0.18em]">TOKYO-BERLIN</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-700" />
            <span className="tracking-[0.15em] text-white">ILLUSTRATIONS</span>
          </div>

          <p className="mt-6 text-sm text-white/60 leading-relaxed font-light tracking-wide max-w-lg mx-auto lg:mx-0">
            Creative UI/UX Designer focused on clean, modern, and user-friendly digital experiences.
          </p>

          {/* Action Call buttons modeled exactly like the design template */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button 
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-crimson text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group cursor-pointer w-full sm:w-auto"
            >
              Launch Portfolio
              <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
            </button>
            
            <button 
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/20 text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:border-crimson hover:text-crimson transition-all cursor-pointer w-full sm:w-auto"
            >
              Read Philosophy
            </button>
          </div>

        </div>
      </div>

      {/* Downward Scrolling prompt aligned bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer text-gray-500 hover:text-crimson transition-colors duration-300">
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase">SCROLL_DOWN</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-crimson" />
      </div>
    </section>
  );
}
