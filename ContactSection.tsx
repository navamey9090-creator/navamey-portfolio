import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, ArrowUpRight, Check, Send, Sparkles, MessageSquare } from 'lucide-react';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 127.14 96.36" fill="currentColor" {...props}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c1-.73,2-1.5,2.92-2.3a75.6,75.6,0,0,0,71.22,0c.92.8,1.92,1.57,2.92,2.3a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.87,49.27,123.7,26.47,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    // Simulate high-fidelity network submission latency
    setTimeout(() => {
      setSubmitting(false);
      setFormSent(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-clear message block after some time
      setTimeout(() => setFormSent(false), 9000);
    }, 1800);
  };

  const socialLinks = [
    { label: 'EMAIL', href: 'mailto:navamey9090@gmail.com', desc: 'navamey9090@gmail.com', icon: Mail },
    { label: 'INSTAGRAM', href: 'https://instagram.com', desc: '@nicole.art.dir', icon: Instagram },
    { label: 'DISCORD', href: 'https://discord.com', desc: 'nicole_universe#0001', icon: DiscordIcon },
    { label: 'LINKEDIN', href: 'https://linkedin.com', desc: 'NAVAMEY', icon: Linkedin }
  ];

  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen bg-black py-24 px-6 md:px-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Editorial dots background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-8 editorial-dot-grid z-0" />

      {/* Background radial glowing ambient spots */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-crimson/[0.025] rounded-full blur-[140px] pointer-events-none select-none z-0" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-crimson/[0.015] rounded-full blur-[100px] pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[1px] w-12 bg-crimson" />
              <span className="font-mono text-[10px] text-crimson tracking-[0.3em] uppercase">TRANSMISSION_NODE_A9</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-wider text-white uppercase italic">
              CONTACT // <span className="text-transparent text-stroke-white select-none pointer-events-none">NAVAMEY</span>
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-[10px] text-gray-400">
            <p className="tracking-widest">PROJECT_QUEUE: ACCEPTING COMMISSIONS // STATUS: OPEN</p>
            <p className="tracking-widest text-crimson">CURRENT_UTC: {new Date().toISOString().substring(11,19)}</p>
          </div>
        </div>

        {/* INTERACTIVE FORM & SOCIAL LINKS BOX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start my-auto">
          
          {/* LEFT: Cinematic High-End Contact Form (7 Grids) */}
          <div className="lg:col-span-7 bg-[#050505] p-6 sm:p-10 border border-white/10 rounded-lg relative overflow-hidden shadow-2xl">
            {/* Tech line overlays */}
            <div className="absolute top-0 left-0 w-2 h-full bg-crimson" />
            
            <div className="flex items-center gap-2 mb-6 text-left border-b border-white/5 pb-4">
              <MessageSquare className="w-4 h-4 text-crimson" />
              <h4 className="font-mono text-xs text-white tracking-widest uppercase font-semibold">
                SECURE_COMMUNICATION_TERMINAL
              </h4>
            </div>

            {formSent ? (
              <div className="py-12 px-6 flex flex-col items-center justify-center text-center animate-pulse-slow">
                <div className="w-16 h-16 rounded-full bg-crimson/15 border border-crimson flex items-center justify-center text-crimson mb-6 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h5 className="font-display text-2xl tracking-widest text-white mb-2 uppercase">
                  TRANSMISSION SUCCESS
                </h5>
                <p className="font-mono text-xs text-crimson mb-6 uppercase tracking-wider">
                  ENCRYPTED_PACKET_ESTABLISHED // PORT_22
                </p>
                <p className="text-gray-400 text-sm max-w-sm font-light">
                  Thank you for your message. Your signals have bypassed our outer diagnostics loops. NAVAMEY will analyze and connect with you shortly.
                </p>
                <button 
                  onClick={() => setFormSent(false)}
                  className="mt-8 px-6 py-2.5 border border-white/20 text-xs font-mono tracking-widest text-white hover:border-crimson hover:text-crimson transition-all duration-300 bg-transparent cursor-pointer"
                >
                  DISMISS TERMINAL
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Name line */}
                <div className="flex flex-col gap-1 md:gap-2 relative group">
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider">01// USER_NAME</span>
                  <input 
                    type="text" 
                    required
                    placeholder="ENTER YOUR FULL NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 focus:border-crimson text-white placeholder-gray-600 font-sans text-sm pb-2.5 outline-none transition-colors duration-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-crimson group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Email line */}
                <div className="flex flex-col gap-1 md:gap-2 relative group">
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider">02// EMAIL_ADDRESS</span>
                  <input 
                    type="email" 
                    required
                    placeholder="ENTER YOUR ELECTRONIC MAIL ADDRESS"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 focus:border-crimson text-white placeholder-gray-600 font-sans text-sm pb-2.5 outline-none transition-colors duration-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-crimson group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Message block */}
                <div className="flex flex-col gap-1 md:gap-2 relative group">
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider">03// MESSAGE_CONTENT</span>
                  <textarea 
                    rows={4}
                    required
                    placeholder="OUTLINE YOUR STRATEGIC PROJECT CONCEPT OR HI-END ART DIRECTIVE..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 focus:border-crimson text-white placeholder-gray-600 font-sans text-sm pb-2.5 outline-none transition-colors duration-300 min-h-[100px] resize-y"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-crimson group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Tech specifications indicators */}
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 pt-2">
                  <span>PACKET_SIZE: ~{formData.name.length + formData.email.length + formData.message.length} BYTES</span>
                  <span>SSL_KEY: SECURE_LINK</span>
                </div>

                {/* Submission CTA */}
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full py-4 bg-crimson hover:bg-transparent border border-crimson text-white text-xs font-mono tracking-widest transition-all duration-300 relative flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-2 font-bold select-none">
                    {submitting ? (
                      <>
                        ENCRYPTING TRANSMISSION_NODE... <span className="animate-spin text-white">⚙</span>
                      </>
                    ) : (
                      <>
                        TRANSMIT_SECURE_PACKET <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

              </form>
            )}

          </div>

          {/* RIGHT: Direct Coordinates & Social Indices (5 Grids) */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div>
              <p className="font-mono text-[10px] text-crimson uppercase tracking-[0.25em] mb-2 font-semibold">
                DIRECT_LINKS.SYS
              </p>
              <h3 className="font-display text-2xl tracking-wider text-white mb-4">
                DIGITAL COMMUNICATIONS
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                Feel free to bypass the communications terminal and ping my addresses directly. I generally response code packets within 24 working hours.
              </p>
            </div>

            {/* Structured Social lists */}
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 bg-dark-panel border border-white/5 hover:border-crimson/40 transition-all duration-300 rounded group interactive-card cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 bg-dark-bg border border-white/10 rounded-full text-gray-400 group-hover:text-crimson group-hover:border-crimson/20 transition-all">
                      <link.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-gray-500 block">LINK_PORTAL_{link.label}</span>
                      <span className="text-white text-sm font-medium tracking-tight group-hover:text-crimson transition-colors select-all">
                        {link.desc}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* DRAMATIC ENDING statement exactly as requested */}
        <div className="mt-24 border-t border-white/10 pt-12 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
            
            {/* The Huge Cinematic Statement phrase */}
            <div className="text-left space-y-1">
              <span className="block font-mono text-[10px] text-crimson tracking-[0.3em] font-semibold">
                THE_END_OF_THE_UNIVERSE
              </span>
              <p 
                className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-widest text-white selection:bg-crimson uppercase select-none leading-none pt-2 hover:glitch-text transition-all duration-300 cursor-default italic"
                title="Thanks for visiting my universe."
              >
                Thanks for visiting my <span className="text-transparent text-stroke-white pointer-events-none select-none">universe</span><span className="text-crimson">.</span>
              </p>
              
              {/* Optional stylized Japanese overlay */}
              <span className="block font-mono text-xs text-gray-500 pt-2 tracking-widest leading-relaxed uppercase">
                私たちの宇宙を訪れてくれてありがとう // NAVAMEY PORTFOLIO SYSTEM v4 // R_08
              </span>
            </div>

            {/* Quick manual back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 bg-dark-panel hover:bg-crimson/10 border border-white/10 hover:border-crimson text-gray-400 hover:text-white font-mono text-[10px] tracking-widest transition-all duration-300 flex items-center gap-1.5 cursor-pointer rounded select-none"
            >
              [BACK_TO_TOP_SYS]
            </button>

          </div>

        </div>

      </div>

      {/* FOOTER METRICS INFO RENDER */}
      <div className="w-full max-w-7xl mx-auto border-t border-white/5 pt-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] text-gray-600 relative z-10 text-left">
        <div>
          <span>© NAVAMEY 2026 // CREATIVE REGISTERED SYSTEMS</span>
        </div>
        <div className="flex items-center gap-6">
          <span>HOSTED_ON // CLOUD_RUN_INGRESS:3000</span>
          <span>LANG: TS_REACT_V3</span>
          <span className="text-crimson flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-crimson" /> CREATIVE_DIRECTOR_UNIVERSE // ALL RIGHTS PRIVILEGED
          </span>
        </div>
      </div>

    </section>
  );
}
