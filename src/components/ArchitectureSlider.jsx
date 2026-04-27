import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ArchitectureSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX || e.touches[0].clientX) - rect.left) / rect.width;
    setPosition(Math.min(Math.max(x * 100, 0), 100));
  };

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag mb-4 inline-flex">Transmutación Digital</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            Del <span className="gradient-text-cyan">Código Crudo</span> al Arte Visual
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Arrastra el deslizador para ver cómo convertimos arquitecturas complejas en experiencias inmersivas.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative h-[400px] md:h-auto md:aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-ew-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Right Side: The Result (Visual) */}
          <div className="absolute inset-0 bg-[#0A1628]">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-80"
              alt="Futuristic UI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right">
              <div className="text-brand-cyan font-bold text-sm md:text-2xl">INTERFAZ FINAL</div>
              <div className="text-gray-400 text-[10px] md:text-sm italic hidden sm:block">Experiencia de Usuario Premium</div>
            </div>
          </div>

          {/* Left Side: The Source (Code) - Clipped */}
          <div 
            className="absolute inset-0 bg-[#050A14] z-10 border-r border-brand-cyan/50"
            style={{ width: `${position}%` }}
          >
            <div className="p-4 md:p-8 font-mono text-[10px] md:text-sm leading-relaxed overflow-hidden whitespace-nowrap">
              <div className="text-purple-400">class</div> <div className="text-brand-gold inline">IngeniusEngine:</div>
              <div className="pl-4 text-gray-500">def __init__(self, requirements):</div>
              <div className="pl-6 md:pl-8 text-gray-400">self.architecture = <div className="text-brand-cyan inline">"Microservices"</div></div>
              <div className="pl-6 md:pl-8 text-gray-400">self.security = <div className="text-brand-gold inline">"AES-256"</div></div>
              
              <div className="mt-3 md:mt-4 text-purple-400">async def</div> <div className="text-brand-gold inline">render_future(ctx):</div>
              <div className="pl-4 text-gray-400">await ctx.<div className="text-brand-cyan inline">optimize_performance()</div></div>
              <div className="pl-4 text-gray-400">return <div className="text-brand-gold inline">UI_Masterpiece()</div></div>
              
              <div className="mt-3 md:mt-4 text-gray-600 italic"># Empujando los límites del hardware...</div>
              <div className="text-brand-gold">@apply_ai_optimization</div>
              <div className="text-purple-400">def</div> <div className="text-brand-gold inline">deploy_production():</div>
              <div className="pl-4 text-gray-400">verify_integrity()</div>
              <div className="pl-4 text-gray-400 hidden sm:block">push_to_edge()</div>
            </div>

            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <div className="text-brand-gold font-bold text-sm md:text-2xl whitespace-nowrap">ARQUITECTURA BASE</div>
              <div className="text-gray-400 text-[10px] md:text-sm italic hidden sm:block">Código Escalable & Seguro</div>
            </div>
          </div>

          {/* Draggable Divider Line */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white select-none pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-4 border-black/20">
               ↔
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
