import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Brain, 
  Shield, 
  Code2, 
  Network, 
  TerminalSquare, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  MessageCircle,
  Award,
  Terminal
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import CipherText from './CipherText';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const founders = [
  {
    name: 'Jeremy Acosta',
    avatarImg: '/jeremy.jpg',
    role: 'Co-Fundador & Ing. de Sistemas',
    quote: '«El éxito de tu entorno determina el propio.»',
    highlightLabel: 'Especialidad',
    highlightValue: 'Arquitectura Backend & Sistemas',
    location: 'Caracas, Venezuela',
    email: 'proyectos.ingeniussa@gmail.com',
    phoneFormatted: '+58 414-3977946',
    whatsappUrl: 'https://wa.me/584143977946?text=Hola%20Jeremy,%20quiero%20cotizar%20un%20proyecto%20con%20Ingenius%20SA',
    glow: 'rgba(6, 182, 212, 0.25)',
    border: 'border-brand-cyan/30',
    accentColor: 'text-brand-cyan',
    accentBg: 'bg-brand-cyan/10',
    tagColor: 'text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5',
    objectPosition: 'object-center',
    specialties: [
      'Análisis de Situación General & Diagnóstico',
      'Optimización de Operaciones Técnicas & Manuales',
      'Soporte Contable & Finanzas Operativas',
      'Modelado & Gestión de Bases de Datos'
    ]
  },
  {
    name: 'Saul Araujo',
    avatarImg: '/saul.jpg',
    role: 'Co-Fundador & Ing. de Sistemas',
    quote: '«El enfoque y la constancia determinan la calidad del resultado.»',
    highlightLabel: 'Especialidad',
    highlightValue: 'Estrategia Digital & Frontend',
    location: 'Caracas, Venezuela',
    email: 'proyectos.ingeniussa@gmail.com',
    phoneFormatted: '+58 424-2178791',
    whatsappUrl: 'https://wa.me/584242178791?text=Hola%20Saul,%20quiero%20cotizar%20un%20proyecto%20con%20Ingenius%20SA',
    glow: 'rgba(245, 166, 35, 0.25)',
    border: 'border-brand-gold/30',
    accentColor: 'text-brand-gold',
    accentBg: 'bg-brand-gold/10',
    tagColor: 'text-brand-gold border-brand-gold/20 bg-brand-gold/5',
    objectPosition: 'object-top',
    specialties: [
      'Marketing Digital & Estrategia de Crecimiento',
      'Desarrollo de Estética Digital & UX/UI',
      'Ciberseguridad & Protocolos de Encriptación',
      'Arquitectura de Redes & Sistemas Escalables'
    ]
  }
];

