import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Database, Layout, Smartphone } from 'lucide-react';

const BentoItem = ({ title, description, icon: Icon, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className={`glass-card p-6 rounded-3xl border border-white/5 flex flex-col justify-between group overflow-hidden relative ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-brand-dark flex items-center justify-center mb-4 border border-white/10 group-hover:border-brand-cyan/50 transition-colors">
        <Icon className="text-brand-cyan group-hover:animate-pulse" size={24} />
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="absolute -bottom-4 -right-4 text-brand-cyan/5 group-hover:text-brand-cyan/10 transition-colors">
        <Icon size={120} />
    </div>
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <span className="section-tag mb-4">Nuestro DNA</span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
            Ecosistema de <span className="gradient-text-gold">Alto Rendimiento</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          <BentoItem
            delay={0.1}
            title="Next-Gen UI"
            description="Interfaces que respiran. Fluidez absoluta y micro-interacciones premium."
            icon={Layout}
            className="md:col-span-1 lg:col-span-2"
          />
          <BentoItem
            delay={0.2}
            title="Velocidad Extrema"
            description="Landing pages que cargan en menos de 1 segundo. Google nos ama."
            icon={Zap}
            className="md:col-span-1 lg:col-span-2"
          />
          <BentoItem
            delay={0.3}
            title="Full Responsive"
            description="Experiencias perfectas en móvil, tablet y desktop."
            icon={Smartphone}
            className="md:col-span-1 lg:col-span-2"
          />
          <BentoItem
            delay={0.4}
            title="Núcleo AI"
            description="Algoritmos de aprendizaje integrados para optimizar cada proceso."
            icon={Cpu}
            className="md:col-span-1 lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
