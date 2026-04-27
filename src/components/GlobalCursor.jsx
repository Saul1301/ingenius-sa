import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function GlobalCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      if (e.target.closest('button, a, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-brand-cyan rounded-full pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-gold rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
      />
    </>
  );
}
