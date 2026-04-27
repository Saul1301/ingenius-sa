import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Store, Building2, Sparkles, ArrowRight } from 'lucide-react';

const profiles = [
  {
    icon: Store,
    emoji: '🚀',
    title: 'Emprendedor con visión',
    description: 'Tienes una idea que merece una presencia digital poderosa. Quieres destacar desde el primer día y convertir visitas en clientes reales.',
    tags: ['Landing page', 'Branding digital', 'WhatsApp integrado'],
    color: 'text-brand-gold',
    border: 'border-brand-gold/25',
    glow: 'rgba(245,166,35,0.15)',
    gradient: 'from-brand-gold/10 to-transparent',
  },
  {
    icon: Building2,
    emoji: '⚙️',
    title: 'Empresa que quiere escalar',
    description: 'Tu operación crece y los procesos manuales te frenan. Necesitas sistemas que automaticen, organicen y te liberen para lo que importa.',
    tags: ['Dashboards', 'Automatización', 'Sistemas a medida'],
    color: 'text-brand-cyan',
    border: 'border-brand-cyan/25',
    glow: 'rgba(0,212,255,0.15)',
    gradient: 'from-brand-cyan/10 to-transparent',
  },
  {
    icon: Sparkles,
    emoji: '🎯',
    title: 'Marca que quiere impactar',
    description: 'Tu marca merece una experiencia digital que emocione. Buscas diferenciarte con diseño premium, animaciones y una identidad que se recuerde.',
    tags: ['UI/UX premium', 'Animaciones', 'Identidad única'],
    color: 'text-purple-400',
    border: 'border-purple-500/25',
    glow: 'rgba(168,85,247,0.15)',
    gradient: 'from-purple-500/10 to-transparent',
  },
];

import SpotlightCard from './SpotlightCard';

export default function ForWhomSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-5 inline-flex">
            <Sparkles size={12} className="text-brand-gold" />
            ¿Para quién somos?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-5 mb-3 leading-tight">
            Soluciones a medida para{' '}
            <span className="gradient-text-gold">cada etapa de tu negocio</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Si te identificas con alguno de estos perfiles, sabemos exactamente cómo ayudarte.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <SpotlightCard
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`glass-card rounded-3xl border ${profile.border} p-7 min-h-[320px] group`}
                style={{ boxShadow: `0 0 30px ${profile.glow}` }}
                spotlightColor={profile.glow}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${profile.border}`}
                      style={{ background: profile.glow }}>
                      <Icon size={22} className={profile.color} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-3">{profile.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{profile.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {profile.tags.map((tag, j) => (
                      <span key={j} className={`text-xs px-2.5 py-1 rounded-full border ${profile.border} ${profile.color} opacity-80`}
                        style={{ background: profile.glow }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`flex items-center gap-1.5 text-xs font-semibold ${profile.color} opacity-70 hover:opacity-100 transition-opacity`}
                  >
                    Este soy yo → <ArrowRight size={11} />
                  </motion.button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
