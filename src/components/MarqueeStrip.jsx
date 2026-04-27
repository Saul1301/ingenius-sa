import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Cpu, Zap, Globe, BarChart3, Bot,
  Layers, Shield, Rocket, Star
} from 'lucide-react';

const items = [
  { icon: Code2,     label: 'React & Next.js',        color: 'text-brand-cyan' },
  { icon: Cpu,       label: 'Python & FastAPI',        color: 'text-brand-gold' },
  { icon: Bot,       label: 'Inteligencia Artificial', color: 'text-purple-400' },
  { icon: Zap,       label: 'Velocidad <1s',           color: 'text-brand-gold' },
  { icon: Globe,     label: 'Deploy Global',           color: 'text-brand-cyan' },
  { icon: BarChart3, label: 'Dashboards a Medida',     color: 'text-brand-gold' },
  { icon: Layers,    label: 'Framer Motion',           color: 'text-purple-400' },
  { icon: Shield,    label: 'Seguridad Integrada',     color: 'text-brand-cyan' },
  { icon: Rocket,    label: 'Entrega en 7 Días',       color: 'text-brand-gold' },
  { icon: Star,      label: '4.9★ Rating',             color: 'text-brand-gold' },
];

// Double the array so the loop is seamless
const doubled = [...items, ...items];

function MarqueeTrack({ reverse = false, speed = 35 }) {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border border-white/8 cursor-default flex-shrink-0 select-none"
            >
              <Icon size={15} className={item.color} />
              <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div className="relative py-10 overflow-hidden">
      {/* Left & Right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #050A14, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #050A14, transparent)' }} />

      {/* Divider line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

      <div className="flex flex-col gap-4">
        <MarqueeTrack reverse={false} speed={40} />
        <MarqueeTrack reverse={true}  speed={32} />
      </div>

      {/* Divider line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
    </div>
  );
}
