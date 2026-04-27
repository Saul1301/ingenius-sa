import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuánto cuesta un proyecto?',
    a: 'Cada proyecto es único, por eso no tenemos precios fijos. Dependiendo del alcance, los proyectos van desde una landing page compacta hasta sistemas complejos con IA. Lo que sí garantizamos: el precio acordado no cambia. Pídenos una asesoría gratuita y te enviamos una propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar listo?',
    a: 'Todos nuestros proyectos se entregan en un plazo de 2 a 4 semanas, dependiendo de los requerimientos del cliente. Siempre con versiones intermedias para que puedas revisar y aprobar antes de la entrega final. El proyecto no se da por terminado hasta que estés satisfecho.',
  },
  {
    q: '¿Qué pasa si no me gusta el resultado?',
    a: 'Trabajamos con revisiones iterativas — tú ves el avance desde el día 1 y gives feedback en cada etapa. No hay sorpresas al final. Además, incluimos al menos 2 rondas de ajustes post-entrega sin costo adicional.',
  },
  {
    q: '¿El código me pertenece a mí?',
    a: '100%. Una vez entregado el proyecto, el código fuente, los diseños y todos los activos digitales son completamente tuyos. Sin licencias, sin dependencias de nosotros para actualizarlo.',
  },
  {
    q: '¿Puedo pedirles cambios después de la entrega?',
    a: 'Sí. Ofrecemos planes de mantenimiento mensual para clientes que quieren soporte continuo, actualizaciones y mejoras. También podemos hacer cambios puntuales bajo demanda. Tú decides.',
  },
  {
    q: '¿Trabajan con clientes fuera de Venezuela?',
    a: 'Por supuesto. Trabajamos 100% de forma remota con clientes en toda Latinoamérica y más allá. La comunicación es por WhatsApp, videollamada o el canal que prefieras.',
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-brand-gold/30 bg-brand-gold/5'
          : 'border-white/8 bg-white/2 hover:border-white/15'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      >
        <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${isOpen ? 'text-brand-gold' : 'text-white group-hover:text-gray-200'}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className={`transition-colors ${isOpen ? 'text-brand-gold' : 'text-gray-500'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="section-tag mb-5 inline-flex">
            <HelpCircle size={12} />
            Preguntas Frecuentes
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-5 mb-3 leading-tight">
            Todo lo que quieres{' '}
            <span className="gradient-text-cyan">saber antes de empezar</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Sin letra pequeña. Respuestas directas a las dudas reales.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          ¿Tienes otra pregunta?{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-brand-gold hover:text-brand-gold/80 underline underline-offset-2 transition-colors"
          >
            Pregúntanos directamente →
          </button>
        </motion.p>
      </div>
    </section>
  );
}
