import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    avatar: 'CM',
    rating: 5,
    text: 'Ingenius SA transformó por completo nuestra presencia digital. En menos de 3 semanas teníamos un sistema de gestión que nos ahorró 15 horas semanales de trabajo manual.',
    highlight: '15 horas/semana ahorradas',
    color: 'from-brand-gold/20 to-transparent',
    border: 'border-brand-gold/20',
    glow: 'rgba(245,166,35,0.15)',
    avatarBg: 'bg-brand-gold/20 text-brand-gold',
  },
  {
    name: 'Valentina Ríos',
    avatar: 'VR',
    rating: 5,
    text: 'Mi landing page nueva convierte 3 veces más que la anterior. El equipo entendió exactamente lo que mi marca necesitaba. El resultado superó todas mis expectativas.',
    highlight: '3x más conversiones',
    color: 'from-brand-cyan/20 to-transparent',
    border: 'border-brand-cyan/20',
    glow: 'rgba(0,212,255,0.15)',
    avatarBg: 'bg-brand-cyan/20 text-brand-cyan',
  },
  {
    name: 'Andrés Gutiérrez',
    avatar: 'AG',
    rating: 5,
    text: 'El chatbot con IA que implementaron redujo en un 60% las consultas repetitivas de nuestros clientes. Profesionalismo y velocidad de entrega de primer nivel.',
    highlight: '60% menos consultas repetitivas',
    color: 'from-purple-500/20 to-transparent',
    border: 'border-purple-500/20',
    glow: 'rgba(168,85,247,0.15)',
    avatarBg: 'bg-purple-500/20 text-purple-400',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative glass-card rounded-3xl border ${testimonial.border} p-8 flex flex-col gap-6 overflow-hidden group`}
      style={{ boxShadow: `0 0 40px ${testimonial.glow}` }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Quote icon */}
      <div className="relative z-10">
        <Quote size={32} className="text-white/5 absolute -top-1 -left-1" />

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          "{testimonial.text}"
        </p>

        {/* Highlight chip */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${testimonial.border} mb-6`}
          style={{ background: testimonial.glow }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
          <span className="text-xs font-mono text-white/70 tracking-wide">{testimonial.highlight}</span>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm ${testimonial.avatarBg}`}>
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-cyan/30 to-transparent" />

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
            <Star size={12} className="text-brand-gold" />
            Casos de Éxito
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-6 mb-4 leading-tight">
            Lo que dicen los que ya{' '}
            <span className="gradient-text-gold">dieron el salto</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Resultados reales de negocios que confiaron en Ingenius SA para transformar su presencia digital.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { value: '4.9★', label: 'Calificación promedio' },
            { value: '+20', label: 'Proyectos entregados' },
            { value: '100%', label: 'Clientes satisfechos' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-display font-black text-2xl gradient-text-gold">{stat.value}</span>
              <span className="text-xs text-gray-500 font-mono tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
