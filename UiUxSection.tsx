import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Radio, ShieldCheck, Zap, ToggleLeft, ToggleRight, Sparkles, Sliders } from 'lucide-react';

export default function UiUxSection() {
  const [hudScale, setHudScale] = useState<number>(85);
  const [systemSync, setSystemSync] = useState<boolean>(true);
  const [diagnosticLog, setDiagnosticLog] = useState<string[]>([
    'INIT_STG_01_OK: COGNITIVE_BOOTSTAGE_ESTABLISHED',
    'KERNEL_SYS_LOAD_INFO: MODULE_CORE_ON',
    'GRAPHIC_MATRIX_ALIGNMENT: COMPLETED',
  ]);
  const [sensorStream, setSensorStream] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate simulated incoming diagnostic logs periodically to seem organic
    const interval = setInterval(() => {
      const logs = [
        'TELEMETRY_STREAM_SYNC: HEARTBEAT_OK // 25ms',
        'SYNAPSE_GIGAFLOP_OPTIMIZER: SECURE // 99.1%',
        'NEURAL_DECODING_MATRIX: RE-ROUTING_COMPLETED',
        'HUD_GRID_COORDINATOR: RE-CALIBRATED',
        'COGNITIVE_SENSORS: READING_ACTIVE',
        'SYSTEM_COOLANT_LEVEL: STABLE // 45°C'
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setDiagnosticLog(prev => [randomLog, ...prev.slice(0, 5)]);
    }, 4500);

    const handleMouseMove = (e: MouseEvent) => {
      setSensorStream({
        x: Math.round((e.clientX / window.innerWidth) * 100),
        y: Math.round((e.clientY / window.innerHeight) * 100),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="uiux" 
      className="relative w-full min-h-screen bg-dark-bg py-24 px-6 md:px-12 border-b border-crimson/10 overflow-hidden"
    >
      {/* Editorial dots background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-8 editorial-dot-grid z-0" />

      <div className="absolute top-[40%] left-[-5%] text-[10vw] font-display font-black text-crimson/[0.012] pointer-events-none select-none tracking-tighter -rotate-12 z-0">
        INTERACTION_SYS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[1px] w-12 bg-crimson" />
              <span className="font-mono text-[10px] text-crimson tracking-[0.3em] uppercase">SYSTEM_INTERACTIVE_HUD</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-wider text-white uppercase italic">
              UI/UX // <span className="text-transparent text-stroke-white select-none pointer-events-none">PLAYGROUND</span>
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-[10px] text-gray-400 max-w-sm">
            <p className="tracking-widest">CONSOLES v4.5 // TOUCH SENSITIVE</p>
            <p className="font-light text-white/55 uppercase mt-1">
              Interact directly with the sliders and switches below to optimize cognitive link feedback metrics.
            </p>
          </div>
        </div>

        {/* HUD INTERACTION GRID BOX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Live Interactive Diagnostic Panel Card (7 Grids) */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-crimson/20 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl overflow-hidden min-h-[480px]">
            {/* Background screen mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,30,30,0.015)_1.5px,transparent_0)] bg-[size:12px_12px] opacity-75 pointer-events-none" />
            
            {/* Scanline overlay */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-crimson/10 animate-scanline z-0 pointer-events-none" />

            {/* Panel header controls */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 z-10 relative">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-crimson animate-pulse" />
                <span className="font-mono text-xs text-white tracking-widest uppercase">CHRONOS_SYNAPSE_COCKPIT_HUD</span>
              </div>
              <span className="px-2 py-0.5 bg-crimson/15 text-crimson border border-crimson/20 font-mono text-[8px] tracking-wider rounded">
                LIVE_FEEDBACK
              </span>
            </div>

            {/* Central Holographic Visual Grid Panel */}
            <div className="flex-1 border border-white/5 rounded-lg bg-dark-bg p-6 flex flex-col justify-between items-center relative z-10 mb-6">
              
              {/* Corner crosshairs decoration */}
              <div className="absolute top-2 left-2 text-[8px] font-mono text-gray-600">[+]</div>
              <div className="absolute top-2 right-2 text-[8px] font-mono text-gray-600">[+]</div>
              <div className="absolute bottom-2 left-2 text-[8px] font-mono text-gray-600">[+]</div>
              <div className="absolute bottom-2 right-2 text-[8px] font-mono text-gray-600">[+]</div>

              <div className="w-full flex justify-between items-center text-gray-500 font-mono text-[9px] mb-4">
                <span>CON_SYS_STABLE: 99.8%</span>
                <span>NEURAL_FREQ: {hudScale * 12} MHz</span>
              </div>

              {/* Animated Glowing Ring reflecting state values */}
              <div className="relative w-40 h-40 rounded-full flex items-center justify-center border border-white/5 shadow-[inset_0_0_30px_rgba(255,30,30,0.06)]">
                
                {/* External floating nodes */}
                <div 
                  className="absolute w-2.5 h-2.5 bg-crimson rounded-full animate-ping duration-1000"
                  style={{
                    transform: `rotate(${hudScale * 3.6}deg) translate(80px)`,
                    boxShadow: '0 0 12px #FF1E1E'
                  }}
                />
                
                {/* Secondary halo */}
                <div 
                  className="absolute w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                  style={{
                    transform: `rotate(${-hudScale * 2.5}deg) translate(65px)`
                  }}
                />

                {/* Central digital value */}
                <div className="text-center">
                  <span className="font-display text-4xl text-white font-bold tracking-tight">
                    {hudScale}%
                  </span>
                  <span className="block font-mono text-[8px] text-gray-500 tracking-widest mt-1 uppercase">
                    {systemSync ? 'COHERENT_LINK' : 'COGNITION_LAG'}
                  </span>
                </div>
              </div>

              {/* Multi-Telemetry reading grids */}
              <div className="w-full grid grid-cols-3 gap-3 font-mono text-[10px] text-center mt-6 pt-4 border-t border-white/5 text-gray-400">
                <div>
                  <span className="text-gray-500 block text-[8px] mb-0.5">MATRIX_X</span>
                  <span className="text-white font-medium">{sensorStream.x}%</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[8px] mb-0.5">MATRIX_Y</span>
                  <span className="text-white font-medium">{sensorStream.y}%</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[8px] mb-0.5">AMP_VECTOR</span>
                  <span className="text-crimson font-medium">+{(hudScale * 0.15).toFixed(2)}</span>
                </div>
              </div>

            </div>

            {/* Interactive Tactile HUD Slider controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 z-10 relative bg-dark-bg p-4 rounded border border-white/5">
              
              {/* Sliders widget */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] text-gray-400 flex items-center gap-1.5 uppercase font-medium">
                  <Sliders className="w-3 h-3 text-crimson" /> NEURO_STRENGTH_COEF
                </label>
                <div className="flex items-center gap-3">
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={hudScale}
                    onChange={(e) => setHudScale(Number(e.target.value))}
                    className="flex-1 accent-crimson bg-dark-panel h-1 cursor-pointer"
                  />
                  <span className="font-mono text-xs text-white w-8 text-right font-bold">{hudScale}%</span>
                </div>
              </div>

              {/* Toggle synchronization switches */}
              <div className="flex items-center justify-between sm:pl-4 sm:border-l border-white/10">
                <div className="text-left">
                  <label className="font-mono text-[9px] text-gray-400 block uppercase font-medium">
                    COGNITIVE LOCK
                  </label>
                  <span className="font-mono text-[8px] text-gray-600 uppercase">
                    SYNC_SYS_STATUS
                  </span>
                </div>
                
                <button 
                  onClick={() => setSystemSync(!systemSync)}
                  className="text-crimson transition-transform duration-200 cursor-pointer hover:scale-105"
                  aria-label="Toggle Synchronization"
                >
                  {systemSync ? (
                    <div className="flex items-center gap-1 text-[11px] font-mono text-crimson">
                      ACTIVE <ToggleRight className="w-7 h-7" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-[11px] font-mono text-gray-500">
                      BYPASS <ToggleLeft className="w-7 h-7 text-gray-500" />
                    </div>
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT: Live Feed Console Logs (5 Grids) */}
          <div className="lg:col-span-5 bg-dark-panel border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl overflow-hidden min-h-[480px]">
            {/* Background Halftone */}
            <div className="absolute right-0 top-0 w-[200px] h-[200px] manga-halftone opacity-5 pointer-events-none" />

            {/* Header branding info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-crimson" />
                <h3 className="font-mono text-xs text-white tracking-widest uppercase font-semibold">
                  CONSOLE_INTEGRATION_LOG
                </h3>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6 text-left">
                Simulating dynamic state tracking metrics. All micro-interactions are handled dynamically using React reactive hook architectures and state bounds.
              </p>

              {/* Custom Console Terminal display box */}
              <div className="bg-dark-bg p-4 rounded-lg border border-white/5 font-mono text-[10px] text-left space-y-2 max-h-[220px] overflow-y-auto no-scrollbar relative">
                
                {/* Floating crosshair graphic asset */}
                <div className="absolute bottom-2 right-2 opacity-15">
                  <Radio className="w-10 h-10 text-crimson animate-ping" />
                </div>

                {diagnosticLog.map((logItem, index) => {
                  const isSuccess = logItem.includes('OK') || logItem.includes('STABLE') || logItem.includes('SYNC');
                  return (
                    <div key={index} className="flex gap-2 items-start text-xs border-b border-white/[0.02] pb-1.5 last:border-b-0">
                      <span className="text-crimson/80 select-none">❯</span>
                      <span className={isSuccess ? 'text-white' : 'text-crimson font-light font-sans tracking-wide italic'}>
                        {logItem}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical layout details bottom card */}
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500 text-left">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>SEC_STATUS: CLEAR</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-crimson animate-bounce" />
                <span>FREQ: +40dB</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
