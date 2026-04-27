import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Brain, Shield, Cpu, Code2, Network, TerminalSquare } from 'lucide-react';
import RevealText from './RevealText';
import SpotlightCard from './SpotlightCard';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const credentials = [
  {
    icon: <Layers size={24} />,
    bgIcon: <Code2 size={120} strokeWidth={0.5} />,
    title: 'Arquitectura Limpia',
    desc: 'Código modular, escalable y sin deudas técnicas. Construimos pensando en el futuro brillante de tu startup.',
    color: 'from-brand-gold/20 to-transparent',
    border: 'border-brand-gold/20',
    glow: 'rgba(245,166,35,0.15)',
    accent: 'text-brand-gold'
  },
  {
    icon: <Brain size={24} />,
    bgIcon: <Network size={120} strokeWidth={0.5} />,
    title: 'Modelos Inteligentes',
    desc: 'Bases de datos vectoriales y redes neuronales conectadas directamente a tu flujo de trabajo para automatizar todo.',
    color: 'from-brand-cyan/20 to-transparent',
    border: 'border-brand-cyan/20',
    glow: 'rgba(0,212,255,0.15)',
    accent: 'text-brand-cyan'
  },
  {
    icon: <Shield size={24} />,
    bgIcon: <TerminalSquare size={120} strokeWidth={0.5} />,
    title: 'Seguridad Militar',
    desc: 'Encriptación end-to-end, protección contra inyección SQL y protocolos de autenticación impenetrables.',
    color: 'from-purple-500/20 to-transparent',
    border: 'border-purple-500/20',
    glow: 'rgba(168,85,247,0.15)',
    accent: 'text-purple-400'
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background decorations - Matrix/Circuit feel */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 60%)',
      }} />
      <div className="absolute left-0 top-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/10 to-transparent flex items-center">
        <motion.div 
            className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#00D4FF]"
            animate={{ x: ['0vw', '100vw'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute left-0 top-3/4 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent flex items-center">
        <motion.div 
            className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#F5A623]"
            animate={{ x: ['100vw', '0vw'] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center relative">
          
          {/* Subtle spinning core behind text */}
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
            <Cpu size={12} />
            El Motor Técnico
          </motion.span>
          
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-6 mb-6 leading-[1.1] justify-center text-center max-w-4xl mx-auto"
          >
            No somos una <span className="text-gray-500">agencia más</span>.<br/>Somos <span className="gradient-text-gold drop-shadow-[0_0_15px_rgba(245,166,35,0.3)]">Creadores</span>.
          </motion.h2>

          <motion.p 
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mt-4"
          >
            Cada línea de código que escribimos está respaldada por ingeniería pesada, pensamiento sistémico y la potencia de la inteligencia artificial moderna.
          </motion.p>
        </div>

        {/* The Connection Line container */}
        <div className="relative">
          {/* Animated data line connecting cards (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/5 z-0">
            <motion.div 
              className="absolute top-0 left-0 h-full w-[150px] blur-[2px]"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.8), transparent)' }}
              animate={{ left: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {credentials.map((cred, i) => (
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
                {/* Massive faded background icon */}
                <div className={`absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 ${cred.accent} transform group-hover:scale-110 group-hover:-rotate-12`}>
                  {cred.bgIcon}
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${cred.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Connector dot for the line */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#050A14] border border-white/10 z-20">
                  <div className={`w-full h-full rounded-full ${cred.accent.replace('text-', 'bg-')} opacity-50`} />
                </div>

                <div className="relative z-10 mb-12">
                  <div className={`w-14 h-14 rounded-xl glass-card flex items-center justify-center mb-6 text-white border border-white/5 ${cred.accent}`}>
                    {cred.icon}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">
                    Pilar 0{i + 1}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-4 leading-tight">{cred.title}</h3>
                  <p className="text-gray-400 text-sm leading-loose">{cred.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
