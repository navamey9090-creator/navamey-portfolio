import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const trailRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateTrail = () => {
      // Linear interpolation to make the trail drag smoothly behind the cursor pointer
      const speed = 0.15;
      const targetX = position.x;
      const targetY = position.y;
      
      trailRef.current.x += (targetX - trailRef.current.x) * speed;
      trailRef.current.y += (targetY - trailRef.current.y) * speed;
      
      setTrail({ x: trailRef.current.x, y: trailRef.current.y });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Watch for hovered clickable things
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target && (
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('cursor-pointer') ||
          target.closest('.interactive-card')
        )
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    // Dynamic frame loop for smooth trail
    let animationFrameId: number;
    const loop = () => {
      updateTrail();
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Absolute centerpiece cursor */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full custom-cursor z-50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.7 : hovered ? 1.5 : 1})`,
          backgroundColor: '#FF1E1E',
          boxShadow: hovered ? '0 0 12px #FF1E1E' : '0 0 4px #FF1E1E',
        }}
      />
      
      {/* Smoothly lagging pointer ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-crimson/40 z-50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-75"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.6 : hovered ? 1.8 : 1})`,
          borderColor: hovered ? 'rgba(255, 30, 30, 0.95)' : 'rgba(255, 30, 30, 0.35)',
          backgroundColor: hovered ? 'rgba(255, 30, 30, 0.05)' : 'transparent',
          boxShadow: hovered ? '0 0 15px rgba(255, 30, 30, 0.2)' : 'none',
        }}
      />
    </>
  );
}
