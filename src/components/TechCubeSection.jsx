import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Tech stack data ──────────────────────────────────────────────────────────
const TECH_STACK = [
  { name: 'React', color: '#61DAFB', glow: 'rgba(97,218,251,0.4)'  },
  { name: 'Node',  color: '#68A063', glow: 'rgba(104,160,99,0.4)'  },
  { name: 'Next',  color: '#ffffff', glow: 'rgba(255,255,255,0.3)' },
  { name: 'TS',    color: '#3178C6', glow: 'rgba(49,120,198,0.4)'  },
  { name: 'GQL',   color: '#E10098', glow: 'rgba(225,0,152,0.4)'   },
  { name: 'AI',    color: '#06B6D4', glow: 'rgba(6,182,212,0.4)'   },
];

// ─── CSS 3D Cube Component ────────────────────────────────────────────────────
function CSS3DCube({ size = 180 }) {
  return (
    <div style={{ width: size, height: size, perspective: `${size * 3}px` }} className="relative">
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'cube-rotate 20s linear infinite',
        }}
      >
        {/* Each face */}
        {[
          { label: 'React',  color: '#61DAFB', transform: `rotateY(0deg)   translateZ(${size/2}px)` },
          { label: 'Node',   color: '#68A063', transform: `rotateY(180deg)  translateZ(${size/2}px)` },
          { label: 'Next',   color: '#ffffff', transform: `rotateY(-90deg)  translateZ(${size/2}px)` },
          { label: 'TS',     color: '#3178C6', transform: `rotateY(90deg)   translateZ(${size/2}px)` },
          { label: 'AI',     color: '#06B6D4', transform: `rotateX(90deg)   translateZ(${size/2}px)` },
          { label: 'GQL',    color: '#E10098', transform: `rotateX(-90deg)  translateZ(${size/2}px)` },
        ].map((face) => (
          <div
            key={face.label}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              border: `1px solid ${face.color}44`,
              transform: face.transform,
              background: `radial-gradient(ellipse at center, ${face.color}08, transparent 70%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backdropFilter: 'blur(4px)',
            }}
          >
            {/* Corner accents */}
            {[
              { top: 0,    left: 0   },
              { top: 0,    right: 0  },
              { bottom: 0, left: 0   },
              { bottom: 0, right: 0  },
            ].map((pos, i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  width: 8, height: 8,
                  borderTop:    pos.top    !== undefined ? `2px solid ${face.color}88` : 'none',
                  borderBottom: pos.bottom !== undefined ? `2px solid ${face.color}88` : 'none',
                  borderLeft:   pos.left   !== undefined ? `2px solid ${face.color}88` : 'none',
                  borderRight:  pos.right  !== undefined ? `2px solid ${face.color}88` : 'none',
                  ...pos,
                  margin: 6,
                }}
              />
            ))}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: size * 0.12,
                fontWeight: 700,
                color: face.color,
                textShadow: `0 0 20px ${face.color}`,
                letterSpacing: '0.1em',
              }}
            >
              {face.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Radar / Scope SVG ────────────────────────────────────────────────────────
function RadarScope() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        width="500" height="500"
        viewBox="0 0 500 500"
        style={{ opacity: 0.18 }}
      >
        {[250,200,150,100,60].map(r => (
          <circle key={r} cx="250" cy="250" r={r} fill="none" stroke="#06B6D4" strokeWidth="0.8" />
        ))}
        {[0,45,90,135].map(a => {
          const rad = (a * Math.PI) / 180;
          return (
            <line key={a}
              x1={250 - Math.cos(rad) * 250} y1={250 - Math.sin(rad) * 250}
              x2={250 + Math.cos(rad) * 250} y2={250 + Math.sin(rad) * 250}
              stroke="#06B6D4" strokeWidth="0.6"
            />
          );
        })}
        {/* Sweep */}
        <g style={{ transformOrigin: '250px 250px', animation: 'radar-sweep 5s linear infinite' }}>
          <path
            d="M250,250 L250,0 A250,250 0 0,1 500,250 Z"
            fill="url(#radarGrad)"
            opacity="0.25"
          />
        </g>
        <defs>
          <radialGradient id="radarGrad" cx="0%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

// ─── Floating tech badge ──────────────────────────────────────────────────────
function TechBadge({ tech, delay, x, y }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: 'backOut' }}
      style={{ position: 'absolute', left: `${x}%`, top: `${y}%` }}
      className="absolute"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'rgba(8,15,32,0.85)',
          border: `1px solid ${tech.glow.replace('0.4', '0.5')}`,
          borderRadius: 10,
          padding: '6px 14px',
          display: 'flex', alignItems: 'center', gap: 7,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 0 20px ${tech.glow}`,
        }}
      >
        <span style={{
          width: 7, height: 7,
          borderRadius: '50%',
          background: tech.color,
          boxShadow: `0 0 8px ${tech.color}`,
          flexShrink: 0,
        }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: tech.color,
          fontWeight: 600,
          letterSpacing: '0.08em',
        }}>
          {tech.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

// ─── Main TechCubeSection ─────────────────────────────────────────────────────
export default function TechCubeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });

  const badgePositions = [
    { x: 5,  y: 15 }, { x: 75, y: 10 }, { x: 80, y: 70 },
    { x: 3,  y: 65 }, { x: 38, y: 5  }, { x: 42, y: 82 },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #060F1F 50%, #030712 100%)' }}
    >
      {/* Tron perspective grid */}
      <div className="tron-grid" />

      {/* Radar scope */}
      <RadarScope />

      {/* Beam lines */}
      <div className="beam-container">
        <div className="beam" style={{ left: '25%',  animationDelay: '0s'  }} />
        <div className="beam" style={{ left: '50%',  animationDelay: '2.5s' }} />
        <div className="beam" style={{ left: '75%',  animationDelay: '5s'  }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.25,0.46,0.45,0.94] }}
          >
            <span className="section-tag mb-6 inline-flex">
              ✦ Lo que obtienes
            </span>

            <h2
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className="block text-white mb-1">Tecnología que</span>
              <span
                className="block holo-text"
                style={{ fontSize: '1.1em' }}
              >
                trabaja por ti
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              No vendemos código. Entregamos{' '}
              <span className="text-white font-medium">sistemas que generan clientes, ventas y resultados</span>{' '}
              mientras tú te enfocas en tu negocio.
            </p>

            {/* Feature list */}
            {[
              { label: 'Tu web carga en menos de 1 segundo',  sub: 'Los clientes no esperan → no se van',        color: '#06B6D4' },
              { label: 'Disponible las 24 horas, los 7 días', sub: 'Tu negocio nunca cierra ni se cae',          color: '#8B5CF6' },
              { label: 'Inteligencia Artificial integrada',   sub: 'Chatbots, automatizaciones y más',           color: '#3B82F6' },
              { label: 'Datos y pagos 100% seguros',          sub: 'Certificado SSL · Cifrado de extremo a extremo', color: '#60A5FA' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 mb-4"
              >
                <div
                  style={{
                    width: 3,
                    minHeight: 36,
                    borderRadius: 2,
                    background: `linear-gradient(to bottom, ${item.color}, ${item.color}44)`,
                    boxShadow: `0 0 8px ${item.color}`,
                    flexShrink: 0,
                    marginTop: 4,
                  }}
                />
                <div>
                  <div className="font-display font-semibold text-white text-sm">{item.label}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: item.color, marginTop: 2 }}>
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { val: 'Rápido',    label: 'Carga en menos de 1 seg.',  color: '#06B6D4' },
                { val: 'Siempre',   label: 'Tu web nunca se cae',       color: '#8B5CF6' },
                { val: 'Seguro',    label: 'Datos 100% protegidos',     color: '#3B82F6' },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card rounded-2xl p-4 text-center"
                  style={{ border: `1px solid ${m.color}22` }}
                >
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '1.1rem',
                      fontWeight: 900,
                      color: m.color,
                      textShadow: `0 0 20px ${m.color}`,
                    }}
                  >
                    {m.val}
                  </div>
                  <div style={{ fontSize: 11, color: '#6B7280', marginTop: 4 }}>{m.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — 3D Cube + floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: [0.25,0.46,0.45,0.94] }}
            className="relative flex items-center justify-center"
            style={{ minHeight: 480 }}
          >
            {/* Glow center */}
            <div style={{
              position: 'absolute',
              width: 320, height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, rgba(59,130,246,0.08) 50%, transparent 70%)',
              filter: 'blur(30px)',
            }} />

            {/* Outer ring */}
            <div style={{
              position: 'absolute',
              width: 400, height: 400,
              borderRadius: '50%',
              border: '1px solid rgba(6,182,212,0.08)',
              animation: 'orbit-ring 25s linear infinite',
            }} />

            {/* CSS 3D Cube */}
            <CSS3DCube size={180} />

            {/* Floating tech badges */}
            {TECH_STACK.map((tech, i) => (
              <TechBadge
                key={tech.name}
                tech={tech}
                delay={0.4 + i * 0.15}
                x={badgePositions[i].x}
                y={badgePositions[i].y}
              />
            ))}

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2 }}
              style={{
                position: 'absolute',
                bottom: 20, right: 20,
                background: 'rgba(8,15,32,0.9)',
                border: '1px solid rgba(6,182,212,0.25)',
                borderRadius: 12,
                padding: '10px 16px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#00FF88',
                  boxShadow: '0 0 8px #00FF88',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: '#6EE7B7',
                  letterSpacing: '0.05em',
                }}>
                  Sistemas operativos
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 120,
          background: 'linear-gradient(to top, #030712, transparent)',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
