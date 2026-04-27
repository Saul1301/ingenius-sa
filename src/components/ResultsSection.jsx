import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Users, Zap } from 'lucide-react';

const results = [
  {
    number: '3×',
    label: 'Más conversiones',
    sublabel: 'vs. sitio anterior',
    description: 'Nuestros sites no son bonitos por accidente. Están diseñados con psicología de conversión.',
    icon: TrendingUp,
    iconColor: 'text-brand-gold',
    numberColor: 'gradient-text-gold',
    glow: 'rgba(245,166,35,0.2)',
    border: 'border-brand-gold/20',
  },
  {
    number: '<1s',
    label: 'Tiempo de carga',
    sublabel: 'promedio real',
    description: 'Google premia la velocidad. Nosotros la obsesionamos. Cada milisegundo importa.',
    icon: Zap,
    iconColor: 'text-brand-cyan',
    numberColor: 'gradient-text-cyan',
    glow: 'rgba(0,212,255,0.2)',
    border: 'border-brand-cyan/20',
  },
  {
    number: '7d',
    label: 'Entrega garantizada',
    sublabel: 'en proyectos estándar',
    description: 'No vendemos tiempo. Vendemos resultados. Primera versión funcional en 7 días.',
    icon: Clock,
    iconColor: 'text-purple-400',
    numberColor: 'from-purple-400 to-purple-300',
    glow: 'rgba(168,85,247,0.2)',
    border: 'border-purple-500/20',
    customGradient: true,
  },
  {
    number: '∞',
    label: 'Escalabilidad',
    sublabel: 'sin límite de tráfico',
    description: 'Desde 10 hasta 10 millones de visitantes. Nuestra arquitectura crece contigo.',
    icon: Users,
    iconColor: 'text-brand-gold',
    numberColor: 'gradient-text-main',
    glow: 'rgba(245,166,35,0.15)',
    border: 'border-brand-gold/15',
  },
];

function ResultCard({ result, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = result.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`relative glass-card rounded-3xl border ${result.border} p-8 overflow-hidden group`}
      style={{ boxShadow: `0 0 40px ${result.glow}` }}
    >
      {/* Ambient glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${result.glow}, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 border ${result.border}`}
          style={{ background: result.glow }}>
          <Icon size={18} className={result.iconColor} />
        </div>

        {/* Giant number */}
        <div className={`font-display font-black text-6xl lg:text-7xl xl:text-8xl leading-none mb-3 ${
          result.customGradient
            ? `bg-gradient-to-br ${result.numberColor} bg-clip-text text-transparent`
            : result.numberColor
        }`}
          style={result.customGradient ? {
            backgroundImage: `linear-gradient(135deg, #c084fc, #a855f7)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          } : {}}
        >
          {result.number}
        </div>

        {/* Label */}
        <p className="font-display font-bold text-xl text-white mb-0.5">{result.label}</p>
        <p className={`text-xs font-mono tracking-widest uppercase mb-4 ${result.iconColor} opacity-60`}>
          {result.sublabel}
        </p>

        {/* Divider */}
        <div className="w-10 h-px mb-4" style={{ background: result.glow.replace('0.2', '0.6').replace('0.15', '0.5') }} />

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{result.description}</p>
      </div>
    </motion.div>
  );
}

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-gradient-to-b from-transparent via-brand-dark-2/40 to-transparent">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">
            <TrendingUp size={12} className="text-brand-gold" />
            Resultados Comprobados
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-white mt-6 mb-6 leading-tight">
            Números que{' '}
            <span className="gradient-text-main">no mienten</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No prometemos. Entregamos métricas reales que transforman la operación de tu negocio.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((result, i) => (
            <ResultCard key={i} result={result} index={i} />
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg sm:text-xl font-display font-light text-gray-400 max-w-2xl mx-auto">
            Cada proyecto es una{' '}
            <span className="text-white font-semibold">inversión</span>, no un gasto.
            El ROI promedio de nuestros clientes es{' '}
            <span className="gradient-text-gold font-bold">visible en el primer mes.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
