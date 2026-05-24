import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Code, Layers } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ILLUSTRATIONS', href: '#illustrations' },
    { label: 'UI/UX', href: '#uiux' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href: string, label: string) => {
    setMobileMenuOpen(false);
    setActiveSection(label.toLowerCase());
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 ease-in-out py-4 md:py-6 px-6 md:px-12 ${
          scrollActive 
            ? 'glass-panel bg-[rgba(5,5,5,0.85)] border-b border-crimson/20 shadow-[0_4px_30px_rgba(255,30,30,0.05)] shadow-black/80' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Custom inline-SVG Vector Logo from mockup */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home', 'home'); }}
            className="flex items-center gap-3 group relative cursor-pointer"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full fill-none stroke-current text-white group-hover:text-crimson transition-colors duration-300"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Winged stylized double N symbol based on mockup */}
                <path d="M25,25 L25,75 L50,40 L50,75 L75,25" className="stroke-white group-hover:stroke-crimson transition-all duration-300" />
                {/* Angel wings detailing on left and right */}
                <path d="M15,40 C5,45 10,60 25,50" className="stroke-crimson" />
                <path d="M85,35 C95,40 90,55 75,45" className="stroke-crimson" />
                {/* Aura rings or accent halo dot */}
                <circle cx="50" cy="15" r="3" className="fill-crimson stroke-none" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-widest text-white group-hover:text-crimson transition-colors duration-200">
                NAVAMEY
              </span>
              <span className="font-mono text-[8px] text-gray-500 tracking-widest -mt-1 uppercase">
                UI/UX DESIGNER
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-8 font-mono text-xs tracking-[0.2em]">
              {navItems.map((item) => {
                const isSelected = activeSection === item.label.toLowerCase() || 
                  (activeSection === '' && item.label === 'HOME');
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavClick(item.href, item.label)}
                      className="relative py-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {item.label}
                      <span 
                        className={`absolute bottom-0 left-0 h-[2px] bg-crimson transition-all duration-300 ${
                          isSelected ? 'w-full shadow-[0_0_8px_#FF1E1E]' : 'w-0 hover:w-full'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            
            {/* Quick Contact CTA */}
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact', 'contact'); }}
              className="px-5 py-2.5 border border-white/20 hover:border-crimson text-xs font-mono tracking-widest transition-all duration-300 hover:bg-crimson/10 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1.5 text-off-white">
                PROJECTS.SYS <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute top-0 right-[-100%] w-full h-full bg-crimson transition-all duration-500 group-hover:right-0 z-0 opacity-10" />
            </a>
          </div>

          {/* Mobile Hamburguer button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-crimson transition-colors duration-300 z-50 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Cyber Drawer for Mobile */}
      <div 
        className={`fixed inset-0 z-40 bg-[rgba(5,5,5,0.98)] w-full h-full p-8 md:p-16 flex flex-col justify-between transition-all duration-500 ease-in-out transform ${
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        {/* Background watermark */}
        <div className="absolute top-1/4 right-0 text-[10vw] font-display font-bold text-crimson/[0.04] select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap">
          PORTFOLIO SYSTEMS v4.0
        </div>

        {/* Header decoration */}
        <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 border-b border-white/10 pb-4 mt-16">
          <span>CLASSIFICATION: CREATIVE DIRECTOR UNIVERSE</span>
          <span>COOR_SEC_A18 // OPEN</span>
        </div>

        {/* Central Menu list */}
        <ul className="flex flex-col gap-6 md:gap-8 my-auto font-display text-4xl md:text-6xl text-left tracking-wide">
          {navItems.map((item, index) => {
            const isSelected = activeSection === item.label.toLowerCase();
            return (
              <li 
                key={item.label}
                className="overflow-hidden group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  onClick={() => handleNavClick(item.href, item.label)}
                  className="flex items-center gap-4 text-left font-display cursor-pointer"
                >
                  <span className="font-mono text-xs text-crimson/50 font-normal">
                    0{index + 1}//
                  </span>
                  <span className={`transition-all duration-300 ${
                    isSelected ? 'text-crimson pl-4 line-through underline décoration-wavy' : 'text-off-white hover:text-crimson hover:translate-x-2'
                  }`}>
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Drawer footer link and info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex items-center gap-6 text-gray-400 font-mono text-xs">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-crimson transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" /> GITHUB
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-crimson transition-colors flex items-center gap-1">
              <Layers className="w-4 h-4" /> BEHANCE
            </a>
          </div>
          
          <div className="text-right">
            <p className="font-mono text-[10px] text-gray-500">
              © NAVAMEY PORTFOLIO 2026. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
