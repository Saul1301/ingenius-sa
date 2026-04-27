import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, MessageCircle, Code2, Lock, Activity } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const BentoBox = ({ children, className = "", spotlightColor }) => (
  <SpotlightCard 
    className={`glass-card rounded-3xl border border-white/10 p-6 flex flex-col ${className}`}
    spotlightColor={spotlightColor}
  >
    {children}
  </SpotlightCard>
);

export default function BentoSection() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">Infraestructura Élite</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            Ingeniería de <span className="gradient-text-gold">Siguiente Nivel</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-4 h-full min-h-[600px]">
          
          {/* Performance Box */}
          <BentoBox className="md:col-span-2 lg:col-span-2 row-span-1" spotlightColor="rgba(245,166,35,0.2)">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold">
                <Zap size={20} />
              </div>
              <h3 className="text-white font-bold">Máximo Performance</h3>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path className="text-white/5" strokeDasharray="100, 100" strokeWidth="3" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <motion.path 
                    initial={{ strokeDasharray: "0, 100" }}
                    whileInView={{ strokeDasharray: "100, 100" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-brand-gold" strokeWidth="3" strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  />
                  <text x="18" y="20.35" className="text-[8px] font-bold fill-white text-center" textAnchor="middle">100/100</text>
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">Optimización Lighthouse garantizada en cada despliegue.</p>
          </BentoBox>

          {/* Sound Box / Support */}
          <BentoBox className="md:col-span-2 lg:col-span-4 row-span-1" spotlightColor="rgba(0,212,255,0.2)">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                <Activity size={20} />
              </div>
              <h3 className="text-white font-bold">Comunicación de Alta Frecuencia</h3>
            </div>
            <div className="flex-grow flex items-end justify-center gap-1.5 pb-2">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [10, Math.random() * 40 + 20, 10] }}
                  transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 bg-gradient-to-t from-brand-cyan to-brand-cyan/40 rounded-full"
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">Soporte técnico real. Sin tickets infinitos, comunicación directa con ingenieros.</p>
          </BentoBox>

          {/* Security Box */}
          <BentoBox className="md:col-span-2 lg:col-span-3 row-span-1" spotlightColor="rgba(168,85,247,0.2)">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Lock size={20} />
              </div>
              <h3 className="text-white font-bold">Seguridad Criptográfica</h3>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <motion.div
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-purple-400/30"
              >
                <Shield size={64} strokeWidth={1} />
              </motion.div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Protección de datos y cifrado de punta a punta en cada sistema.</p>
          </BentoBox>

          {/* Code Ownership Box */}
          <BentoBox className="md:col-span-2 lg:col-span-3 row-span-1" spotlightColor="rgba(245,166,35,0.2)">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold">
                <Code2 size={20} />
              </div>
              <h3 className="text-white font-bold">Propiedad Intelectual</h3>
            </div>
            <div className="flex-grow font-mono text-[10px] text-gray-500 overflow-hidden bg-black/20 rounded-xl p-3">
              <div className="text-brand-gold">package.json</div>
              <div className="pl-4">"owner": "client",</div>
              <div className="pl-4">"delivery": "source-code",</div>
              <div className="pl-4">"maintenance": "included"</div>
              <div className="text-brand-cyan mt-2">src/main.py</div>
              <div className="pl-4 opacity-50">def build_system():</div>
              <div className="pl-8 opacity-30">return Excellence()</div>
            </div>
            <p className="text-xs text-gray-500 mt-4">El código es tuyo. Sin dependencias de terceros ni pagos de licencias ocultas.</p>
          </BentoBox>

        </div>
      </div>
    </section>
  );
}
