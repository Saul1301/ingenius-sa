import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function GlobalCursor() {
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleHover = (e) => {
      if (e.target.closest('button, a, input, textarea, select')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-brand-cyan rounded-full pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          willChange: 'transform',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-gold rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          willChange: 'transform',
        }}
      />
    </>
  );
}
