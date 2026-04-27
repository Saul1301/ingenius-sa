import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, FileSearch, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Cuéntanos tu idea',
    description: 'Una conversación de 20 minutos es suficiente. Sin tecnicismos, sin compromisos. Solo tú explicándonos qué quieres lograr.',
    action: 'Agendar conversación →',
    color: 'text-brand-gold',
    border: 'border-brand-gold/25',
    glow: 'rgba(245,166,35,0.2)',
    gradient: 'from-brand-gold/10 to-transparent',
    lineColor: 'bg-brand-gold/30',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Recibes tu propuesta en menos de 24h',
    description: 'Evaluación técnica gratuita, alcance del proyecto, tecnologías recomendadas y precio claro — todo en menos de 24 horas. Sin sorpresas, sin letra pequeña.',
    action: 'Ver ejemplo de propuesta →',
    color: 'text-brand-cyan',
    border: 'border-brand-cyan/25',
    glow: 'rgba(0,212,255,0.2)',
    gradient: 'from-brand-cyan/10 to-transparent',
    lineColor: 'bg-brand-cyan/30',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Construimos y lanzamos',
    description: 'Desarrollo ágil con comunicación constante. Primera versión funcional en 7 días. Tú revisas, nosotros ajustamos. Hasta que quede perfecto.',
    action: 'Solicita tu presupuesto →',
    color: 'text-purple-400',
    border: 'border-purple-500/25',
    glow: 'rgba(168,85,247,0.2)',
    gradient: 'from-purple-500/10 to-transparent',
    lineColor: 'bg-purple-400/30',
  },
];

import SpotlightCard from './SpotlightCard';

export default function HowWeStartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="process" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />

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
            <Rocket size={12} className="text-brand-gold" />
            ¿Cómo empezamos?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-5 mb-3 leading-tight">
            De idea a sistema en{' '}
            <span className="gradient-text-cyan">3 pasos simples</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Sin procesos complicados. Sin esperas interminables. Así es como trabajamos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-brand-gold/20 via-brand-cyan/20 to-purple-400/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <SpotlightCard
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`glass-card rounded-3xl border ${step.border} p-7 group min-h-[350px]`}
                style={{ boxShadow: `0 0 30px ${step.glow}` }}
                spotlightColor={step.glow}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Step number + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-display font-black text-5xl ${step.color} opacity-15`}>{step.number}</span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${step.border}`}
                      style={{ background: step.glow }}>
                      <Icon size={22} className={step.color} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{step.description}</p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`mt-auto flex items-center gap-1.5 text-xs font-semibold ${step.color} opacity-60 hover:opacity-100 transition-opacity`}
                  >
                    {step.action}
                  </motion.button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-3"
          >
            Dar el primer paso
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
