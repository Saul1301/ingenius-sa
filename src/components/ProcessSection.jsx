import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Palette, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico & Estrategia',
    description:
      'Analizamos tu negocio, tus procesos actuales y tus objetivos. Identificamos los puntos de dolor y diseñamos la arquitectura de solución óptima.',
    color: 'brand-gold',
    items: ['Análisis de requerimientos', 'Definición de alcance', 'Propuesta técnica', 'Estimación de tiempos'],
  },
  {
    number: '02',
    icon: Palette,
    title: 'Diseño & Prototipo',
    description:
      'Creamos wireframes y prototipos interactivos de alta fidelidad. Validamos la experiencia de usuario antes de escribir una sola línea de código.',
    color: 'brand-cyan',
    items: ['UI/UX de alta fidelidad', 'Revisión y feedback', 'Design System', 'Prototipo clickeable'],
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrollo & IA',
    description:
      'Construimos tu sistema con código limpio, modular y escalable. Integramos los módulos de IA, automatización y seguridad según el diseño aprobado.',
    color: 'purple-400',
    items: ['Sprints iterativos', 'Code Reviews', 'Integración de IA', 'Testing automatizado'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Despliegue Seguro & Soporte',
    description:
      'Desplegamos en producción con infraestructura cloud robusta, configuramos monitoreo 24/7 y brindamos soporte técnico continuo post-lanzamiento.',
    color: 'brand-gold',
    items: ['Deploy en Cloud', 'Monitoreo 24/7', 'Documentación técnica', 'Soporte continuo'],
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-tag mb-6 inline-flex">
            <Rocket size={12} />
            Proceso de Trabajo
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-white mt-6 mb-6 leading-tight">
            Del concepto al{' '}
            <span className="gradient-text-cyan">despliegue seguro</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Un proceso probado y transparente que garantiza resultados predecibles 
            y de calidad en cada entrega.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px">
            <div className="relative h-full mx-32">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 via-brand-cyan/30 to-brand-gold/20" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute inset-0 origin-left bg-gradient-to-r from-brand-gold/40 via-brand-cyan/50 to-brand-gold/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const colorMap = {
                'brand-gold': { text: 'text-brand-gold', bg: 'bg-brand-gold/10', border: 'border-brand-gold/30', glow: 'rgba(245,166,35,0.3)', dot: 'bg-brand-gold' },
                'brand-cyan': { text: 'text-brand-cyan', bg: 'bg-brand-cyan/10', border: 'border-brand-cyan/30', glow: 'rgba(0,212,255,0.3)', dot: 'bg-brand-cyan' },
                'purple-400': { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', glow: 'rgba(168,85,247,0.3)', dot: 'bg-purple-400' },
              };
              const c = colorMap[step.color];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="glass-card rounded-3xl p-6 lg:p-8 border border-white/8 relative group"
                  style={{ boxShadow: `0 4px 40px ${c.glow}` }}
                >
                  {/* Step number watermark */}
                  <div className="step-number absolute -top-2 -right-2 select-none pointer-events-none opacity-30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 0 20px ${c.glow}` }}
                  >
                    <Icon size={24} className={c.text} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg text-white mb-3 leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{step.description}</p>

                  {/* Items */}
                  <ul className="space-y-2">
                    {step.items.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 + j * 0.05 + 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-xs text-gray-400"
                      >
                        <CheckCircle2 size={12} className={c.text} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Arrow connector (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <ArrowRight size={20} className="text-gray-700 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden rounded-3xl glass-card border border-brand-gold/20 p-10 lg:p-16 text-center"
          style={{ boxShadow: '0 0 60px rgba(245,166,35,0.12)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-cyan/5" />
          <div className="relative z-10">
            <h3 className="font-display font-black text-2xl lg:text-4xl text-white mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Un sistema bien construido es una inversión que trabaja por ti 24/7. 
              Hablemos sobre tu proyecto.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-3"
            >
              Agendar Diagnóstico Gratis
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
