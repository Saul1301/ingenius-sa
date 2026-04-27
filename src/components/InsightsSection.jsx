import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';

const articles = [
  {
    id: 1,
    tag: 'Estrategia Digital',
    tagColor: 'text-brand-gold border-brand-gold/30 bg-brand-gold/8',
    title: '¿Cuánto cuesta realmente una landing page profesional en 2025?',
    excerpt:
      'La diferencia entre pagar $50 en Fiverr y $500 con una agencia especializada puede definir si tu negocio atrae o espanta clientes. Aquí el desglose honesto de costos y qué esperar en cada rango.',
    readTime: '4 min',
    gradient: 'from-brand-gold/10 via-transparent to-transparent',
    border: 'border-brand-gold/15 hover:border-brand-gold/40',
    dot: 'bg-brand-gold',
  },
  {
    id: 2,
    tag: 'Tecnología',
    tagColor: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/8',
    title: 'Cómo elegir la agencia de desarrollo web correcta (sin que te estafes)',
    excerpt:
      '5 señales de alerta que debes identificar antes de firmar con cualquier agencia: portafolio sin capturas reales, precios sin itemizar, contratos ambiguos y más. Guía práctica para tomadores de decisión.',
    readTime: '6 min',
    gradient: 'from-brand-cyan/10 via-transparent to-transparent',
    border: 'border-brand-cyan/15 hover:border-brand-cyan/40',
    dot: 'bg-brand-cyan',
  },
  {
    id: 3,
    tag: 'Inteligencia Artificial',
    tagColor: 'text-purple-400 border-purple-400/30 bg-purple-400/8',
    title: 'IA para pequeñas empresas: qué puedes automatizar hoy sin ser técnico',
    excerpt:
      'Desde responder WhatsApp automáticamente hasta generar reportes de ventas sin tocar Excel. Las 7 automatizaciones de IA más rentables para negocios locales y cómo implementarlas este mes.',
    readTime: '5 min',
    gradient: 'from-purple-500/10 via-transparent to-transparent',
    border: 'border-purple-500/15 hover:border-purple-500/40',
    dot: 'bg-purple-400',
  },
];

function ArticleCard({ article, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group glass-card rounded-3xl border ${article.border} overflow-hidden flex flex-col cursor-pointer transition-all duration-300`}
      style={{ background: `linear-gradient(135deg, ${article.gradient.replace('from-', '').replace('via-transparent', '').replace('to-transparent', '')})` }}
      whileHover={{ y: -8 }}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${article.gradient.replace('via-transparent to-transparent', 'to-transparent')}`} />

      <div className="p-7 flex flex-col flex-1">
        {/* Tag + read time */}
        <div className="flex items-center justify-between mb-5">
          <span className={`text-xs font-mono tracking-wider uppercase border rounded-full px-3 py-1 ${article.tagColor}`}>
            <Tag size={9} className="inline mr-1" />
            {article.tag}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-600">
            <Clock size={11} />
            {article.readTime} lectura
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-white mb-3 leading-snug group-hover:text-brand-cyan transition-colors duration-300">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
          {article.excerpt}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 mt-auto">
          <span className={`w-1.5 h-1.5 rounded-full ${article.dot} animate-pulse`} />
          Leer artículo
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.article>
  );
}

export default function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-cyan/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">
            <BookOpen size={12} />
            Insights
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-6 mb-5 leading-tight">
            Conocimiento que{' '}
            <span className="gradient-text-cyan">convierte</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Artículos técnicos y de estrategia escritos por ingenieros reales. Sin relleno, sin teoría vacía.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm">
            Más contenido próximamente · Síguenos para no perderte nada
          </p>
        </motion.div>
      </div>
    </section>
  );
}