const pillars = [
  {
    icon: <Layers size={24} />,
    bgIcon: <Code2 size={120} strokeWidth={0.5} />,
    title: 'Arquitectura Limpia',
    desc: 'Código modular, escalable y sin deuda técnica. Diseñamos plataformas con bases de ingeniería sólidas preparadas para soportar alto volumen.',
    color: 'from-brand-gold/20 to-transparent',
    border: 'border-brand-gold/20',
    glow: 'rgba(245,166,35,0.15)',
    accent: 'text-brand-gold'
  },
  {
    icon: <Brain size={24} />,
    bgIcon: <Network size={120} strokeWidth={0.5} />,
    title: 'Automatización & Modelos IA',
    desc: 'Sistemas inteligentes integrados a tus procesos diarios para multiplicar la productividad y reducir costos operativos.',
    color: 'from-brand-cyan/20 to-transparent',
    border: 'border-brand-cyan/20',
    glow: 'rgba(0,212,255,0.15)',
    accent: 'text-brand-cyan'
  },
  {
    icon: <Shield size={24} />,
    bgIcon: <TerminalSquare size={120} strokeWidth={0.5} />,
    title: 'Seguridad & Protección de Datos',
    desc: 'Encriptación end-to-end, bases de datos blindadas y estándares rigurosos de protección de información sensible.',
    color: 'from-purple-500/20 to-transparent',
    border: 'border-purple-500/20',
    glow: 'rgba(168,85,247,0.15)',
    accent: 'text-purple-400'
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)',
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center relative">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-10 lg:-top-20 opacity-5 pointer-events-none"
          >
            <Cpu size={300} strokeWidth={0.2} className="text-brand-cyan" />
          </motion.div>

          <motion.span 
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="section-tag mb-6 inline-flex"
          >
            <GraduationCap size={14} />
            Equipo & Visión
          </motion.span>
          
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-4 mb-6 leading-[1.1] text-center max-w-4xl mx-auto"
          >
            Ingeniería de vanguardia respaldada por <span className="gradient-text-main">mentes analíticas</span>.
          </motion.h2>

          <motion.p 
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mt-2 text-center"
          >
            Somos un equipo de <strong>Ingenieros de Sistemas</strong> con sede en Caracas, Venezuela. Fusionamos pensamiento lógico riguroso, innovación estética y arquitectura de software para construir plataformas digitales que escalan negocios reales.
          </motion.p>
        </div>

        {/* ─── FOUNDERS CARDS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {founders.map((founder, idx) => (
            <SpotlightCard
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`glass-card rounded-3xl p-8 sm:p-10 border ${founder.border} relative overflow-hidden flex flex-col justify-between group`}
              style={{
                boxShadow: `0 0 40px ${founder.glow}`,
              }}
              spotlightColor={founder.glow}
            >
              {/* Background gradient highlight */}
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
                style={{ background: founder.accentColor.includes('cyan') ? '#00D4FF' : '#F5A623' }}
              />

              <div className="relative z-10">
                {/* Header card: Photo + Name + Badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-5">
                    {/* Founder Avatar with neon ring & shine effect */}
                    <div className="relative flex-shrink-0 group/photo">
                      <div 
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-[2px] relative transition-transform duration-500 group-hover/photo:scale-105"
                        style={{
                          background: founder.accentColor.includes('cyan')
                            ? 'linear-gradient(135deg, #00D4FF, rgba(0,212,255,0.2), #60A5FA)'
                            : 'linear-gradient(135deg, #F5A623, rgba(245,166,35,0.2), #FB923C)',
                          boxShadow: `0 0 25px ${founder.glow}`
                        }}
                      >
                        <img 
                          src={founder.avatarImg} 
                          alt={founder.name}
                          className={`w-full h-full object-cover ${founder.objectPosition || 'object-center'} rounded-[14px]`}
                        />
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0A1628] shadow-[0_0_8px_#22c55e]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[11px] font-mono font-bold tracking-wider uppercase ${founder.accentColor}`}>
                          Fundador Activo
                        </span>
                      </div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                        {founder.name}
                      </h3>
                      <p className="text-gray-400 font-medium text-xs sm:text-sm mt-0.5">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-xs text-gray-300 self-start sm:self-auto">
                    <MapPin size={13} className={founder.accentColor} />
                    <span>{founder.location}</span>
                  </div>
                </div>

                {/* Professional Highlights */}
                <div className="mb-6 bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl ${founder.accentBg} flex items-center justify-center flex-shrink-0`}>
                    <Terminal size={20} className={founder.accentColor} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">{founder.highlightLabel}</div>
                    <div className="text-sm font-semibold text-white">{founder.highlightValue}</div>
                  </div>
                </div>

                {/* Founder Quote */}
                <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border-l-2 border-white/20">
                  <p className="text-sm italic text-gray-300 font-serif leading-relaxed">
                    {founder.quote}
                  </p>
                </div>

                {/* Core Competencies / Specialties */}
                <div className="mb-8">
                  <span className="text-xs font-mono tracking-widest uppercase text-gray-500 block mb-3">
                    Áreas de Dominio Técnico
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {founder.specialties.map((spec, sIdx) => (
                      <div 
                        key={sIdx}
                        className="flex items-start gap-2 text-xs text-gray-300 bg-white/[0.03] border border-white/5 rounded-xl p-2.5"
                      >
                        <CheckCircle2 size={14} className={`${founder.accentColor} flex-shrink-0 mt-0.5`} />
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Contact Buttons */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex gap-3">
                <a
                  href={`mailto:${founder.email}`}
                  className="flex-grow flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
                >
                  <Mail size={14} className={founder.accentColor} />
                  <span className="truncate">{founder.email}</span>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* ─── TECHNICAL PILLARS ─── */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-gray-500 block mb-2">
            Metodología & Calidad
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            Nuestros Pilares de Construcción
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {pillars.map((cred, i) => (
            <SpotlightCard
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`glass-card rounded-2xl p-8 lg:p-10 border ${cred.border} border-t-4 group overflow-hidden`}
              style={{ 
                boxShadow: `0 0 40px ${cred.glow}`,
                borderTopColor: cred.glow.replace('0.15', '0.5')
              }}
              spotlightColor={cred.glow}
            >
              {/* Background large icon */}
              <div className={`absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 ${cred.accent} transform group-hover:scale-110 group-hover:-rotate-12`}>
                {cred.bgIcon}
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${cred.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative z-10 mb-8">
                <div className={`w-14 h-14 rounded-xl glass-card flex items-center justify-center text-white border border-white/5 ${cred.accent}`}>
                  {cred.icon}
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">
                  Pilar 0{i + 1}
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3 leading-tight">{cred.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cred.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}

