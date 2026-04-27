import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SpotlightCard({ 
  children, 
  className = "", 
  spotlightColor = "rgba(0, 212, 255, 0.15)",
  ...motionProps 
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
      {...motionProps}
    >
      {/* Fondo base oscuro general que ya tiene el glass-card */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Borde brillante que sigue el cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-inherit border border-transparent transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude"
        }}
      />
      
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
