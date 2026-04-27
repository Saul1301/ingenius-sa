import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const words = ['Cada', 'proyecto', 'tiene', 'un', 'alma', 'única.'];

export default function PhilosophyQuote() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden flex items-center justify-center"
    >
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-brand-cyan/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Horizontal lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Nuestra Filosofía
          </span>
        </motion.div>

        {/* Animated word-by-word reveal */}
        <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={isInView
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`inline-block mr-4 ${
                word === 'alma' ? 'gradient-text-main' :
                word === 'única.' ? 'gradient-text-gold' :
                'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          No usamos plantillas. No copiamos fórmulas.{' '}
          <span className="text-white font-medium">
            Escuchamos, entendemos y construimos
          </span>{' '}
          una solución que nació para ti — y solo para ti.
        </motion.p>

        {/* Decorative line with dot */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.1, ease: 'easeOut' }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          <div className="flex-1 max-w-32 h-px bg-gradient-to-r from-transparent to-brand-gold/50" />
          <div className="w-2 h-2 rounded-full bg-brand-gold" />
          <span className="text-xs font-mono text-gray-600 tracking-widest uppercase">
            Ingenius SA · Est. 2025
          </span>
          <div className="w-2 h-2 rounded-full bg-brand-cyan" />
          <div className="flex-1 max-w-32 h-px bg-gradient-to-l from-transparent to-brand-cyan/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
