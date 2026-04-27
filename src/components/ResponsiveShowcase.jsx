import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Monitor } from 'lucide-react';

export default function ResponsiveShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A101C] border-y border-white/5">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
              <Monitor size={18} />
            </span>
            <span className="text-gray-500 font-mono text-sm">+</span>
            <span className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
              <Smartphone size={18} />
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
            Estructuras Responsivas <br/>
            <span className="gradient-text-cyan">Píxel a Píxel</span>
          </h2>
          
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            No adaptamos diseños. <strong className="text-white">Ingeniamos arquitecturas fluidas.</strong> Cada sistema
            se recalcula nativamente desde la pantalla del cine más grande hasta la palma de la mano de tu usuario.
            Experiencia premium inquebrantable en cualquier resolución.
          </p>
        </motion.div>

        {/* MOCKUPS SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full relative perspective-[1000px]"
        >
          {/* Laptop Mockup */}
          <div className="w-[85%] relative z-10 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl bg-[#0F172A] rotate-y-[-5deg] rotate-x-[2deg] transform-gpu hover:rotate-y-0 transition-transform duration-700">
             {/* Browser window bar */}
             <div className="bg-[#1E293B] px-4 py-2 border-b border-white/5 flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
             </div>
             <div className="w-full relative bg-black aspect-video overflow-hidden">
                <img src="/desktop-mockup.png" alt="Desktop UI Optimization" className="w-full h-full object-cover object-top opacity-90" />
             </div>
          </div>

          {/* Smartphone Mockup */}
          <div className="absolute -bottom-6 -right-2 w-[32%] z-20 rounded-[24px] border-[5px] border-[#1A1C23] shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-black overflow-hidden rotate-y-[5deg] rotate-x-[2deg] transform-gpu hover:-translate-y-4 transition-transform duration-700 ring-1 ring-white/10">
             {/* Island */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[14px] bg-[#1A1C23] rounded-b-[8px] z-30" />
             <div className="w-full relative aspect-[9/19] bg-black overflow-hidden">
               <img src="/mobile-mockup.png" alt="Mobile APP Optimization" className="w-full h-full object-cover object-top opacity-90 brightness-110" />
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10" />
             </div>
          </div>
          
          {/* Light sweep effect behind the mockups */}
          <div className="absolute inset-0 z-0 blur-[80px] bg-brand-cyan/20 rounded-full animate-pulse pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
