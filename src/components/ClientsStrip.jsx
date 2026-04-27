import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const clients = [
  {
    name: 'Despertar 171',
    category: 'Bienestar & Coaching',
    image: '/1.png',
    accentColor: '#a855f7',
    url: 'despertar171.com',
  },
  {
    name: 'All For Cars',
    category: 'Automotriz Premium',
    image: '/2.png',
    accentColor: '#F5A623',
    url: 'allforcarsvzla.com',
  },
  {
    name: 'Numerólogo Eli',
    category: 'Plataforma IA & Numerología',
    image: '/3.png',
    accentColor: '#00D4FF',
    url: 'numerologoeli.com',
  },
];

function ClientCard({ client, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col"
    >
      {/* Mini Browser Mockup */}
      <div
        className="rounded-2xl overflow-hidden border border-white/10 mb-4 shadow-2xl group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 group-hover:-translate-y-2"
        style={{ boxShadow: `0 4px 30px ${client.accentColor}22` }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/8"
          style={{ background: 'rgba(10,18,35,0.98)' }}
        >
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <div
            className="flex-1 mx-2 px-2 py-0.5 rounded text-[9px] font-mono text-center truncate"
            style={{ background: 'rgba(255,255,255,0.04)', color: client.accentColor + 'BB' }}
          >
            {client.url}
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative overflow-hidden" style={{ height: '160px' }}>
          <img
            src={client.image}
            alt={client.name}
            className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{ height: '160px' }}
          />
          {/* Subtle overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(to top, ${client.accentColor}22, transparent)` }}
          />
        </div>
      </div>

      {/* Client Info */}
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-display font-bold text-white text-sm group-hover:text-white transition-colors">
            {client.name}
          </h4>
          <p className="text-xs text-gray-600 mt-0.5">{client.category}</p>
        </div>
        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: client.accentColor }} />
      </div>
    </motion.div>
  );
}

export default function ClientsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden border-y border-white/5">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-gray-600 mb-2">
            Proyectos activos en producción
          </p>
          <h3 className="font-display font-bold text-xl text-white">
            Empresas que ya confían en{' '}
            <span className="gradient-text-gold">Ingenius SA</span>
          </h3>
        </motion.div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <ClientCard key={client.name} client={client} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-700 mt-10"
        >
          Cada proyecto fue construido desde cero · código exclusivo · sin templates genéricos
        </motion.p>
      </div>
    </section>
  );
}
