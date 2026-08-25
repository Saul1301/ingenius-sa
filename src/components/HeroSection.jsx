import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Rocket, Clock, Star, Lock } from 'lucide-react';
import MagneticButton from './MagneticButton';
import TypingTerminal from './TypingTerminal';
import HeroCube from './HeroCube';

// ─── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const isFloat = String(target).includes('.');
    const numericTarget = parseFloat(target);
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(isFloat ? (eased * numericTarget).toFixed(1) : Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, index, visible }) {
  const count = useCountUp(stat.numeric, 1600 + index * 150, visible);
  const Icon = stat.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      className="glass-card rounded-2xl p-4 text-center border border-white/5 relative overflow-hidden group"
      style={{ boxShadow: `0 0 20px ${stat.glow}` }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at center, ${stat.glow}, transparent 70%)` }} />
      <div className="relative z-10">
        <Icon size={13} className={`${stat.color} mx-auto mb-2 opacity-60`} />
        <div className={`font-display font-black text-xl sm:text-2xl ${stat.color} mb-0.5`}>
          {stat.prefix}{count}{stat.suffix}
        </div>
        <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
      </div>
    </motion.div>
  );
}

// ─── Animated mesh/gradient orb ──────────────────────────────────────────────
function GlowOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Central massive orb — blue */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.13) 0%, rgba(59,130,246,0.08) 50%, transparent 75%)',
          filter: 'blur(50px)',
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      />
      {/* Secondary — violet */}
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute w-[900px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 40% 60%, rgba(139,92,246,0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
      />
      {/* Tertiary — blue bright spot top-right */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          right: '-10%', top: '-20%',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  );
}

// ─── Floating MacBook ─────────────────────────────────────────────────────────
function FloatingMacBook() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.2, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-lg mx-auto"
      style={{ perspective: '1200px' }}
    >
      {/* Floating animation */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Glow underneath */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.35) 0%, transparent 70%)' }}
        />

        {/* MacBook image */}
        <img
          src="/macbook-mockup.png"
          alt="Ingenius SA — Tech Preview"
          className="w-full h-auto object-contain drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 30px 60px rgba(0,212,255,0.25)) drop-shadow(0 0 80px rgba(245,166,35,0.1))',
          }}
        />

        {/* Floating badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-4 -right-2 glass-card border border-brand-gold/30 rounded-xl px-3 py-2 flex items-center gap-2 text-xs"
          style={{ background: 'rgba(245,166,35,0.08)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-brand-gold font-semibold">Deploy exitoso</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-2 -left-4 glass-card border border-brand-cyan/30 rounded-xl px-3 py-2 flex items-center gap-2 text-xs"
          style={{ background: 'rgba(0,212,255,0.06)' }}
        >
          <span className="text-brand-cyan">⚡</span>
          <span className="text-white font-semibold">IA Activada</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

import CipherText from './CipherText';

// ─── Main component ───────────────────────────────────────────────────────────
export default function HeroSection() {
  const [statsVisible, setStatsVisible] = useState(false);

  const stats = [
    { numeric: 27,  prefix: '+', suffix: '',   label: 'Proyectos entregados',    icon: Rocket, color: 'text-brand-blue-light', glow: 'rgba(59,130,246,0.25)'   },
    { numeric: 3,   prefix: '',  suffix: ' países', label: 'Clientes internacionales', icon: Star,   color: 'text-brand-cyan',       glow: 'rgba(6,182,212,0.25)'   },
    { numeric: 4.9, prefix: '',  suffix: '★',   label: 'Satisfacción cliente',   icon: Clock,  color: 'text-brand-violet-light', glow: 'rgba(139,92,246,0.25)'  },
    { numeric: 100, prefix: '',  suffix: '%',   label: 'Código exclusivo tuyo',  icon: Lock,   color: 'text-brand-cyan',         glow: 'rgba(6,182,212,0.25)'   },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Hero Cube 3D — background */}
      <HeroCube />

      {/* Animated glow orb */}
      <GlowOrb />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        
        {/* Center Grand Logo — Futuristic HD Oval Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center mb-10 relative"
        >
          <div className="relative group cursor-pointer">
            {/* Outer Ambient Oval Pulsing Aura */}
            <div 
              className="absolute -inset-4 sm:-inset-6 rounded-[50%] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.5) 0%, rgba(59,130,246,0.3) 50%, rgba(139,92,246,0.2) 80%, transparent 100%)',
              }}
            />
            
            {/* Glass Oval Frame with glowing border */}
            <div className="relative p-2 sm:p-3 rounded-[50%] border-2 border-cyan-400/40 bg-gradient-to-b from-white/10 via-black/40 to-black/80 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.4),inset_0_0_20px_rgba(6,182,212,0.2)] group-hover:border-cyan-400/80 group-hover:shadow-[0_0_60px_rgba(6,182,212,0.7)] transition-all duration-500">
              <img
                src="/logo-oval-hd.png"
                alt="Ingenius SA"
                className="w-44 sm:w-56 md:w-64 lg:w-72 h-auto object-contain rounded-[50%] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Urgency chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-brand-cyan/30 text-sm font-medium"
            style={{ background: 'rgba(6,182,212,0.06)' }}
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
            </span>
            <span className="text-brand-cyan font-semibold uppercase tracking-wider text-[10px]">
              <CipherText text="Pocos cupos disponibles" delay={800} />
            </span>
            <span className="text-gray-600 hidden sm:inline">·</span>
            <span className="text-gray-400 hidden sm:inline uppercase text-[10px] tracking-widest">
               <CipherText text="Este mes" delay={1200} />
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-black leading-[1.06] tracking-tight mb-7"
        >
          <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-1 opacity-95">
            Tu negocio merece
          </span>
          <span
            className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl pb-4 leading-normal"
            style={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #06B6D4 45%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(6,182,212,0.3))',
            }}
          >
            tecnología de élite.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Diseñamos, desarrollamos y desplegamos sistemas web con IA que{' '}
          <span className="text-white font-medium">generan resultados reales</span>
          {' '}— no solo una bonita apariencia.
        </motion.p>

        {/* Typing terminal — centered */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10 w-full max-w-2xl mx-auto flex justify-center text-left"
        >
          <TypingTerminal />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <MagneticButton>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-3 group px-10 py-5 text-base"
            >
              <Sparkles size={17} className="opacity-80" />
              <CipherText text="Cuéntanos tu idea" delay={1500} />
              <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </MagneticButton>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-9 py-5 rounded-full text-sm font-semibold text-gray-400 hover:text-white border border-white/10 hover:border-white/25 transition-all duration-300 bg-white/3 hover:bg-white/8"
          >
            <CipherText text="Ver nuestros servicios" delay={1800} />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15 }}
          onAnimationComplete={() => setStatsVisible(true)}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} visible={statsVisible} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs font-mono text-gray-700 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ChevronDown size={18} className="text-brand-cyan opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
