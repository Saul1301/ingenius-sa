import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, LayoutDashboard, Bot, ArrowRight, Sparkles, BarChart3, Lock } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const services = [
  {
    id: 'smart-landings',
    icon: Globe,
    label: '01',
    name: 'Smart Landings',
    tagline: 'Webs de Alto Impacto',
    description:
      'Diseñamos landing pages y sitios web que convierten visitantes en clientes. UX/UI premium, optimización SEO, animaciones y performance técnico de élite.',
    features: ['Diseño UI/UX Exclusivo', 'Animaciones Framer Motion', 'SEO & Performance', 'Analytics Integrado'],
    gradient: 'from-brand-gold/20 via-brand-gold/5 to-transparent',
    border: 'border-brand-gold/30',
    glowColor: 'rgba(245,166,35,0.35)',
    glowHover: 'rgba(245,166,35,0.6)',
    iconColor: 'text-brand-gold',
    accentBg: 'bg-brand-gold/10',
    dotColor: 'bg-brand-gold',
  },
  {
    id: 'nexus-systems',
    icon: LayoutDashboard,
    label: '02',
    name: 'Nexus Systems',
    tagline: 'Dashboards & Gestión a Medida',
    description:
      'Sistemas de gestión empresarial, dashboards analíticos y paneles administrativos construidos con arquitectura escalable y segura para tu operación.',
    features: ['Dashboards en Tiempo Real', 'Gestión de Usuarios & Roles', 'APIs REST Seguras', 'Base de Datos Optimizada'],
    gradient: 'from-brand-cyan/20 via-brand-cyan/5 to-transparent',
    border: 'border-brand-cyan/30',
    glowColor: 'rgba(0,212,255,0.3)',
    glowHover: 'rgba(0,212,255,0.55)',
    iconColor: 'text-brand-cyan',
    accentBg: 'bg-brand-cyan/10',
    dotColor: 'bg-brand-cyan',
  },
  {
    id: 'genius-intelligence',
    icon: Bot,
    label: '03',
    name: 'Genius Intelligence',
    tagline: 'IA & Automatización',
    description:
      'Integra inteligencia artificial a tu negocio: chatbots entrenados, modelos predictivos, automatización de procesos y análisis de datos con Python & ML.',
    features: ['Chatbots con LLM', 'Modelos Predictivos', 'Automatización RPA', 'Procesamiento de Datos'],
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
    border: 'border-purple-500/30',
    glowColor: 'rgba(168,85,247,0.3)',
    glowHover: 'rgba(168,85,247,0.55)',
    iconColor: 'text-purple-400',
    accentBg: 'bg-purple-500/10',
    dotColor: 'bg-purple-400',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <SpotlightCard
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`glass-card rounded-3xl border ${service.border} p-8 lg:p-10 group cursor-default`}
      style={{
        boxShadow: hovered
          ? `0 0 60px ${service.glowHover}, 0 0 120px ${service.glowColor}, inset 0 0 40px ${service.glowColor}`
          : `0 0 20px ${service.glowColor}`,
        transition: 'box-shadow 0.4s ease',
      }}
      spotlightColor={service.glowColor}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-60'}`} />

      {/* Scan line effect on hover */}
      {hovered && (
        <motion.div
          initial={{ top: '-2px' }}
          animate={{ top: '102%' }}
          transition={{ duration: 1.5, ease: 'linear', repeat: Infinity }}
          className="absolute left-0 right-0 h-px pointer-events-none z-20"
          style={{ background: `linear-gradient(to right, transparent, ${service.glowHover}, transparent)` }}
        />
      )}

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${service.accentBg} rounded-bl-3xl transition-all duration-500 ${hovered ? 'opacity-100' : 'opacity-50'}`} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className={`w-14 h-14 rounded-2xl ${service.accentBg} border ${service.border} flex items-center justify-center`}>
            <Icon size={26} className={service.iconColor} />
          </div>
          <span className={`font-display font-black text-4xl ${service.iconColor} opacity-20`}>{service.label}</span>
        </div>

        {/* Title */}
        <div className="mb-2">
          <span className={`text-xs font-mono tracking-widest uppercase ${service.iconColor} opacity-70`}>{service.tagline}</span>
        </div>
        <h3 className="font-display font-black text-2xl lg:text-3xl text-white mb-4">{service.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-8">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
              <span className={`w-1.5 h-1.5 rounded-full ${service.dotColor} flex-shrink-0`} />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ x: 5 }}
          onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          className={`flex items-center gap-2 text-sm font-semibold ${service.iconColor} group/btn`}
        >
          Solicitar Servicio
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </SpotlightCard>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-brand-cyan/30 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-px h-20 bg-gradient-to-t from-brand-gold/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-tag mb-6 inline-flex">
            <Sparkles size={12} />
            Nuestros Servicios
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-white mt-6 mb-6 leading-tight">
            Soluciones que{' '}
            <span className="gradient-text-main">generan resultados</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Tres pilares de innovación diseñados para llevar tu negocio al siguiente nivel tecnológico.
          </p>
          {/* Price anchor */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-gold/30 text-sm"
            style={{ background: 'rgba(245,166,35,0.06)' }}>
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-gray-400">Proyectos desde{' '}</span>
            <span className="text-brand-gold font-bold">$150 USD</span>
            <span className="text-gray-600 mx-1">·</span>
            <span className="text-gray-400">propuesta sin costo en{' '}</span>
            <span className="text-white font-semibold">&lt;24h</span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Guarantee & Risk Reversal Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative glass-card border border-brand-gold/20 rounded-3xl p-1 overflow-hidden max-w-4xl mx-auto">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/30 to-brand-cyan/0 animate-shimmer" />
            
            <div className="relative bg-[#0A1628] rounded-[22px] px-8 py-8 sm:px-12 sm:py-10 flex flex-col sm:flex-row items-center gap-8 lg:gap-12 text-left">
              
              {/* Left: Shield Icon */}
              <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <Lock size={36} className="text-brand-gold" />
              </div>

              {/* Center: The Guarantee text */}
              <div className="flex-1">
                <h4 className="font-display font-bold text-2xl text-white mb-2">Garantía <span className="text-brand-gold">Cero Riesgo</span></h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  El mayor riesgo al contratar desarrollo web es quedar abandonado. Nosotros garantizamos <strong className="text-gray-200">soporte técnico gratuito por 30 días</strong> post-lanzamiento. Si algo falla o no carga a la velocidad prometida, lo arreglamos gratis.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-brand-gold"><CheckCircle2 size={14}/> 100% de propiedad del código</span>
                  <span className="flex items-center gap-1.5 text-brand-cyan"><CheckCircle2 size={14}/> Rendimiento A+ garantizado</span>
                </div>
              </div>

              {/* Right: Price block */}
              <div className="sm:border-l border-white/10 sm:pl-8 flex flex-col items-center sm:items-start flex-shrink-0">
                <span className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-2">Inversión Base</span>
                <div className="flex items-start gap-1">
                  <span className="text-lg text-brand-gold font-bold mt-1">$</span>
                  <span className="font-display font-black text-5xl text-white">150</span>
                </div>
                <span className="text-xs text-gray-500 mt-2 bg-white/5 px-3 py-1 rounded-full">Pago único / Sin ataduras</span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
