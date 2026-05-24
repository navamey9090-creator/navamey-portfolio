import React from 'react';

export default function NoiseOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Dynamic Moving Grain */}
      <div 
        className="absolute inset-[-100%] opacity-[0.045] pointer-events-none bg-repeat animate-grain" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Static grid backdrop texture */}
      <div className="absolute inset-0 pointer-events-none tech-grid opacity-[0.4]" />
      
      {/* High-contrast subtle horizontal scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,6px_100%] opacity-20" />

      {/* Extreme ambient bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[rgba(255,30,30,0.03)] to-transparent pointer-events-none" />
    </div>
  );
}
