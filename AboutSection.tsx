import React, { useState } from 'react';
import { CREATIVE_PHILOSOPHY, SKILLS, TIMELINE, POSTER_IMAGE } from '../data';
import { Cpu, Terminal, Shield, Workflow, Compass, Activity } from 'lucide-react';

export default function AboutSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'design' | 'tools' | 'technical'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = SKILLS.filter(skill => {
    if (selectedCategory === 'all') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen bg-dark-bg/95 py-24 px-6 md:px-12 border-t border-b border-crimson/10 overflow-hidden"
    >
      {/* Editorial dots background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-8 editorial-dot-grid z-0" />

      {/* Absolute coordinates watermark */}
      <div className="absolute top-[10%] right-[5%] text-[15vw] font-display font-black text-crimson/[0.015] pointer-events-none select-none tracking-widest leading-none z-0">
        NAVAMEY.SYS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[1px] w-12 bg-crimson" />
              <span className="font-mono text-[10px] text-crimson tracking-[0.3em] uppercase">SYSTEM_MANIFESTO_A88</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-wider text-white uppercase italic">
              ABOUT CONTAINER // <span className="text-transparent text-stroke-white select-none pointer-events-none">NAVAMEY</span>
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-[10px] text-gray-400">
            <p className="tracking-widest">NAME // NAVAMEY PORTFOLIO</p>
            <p className="tracking-widest text-crimson">LOCATION // SHIBUYA, TOKYO SEC_9</p>
          </div>
        </div>

        {/* TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Designer Portrait Artwork & Narrative Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* The Cinematic Manga Illustration Wrapper */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg border border-white/10 shadow-2xl group cursor-default">
              
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <img 
                src={POSTER_IMAGE} 
                alt="NAVAMEY Portrait Graphic" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay graphic details */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="font-mono text-[10px] text-crimson tracking-widest mb-1">
                  CORE_ILLUSTRATION // SHINIGAMI SERIES
                </p>
                <h3 className="font-display text-2xl tracking-wider text-white">
                  NAVAMEY // THE DESIGN DIRECTIVE
                </h3>
              </div>

              {/* Distressed corner accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/40" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/40" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/40" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/40" />
            </div>

            {/* Narrative philosophy */}
            <div className="bg-dark-panel p-6 sm:p-8 border border-white/5 rounded-lg relative">
              <div className="absolute -top-3 left-6 px-3 bg-dark-bg border border-white/10 text-[9px] font-mono tracking-widest text-crimson">
                MANIFESTO_v1.07
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed italic font-light">
                "{CREATIVE_PHILOSOPHY}"
              </p>
              
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono text-gray-500">
                <span>EST: 2019</span>
                <span>PHILOSOPHY_LOADED // 100%</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Skills Matrix Gauge & Experience Logs */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* SKILLS SECTION */}
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-crimson" />
                  <h3 className="font-mono text-sm uppercase tracking-widest text-white">
                    SKILL_PARAMETERS.SYS
                  </h3>
                </div>
                
                {/* Custom Category buttons */}
                <div className="flex items-center gap-3 font-mono text-[10px]">
                  {(['all', 'design', 'tools', 'technical'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 text-[9px] border hover:border-crimson hover:text-white transition-all duration-300 cursor-pointer ${
                        selectedCategory === cat 
                          ? 'border-crimson text-crimson bg-crimson/5' 
                          : 'border-white/10 text-gray-400'
                      }`}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSkills.map((skill) => (
                  <div 
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="bg-dark-panel p-4 border border-white/5 hover:border-crimson/30 transition-all duration-300 rounded relative group overflow-hidden"
                  >
                    {/* Background hover bar */}
                    <div 
                      className="absolute bottom-0 left-0 h-[2px] bg-crimson transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />

                    <div className="flex justify-between items-center mb-2 flex-wrap">
                      <span className="font-mono text-xs tracking-wider text-white group-hover:text-crimson transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-gray-500">
                        ({skill.level}%)
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-[3px] bg-dark-bg leading-none rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-crimson/80 to-crimson transition-all duration-1000 ease-out`}
                        style={{ width: selectedCategory ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE LOGS TIMELINE */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                <Activity className="w-4 h-4 text-crimson animate-pulse" />
                <h3 className="font-mono text-sm uppercase tracking-widest text-white">
                  CAREER_ACTIVITY_LOGS.EXE
                </h3>
              </div>

              <div className="relative pl-6 border-l border-white/10 flex flex-col gap-8 md:gap-10">
                {TIMELINE.map((evt, idx) => (
                  <div key={idx} className="relative group text-left">
                    
                    {/* Bullet marker */}
                    <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full border border-crimson bg-dark-bg group-hover:bg-crimson group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(255,30,30,0.5)]" />

                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                      <p className="font-mono text-[10px] text-crimson font-medium tracking-[0.2em]">
                        {evt.year}
                      </p>
                      <span className="font-mono text-[9px] text-gray-500">
                        REF: LOG_ID_00{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display text-xl tracking-wider text-white group-hover:text-crimson transition-colors duration-200">
                      {evt.role.toUpperCase()}
                    </h4>
                    
                    <p className="font-mono text-xs text-gray-400 mt-1 uppercase tracking-wider">
                      {evt.company}
                    </p>
                    
                    <p className="text-gray-400 text-sm font-light mt-3 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
