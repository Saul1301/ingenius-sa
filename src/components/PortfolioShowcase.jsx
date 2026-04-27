import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, LayoutDashboard, Bot, ArrowRight, Tag } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// 🖼️  CONFIGURA TUS PROYECTOS AQUÍ
//     image: ruta relativa a /public  (ej. '/projects/mi-proyecto.png')
//     Deja image: null para usar el mockup simulado mientras no tengas imagen
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 'despertar-171',
    tag: 'Landing · Bienestar Espiritual',
    title: 'Despertar 171',
    soul: 'Un alma que sana merece una presencia digital que inspire. Diseñamos la paz que el cliente transmite.',
    description: 'Plataforma de sanación y coaching espiritual. Landing page inmersiva con sistema de reservas directo por WhatsApp, paleta profunda y comunicación que conecta desde el primer scroll.',
    result: 'Reservas automáticas 24/7',
    resultColor: 'text-purple-400',
    icon: Globe,
    iconColor: 'text-purple-400',
    border: 'border-purple-500/25',
    glow: 'rgba(168,85,247,0.18)',
    glowHover: 'rgba(168,85,247,0.45)',
    gradient: 'from-purple-500/15 via-purple-500/5 to-transparent',
    dotGradient: 'from-purple-400 to-violet-300',
    barColor: '#a855f7',
    image: '/1.png',
    imageAlt: 'Despertar 171 — Plataforma de Bienestar',
    cards: ['bg-purple-500/20', 'bg-purple-500/10', 'bg-violet-500/10'],
    lines: [],
  },
  {
    id: 'all-for-cars',
    tag: 'Web · Automotriz',
    title: 'All For Cars',
    soul: 'El poder de un motor merece una web igual de potente. Cada servicio, presentado con la precisión de un taller de élite.',
    description: 'Sitio web premium para taller automotriz multiservicios. Diseño oscuro e impactante con showcase de servicios interactivo, galería Antes/Después y cotizador integrado.',
    result: 'Presencia digital de alta gama',
    resultColor: 'text-brand-gold',
    icon: LayoutDashboard,
    iconColor: 'text-brand-gold',
    border: 'border-brand-gold/25',
    glow: 'rgba(245,166,35,0.18)',
    glowHover: 'rgba(245,166,35,0.45)',
    gradient: 'from-brand-gold/15 via-brand-gold/5 to-transparent',
    dotGradient: 'from-brand-gold to-amber-300',
    barColor: '#F5A623',
    image: '/2.png',
    imageAlt: 'All For Cars — Taller Automotriz Premium',
    cards: ['bg-brand-gold/20', 'bg-brand-gold/10', 'bg-amber-500/10'],
    lines: [],
  },
  {
    id: 'numerologo-eli',
    tag: 'Plataforma · IA & Numerología',
    title: 'Numerólogo Eli',
    soul: 'Los números tienen lenguaje propio. Construimos la plataforma que lo traduce — con lógica, datos e inteligencia.',
    description: 'Plataforma completa con Acceso VIP, sistema de pronósticos numéricos, integración con app móvil, panel de suscriptores protegido y generación de contenido inteligente. Todo construido desde cero.',
    result: 'Plataforma VIP multicanal',
    resultColor: 'text-brand-cyan',
    icon: Bot,
    iconColor: 'text-brand-cyan',
    border: 'border-brand-cyan/25',
    glow: 'rgba(0,212,255,0.18)',
    glowHover: 'rgba(0,212,255,0.45)',
    gradient: 'from-brand-cyan/15 via-brand-cyan/5 to-transparent',
    dotGradient: 'from-brand-cyan to-sky-300',
    barColor: '#00D4FF',
    image: '/3.png',
    imageAlt: 'Numerólogo Eli — Plataforma de Inteligencia Numérica',
    cards: ['bg-brand-cyan/20', 'bg-brand-cyan/10', 'bg-sky-500/10'],
    lines: [],
  },
];

// Simulated browser mockup (used when no image is provided)
function SimulatedScreen({ project }) {
  return (
    <div className="p-5 space-y-3" style={{ minHeight: '170px' }}>
      <div className="flex gap-2 mb-4">
        {project.cards.map((c, i) => (
          <div key={i} className={`flex-1 h-14 rounded-xl ${c} border border-white/5`} />
        ))}
      </div>
      {project.lines.map((line, i) => (
        <div key={i} className={`${line.h} ${line.color} rounded-md`} style={{ width: line.w }} />
      ))}
    </div>
  );
}

// Real image inside browser frame
function ImageScreen({ project }) {
  return (
    <div className="overflow-hidden" style={{ maxHeight: '200px' }}>
      <img
        src={project.image}
        alt={project.imageAlt}
        className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        style={{ maxHeight: '200px' }}
      />
    </div>
  );
}

function BrowserMockup({ project }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/10"
      style={{ background: 'rgba(5,10,20,0.95)', boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8"
        style={{ background: 'rgba(10,22,40,0.95)' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 rounded-md text-xs font-mono"
          style={{ background: 'rgba(255,255,255,0.05)', color: project.barColor + 'AA' }}>
          ingenius.dev/{project.id}
        </div>
      </div>
      {/* Content: real image or simulated */}
      {project.image ? <ImageScreen project={project} /> : <SimulatedScreen project={project} />}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`group relative glass-card rounded-3xl border ${project.border} overflow-hidden flex flex-col`}
      style={{
        boxShadow: hovered
          ? `0 0 60px ${project.glowHover}, 0 0 120px ${project.glow}`
          : `0 0 30px ${project.glow}`,
        transition: 'box-shadow 0.4s ease',
      }}
    >
      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Scan line on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'linear', repeat: Infinity }}
            className="absolute left-0 right-0 h-px pointer-events-none z-20"
            style={{ background: `linear-gradient(to right, transparent, ${project.glowHover}, transparent)` }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 p-7 flex flex-col h-full">
        {/* Tag & Icon */}
        <div className="flex items-center justify-between mb-5">
          <span className={`text-xs font-mono tracking-widest uppercase ${project.iconColor} opacity-70 border border-current/20 rounded-full px-3 py-1 flex items-center gap-1.5`}>
            <Tag size={10} />
            {project.tag}
          </span>
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center border ${project.border}`}
            style={{ background: project.glow }}
          >
            <Icon size={18} className={project.iconColor} />
          </motion.div>
        </div>

        {/* Browser Mockup */}
        <div className="mb-6">
          <BrowserMockup project={project} />
        </div>

        {/* Soul / Philosophy line */}
        <div className={`border-l-2 pl-3 mb-4`} style={{ borderColor: project.barColor + '60' }}>
          <p className="text-xs text-gray-400 italic leading-relaxed">"{project.soul}"</p>
        </div>

        {/* Title & Description */}
        <h3 className="font-display font-bold text-xl text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Result badge + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className={`flex items-center gap-2 text-sm font-bold ${project.resultColor}`}>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.dotGradient} animate-pulse`} />
            {project.result}
          </div>
          <motion.button
            whileHover={{ x: 4 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`flex items-center gap-1.5 text-xs ${project.iconColor} hover:opacity-100 opacity-60 transition-opacity font-semibold`}
          >
            Quiero esto <ArrowRight size={12} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">
            <ExternalLink size={12} />
            Proyectos Reales
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-6 mb-4 leading-tight">
            El trabajo{' '}
            <span className="gradient-text-cyan">habla por sí solo</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Cada solución tiene su propia historia. Así es como transformamos negocios reales.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm mb-5 font-mono tracking-wide">
            ¿Tu proyecto podría ser el próximo caso de éxito?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-3"
          >
            Hablemos de tu idea
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
