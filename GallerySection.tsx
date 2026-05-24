import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Illustration } from '../types';
import { Eye, X, ZoomIn, Calendar, Maximize2, Compass, Tag } from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cyberpunk' | 'poster' | 'illustration' | 'sketch'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { label: 'ALL CRITICALS', value: 'all' },
    { label: 'CYBERPUNK INSPIRED', value: 'cyberpunk' },
    { label: 'GRAPHIC POSTERS', value: 'poster' },
    { label: 'ANIME ILLUSTRATIONS', value: 'illustration' },
    { label: 'EXPERIMENT SKETCHES', value: 'sketch' }
  ];

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section 
      id="illustrations" 
      className="relative w-full min-h-screen bg-dark-bg/95 py-24 px-6 md:px-12 border-b border-crimson/10 overflow-hidden"
    >
      {/* Editorial dots background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-8 editorial-dot-grid z-0" />

      {/* Absolute background Japanese text watermarks */}
      <div className="absolute top-[30%] rotate-90 right-[-10%] text-[10vw] font-display font-black text-white/[0.01] pointer-events-none select-none z-0">
        GALLERY_UNIT_SEC
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[1px] w-12 bg-crimson" />
              <span className="font-mono text-[10px] text-crimson tracking-[0.3em] uppercase">GALLERY_INDEX_F01</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-wider text-white uppercase italic">
              VISUAL // <span className="text-transparent text-stroke-white select-none pointer-events-none">ARCHIVE</span>
            </h2>
          </div>
          
          {/* Responsive filter tabs system styled like cyberpunk selectors */}
          <div className="flex items-center gap-2.5 flex-wrap font-mono text-xs">
            {filterTabs.map(tab => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveFilter(tab.value as any);
                  setLightboxIndex(null);
                }}
                className={`px-3 py-1.5 text-[10px] border transition-all duration-300 relative group cursor-pointer ${
                  activeFilter === tab.value 
                    ? 'border-crimson text-white bg-crimson/10 shadow-[0_0_12px_rgba(255,30,30,0.15)] font-bold' 
                    : 'border-white/10 text-gray-400 hover:border-gray-500 hover:text-white'
                }`}
              >
                <span className="relative z-10 uppercase tracking-widest">{tab.label}</span>
                {activeFilter === tab.value && (
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-crimson" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ASYMMETRICAL MULTI-HEIGHT MASONRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start duration-500">
          {filteredItems.map((item: Illustration, index: number) => {
            
            // Generate arbitrary height layout offsets dynamically to make it look like a customized catalog
            const heightClass = index % 3 === 0 
              ? 'aspect-[3/4]' 
              : index % 3 === 1 
                ? 'aspect-square' 
                : 'aspect-[4/5]';

            return (
              <div 
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-[#0a0a0a] border border-white/5 hover:border-crimson/40 transition-all duration-500 overflow-hidden cursor-crosshair rounded-lg filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 shadow-xl"
              >
                
                {/* Image panel */}
                <div className={`relative w-full ${heightClass} overflow-hidden`}>
                  
                  {/* Digital scanner hud overlay */}
                  <div className="absolute inset-0 bg-dark-bg/40 opacity-50 group-hover:opacity-10 transition-opacity duration-300 z-10" />

                  {/* Micro crosshair decorative guidelines on hover */}
                  <div className="absolute inset-4 border border-crimson/0 group-hover:border-crimson/25 transition-all duration-500 z-20 pointer-events-none flex items-center justify-center">
                    <div className="absolute w-4 h-[1px] bg-crimson/10 group-hover:bg-crimson/60" />
                    <div className="absolute h-4 w-[1px] bg-crimson/10 group-hover:bg-crimson/60" />
                  </div>

                  <img 
                    src={item.image} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none transition-transform duration-[1000ms] group-hover:scale-105"
                  />

                  {/* Hover banner details box */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/85 to-transparent p-5 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-25 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-crimson text-white font-mono text-[8px] tracking-wider rounded uppercase">
                        {item.category}
                      </span>
                      <span className="font-mono text-[9px] text-gray-500">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-display text-lg tracking-wider text-white line-clamp-1">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between border-t border-white/10 mt-2.5 pt-2 text-[8px] font-mono text-gray-400">
                      <span>PREVIEW_FILE // OK_</span>
                      <span className="text-crimson flex items-center gap-1">
                        {item.dimensions} <Maximize2 className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </div>

                  {/* Top quick-view icon */}
                  <div className="absolute top-4 right-4 bg-dark-bg/85 border border-white/15 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-white">
                    <Eye className="w-3.5 h-3.5 text-crimson group-hover:scale-110 duration-200" />
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Lightbox Modal Window */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div 
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 animate-fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Header control board */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4 max-w-7xl w-full mx-auto">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-crimson font-mono text-[10px] text-white tracking-widest rounded">
                  {filteredItems[lightboxIndex].category.toUpperCase()}
                </span>
                <span className="font-mono text-xs text-gray-400 font-light">
                  {filteredItems[lightboxIndex].dimensions}
                </span>
              </div>
              
              <button 
                onClick={() => setLightboxIndex(null)}
                className="p-2 border border-white/10 text-gray-400 hover:text-white hover:border-crimson transition-all rounded-full bg-dark-panel cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 text-crimson" />
              </button>
            </div>

            {/* Middle Main Slider content */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-6">
              
              {/* Prev button */}
              <button 
                onClick={prevImage}
                className="absolute left-0 sm:-left-12 p-3 text-white/50 hover:text-crimson hover:bg-white/5 transition-all duration-300 rounded font-mono text-sm z-30 cursor-pointer"
              >
                [PREV]
              </button>

              {/* Central high resolution visual element */}
              <div className="relative max-h-[70vh] max-w-full flex items-center justify-center rounded-lg border border-white/10 bg-dark-bg/50 p-1.5 shadow-[0_0_100px_rgba(255,30,30,0.15)] group overflow-hidden">
                <img 
                  src={filteredItems[lightboxIndex].image} 
                  alt={filteredItems[lightboxIndex].title} 
                  referrerPolicy="no-referrer"
                  className="max-h-[68vh] max-w-full object-contain rounded select-none shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Next button */}
              <button 
                onClick={nextImage}
                className="absolute right-0 sm:-right-12 p-3 text-white/50 hover:text-crimson hover:bg-white/5 transition-all duration-300 rounded font-mono text-sm z-30 cursor-pointer"
              >
                [NEXT]
              </button>

            </div>

            {/* Footer informational panel */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-t border-white/15 pt-4 max-w-7xl w-full mx-auto text-left">
              <div>
                <p className="font-mono text-[10px] text-crimson uppercase tracking-[0.25em] mb-1">
                  PREMIUM METRICS DISPLAY
                </p>
                <h3 className="font-display text-2xl sm:text-3xl tracking-widest text-white uppercase">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
              
              <div className="flex items-center gap-6 font-mono text-[10px] text-gray-400">
                <span className="flex items-center gap-1.5 uppercase">
                  <Calendar className="w-3.5 h-3.5 text-crimson" /> YEAR: {filteredItems[lightboxIndex].year}
                </span>
                <span className="flex items-center gap-1.5 uppercase">
                  <Tag className="w-3.5 h-3.5 text-crimson" /> ARCHIVE_UNIT_0{lightboxIndex + 1}
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
