import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowUpRight, Copy, Check, Terminal, Type, Palette, Layout, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectsSection() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const toggleCaseStudy = (id: string) => {
    if (expandedCaseStudy === id) {
      setExpandedCaseStudy(null);
    } else {
      setExpandedCaseStudy(id);
      // Wait a tiny bit and scroll to case study smoothly
      setTimeout(() => {
        document.getElementById(`case-study-details-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <section 
      id="projects" 
      className="relative w-full min-h-screen bg-dark-bg py-24 px-6 md:px-12 border-b border-crimson/10 overflow-hidden"
    >
      {/* Editorial dots background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-8 editorial-dot-grid z-0" />

      {/* Decorative floating grids */}
      <div className="absolute top-[20%] left-0 w-[30vh] h-[30vh] bg-gradient-to-br from-crimson/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[1px] w-12 bg-crimson" />
              <span className="font-mono text-[10px] text-crimson tracking-[0.3em] uppercase">PROJECT_FILES_DB</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-wider text-white uppercase italic">
              FEATURED // <span className="text-transparent text-stroke-white select-none pointer-events-none">PORTFOLIOS</span>
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-gray-400 max-w-sm">
            <p className="uppercase tracking-widest text-crimson font-bold">BEHANCE CASE STUDIES</p>
            <p className="font-light text-white/55 mt-1 uppercase text-[10px] leading-relaxed">
              Explore custom typography, interactive layout grids, branding color alignments, and composition blueprints.
            </p>
          </div>
        </div>

        {/* PROJECTS SEQUENTIAL ACCORDER */}
        <div className="flex flex-col gap-24 lg:gap-36">
          {PROJECTS.map((project: Project, index: number) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedCaseStudy === project.id;

            return (
              <div key={project.id} className="group relative">
                
                {/* LARGE WATERMARK BACKGROUND NUMBER */}
                <div 
                  className={`absolute top-[-5%] font-display font-black text-[12vw] leading-none text-white/[0.015] select-none pointer-events-none z-0 ${
                    isEven ? 'right-12' : 'left-12'
                  }`}
                >
                  0{index + 1} //
                </div>

                {/* ASYMMETRICAL ROW BUILD */}
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* PROJECT IMAGE COLUMN */}
                  <div className="w-full lg:w-[55%]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.85)] group-hover:border-crimson/30 transition-all duration-500 interactive-card">
                      
                      {/* Technical scanner line */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-crimson/40 animate-scanline z-20 pointer-events-none" />
                      
                      {/* Backdrop shade overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />

                      {/* Custom Corner Accents for manga art feel */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-crimson z-20 opacity-65 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-crimson z-20 opacity-65 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-crimson z-20 opacity-65 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-crimson z-20 opacity-65 group-hover:opacity-100 transition-opacity" />

                      <img 
                        src={project.image} 
                        alt={project.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* PROJECT META DATA COLUMN */}
                  <div className="w-full lg:w-[45%] text-left">
                    <div className="flex items-center gap-3 font-mono text-[10px] text-crimson mb-3 font-semibold tracking-wider">
                      <span>0{index + 1}.</span>
                      <span className="uppercase tracking-[0.25em]">{project.category}</span>
                      <span className="text-gray-600">//</span>
                      <span className="text-gray-400 font-normal">{project.year}</span>
                    </div>

                    <h3 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight text-white group-hover:text-crimson transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Quick project badges */}
                    <div className="flex flex-wrap gap-2 mt-4 font-mono text-[9px] text-gray-400">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-dark-panel border border-white/5 rounded">
                          #{tag.toUpperCase()}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 text-sm text-gray-300 font-light leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    {/* Client & Role block */}
                    <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-4 font-mono text-[10px]">
                      <div>
                        <span className="text-gray-500 block">CLIENT</span>
                        <span className="text-white uppercase tracking-wider">{project.client || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">ROLE</span>
                        <span className="text-white uppercase tracking-wider">{project.role || 'DIRECTOR'}</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 flex items-center gap-4 flex-wrap">
                      <button
                        onClick={() => toggleCaseStudy(project.id)}
                        className={`px-5 py-3 border text-xs font-mono tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                          isExpanded 
                            ? 'bg-crimson border-crimson text-white' 
                            : 'border-crimson bg-crimson/5 text-crimson hover:bg-crimson hover:text-white'
                        }`}
                      >
                        {isExpanded ? (
                          <>
                            CLOSE SYSTEMS <ChevronUp className="w-4 h-4 animate-bounce" />
                          </>
                        ) : (
                          <>
                            EXPLORE DESIGN SYSTEMS <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>

                {/* EXPANDABLE HIGH-FIDELITY CASE STUDY PANEL */}
                {isExpanded && (
                  <div 
                    id={`case-study-details-${project.id}`}
                    className="mt-8 p-6 sm:p-10 bg-dark-panel border border-crimson/25 rounded-lg relative overflow-hidden transition-all duration-500 z-20 text-left cursor-default animate-float-medium"
                    style={{ animationDuration: '30s' }}
                  >
                    {/* Background Halftone detailing */}
                    <div className="absolute right-0 bottom-0 w-[300px] h-[300px] manga-halftone-red opacity-10 pointer-events-none select-none" />

                    {/* Technical label header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 text-[10px] font-mono text-gray-500">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-crimson" />
                        <span>INTEGRATED_DESIGN_FORMULA_v8.9</span>
                      </div>
                      <span>CLASSIFIED // HIGH_CONTRAST</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      
                      {/* Concept explanation (5 grids) */}
                      <div className="lg:col-span-4 space-y-4">
                        <h4 className="font-mono text-xs text-crimson uppercase tracking-[0.2em] flex items-center gap-1.5 font-bold">
                          <Sparkles className="w-3.5 h-3.5" /> 01 // ARTISTIC CONCEPT
                        </h4>
                        <p className="text-sm text-gray-300 font-light leading-relaxed">
                          {project.concept}
                        </p>
                        <div className="bg-dark-bg p-4 rounded border border-white/5 font-mono text-[10px] text-gray-500">
                          <p className="text-white/60 mb-1 font-semibold uppercase">SYSTEM STAGE INDEX</p>
                          <p>RENDER_ENGINE: WEBGL_CANVAS</p>
                          <p>TEXTURE_MODE: INK_PLATE_HALFTONE</p>
                          <p>OPACITY_MULT: 0.95</p>
                        </div>
                      </div>

                      {/* Typography Showcase (4 grids) */}
                      <div className="lg:col-span-4 space-y-4 border-l lg:border-l border-white/10 lg:pl-8">
                        <h4 className="font-mono text-xs text-crimson uppercase tracking-[0.2em] flex items-center gap-1.5 font-bold">
                          <Type className="w-3.5 h-3.5" /> 02 // TYPOGRAPHY FORMULA
                        </h4>
                        
                        <div className="bg-dark-bg p-5 rounded border border-white/5 relative">
                          <span className="absolute top-2 right-2 font-mono text-[8px] text-gray-500">TYPE.SYS</span>
                          <span className="font-mono text-[9px] text-gray-400 block mb-1">SELECTED FACE</span>
                          <p className="font-display text-2xl tracking-wider text-white mb-2 uppercase">
                            {project.typographyShowcase.fontName}
                          </p>
                          
                          <div className="h-[1px] bg-white/10 my-3" />
                          
                          <span className="font-mono text-[9px] text-gray-400 block mb-1">STENCIL SPECIMEN</span>
                          <p className="font-display text-3xl tracking-widest text-transparent stroke-text text-white/95 uppercase leading-none select-none">
                            {project.typographyShowcase.sampleText}
                          </p>
                        </div>

                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          {project.typographyShowcase.description}
                        </p>
                      </div>

                      {/* Color Palette (4 grids) */}
                      <div className="lg:col-span-4 space-y-4 border-l lg:border-l border-white/10 lg:pl-8">
                        <h4 className="font-mono text-xs text-crimson uppercase tracking-[0.2em] flex items-center gap-1.5 font-bold">
                          <Palette className="w-3.5 h-3.5" /> 03 // COLOR ALIGNMENT
                        </h4>

                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          Click any color tile to capture its hex core value immediately into your clipboard.
                        </p>

                        <div className="flex flex-col gap-3">
                          {project.palette.map((color) => {
                            const isSelectedCopy = copiedColor === color;
                            return (
                              <button
                                key={color}
                                onClick={() => copyToClipboard(color)}
                                className="w-full flex items-center justify-between p-2.5 bg-dark-bg border border-white/5 hover:border-crimson/40 transition-colors rounded font-mono text-xs text-gray-400 relative group cursor-pointer"
                              >
                                <div className="flex items-center gap-2.5">
                                  <div 
                                    className="w-5 h-5 rounded border border-white/10 shadow-sm"
                                    style={{ backgroundColor: color }}
                                  />
                                  <span className="text-white/80 font-bold">{color}</span>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                                  {isSelectedCopy ? (
                                    <span className="text-crimson font-semibold flex items-center gap-1">
                                      <Check className="w-3 h-3" /> CAPTURED
                                    </span>
                                  ) : (
                                    <span className="group-hover:text-white transition-colors flex items-center gap-1">
                                      <Copy className="w-3 h-3" /> COPYHEX
                                    </span>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Secondary mockup previews */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="font-mono text-xs text-crimson uppercase tracking-[0.2em] mb-4 flex items-center gap-1.5 font-bold">
                        <Layout className="w-3.5 h-3.5" /> 04 // COMPOSITION MOCKUPS
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.mockups.map((mkImg, mkIdx) => (
                          <div key={mkIdx} className="relative aspect-[16/9] overflow-hidden rounded border border-white/5">
                            <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-dark-bg/80 border border-white/10 text-[8px] font-mono text-gray-400 z-10 uppercase">
                              PERSPECTIVE_0{mkIdx+1}.PNG
                            </span>
                            <img 
                              src={mkImg} 
                              alt="composition detail" 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
