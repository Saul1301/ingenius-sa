import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Cpu, Globe } from 'lucide-react';

const SNIPPETS = [
  { type: 'cmd', text: 'npx ingenius-ai create-nexus ./brand-site' },
  { type: 'log', text: 'Initializing Neural Architecture...' },
  { type: 'code', text: '<Hero spotlight={true} mode="premium" />' },
  { type: 'log', text: 'Synthesizing UI Components...' },
  { type: 'code', text: 'const site = await AI.optimize(UX.flow);' },
  { type: 'log', text: 'Optimizing for 99.9% conversion...' },
  { type: 'success', text: 'Deployment Ready: https://ingenius.sa/success' },
];

export default function CodeTerminal() {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < SNIPPETS.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, SNIPPETS[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? 1000 : 1500);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setLines([]);
        setCurrentIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 perspective-1000">
      <motion.div
        initial={{ rotateX: 20, y: 50, opacity: 0 }}
        whileInView={{ rotateX: 10, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-card rounded-xl border border-white/10 overflow-hidden shadow-2xl relative"
      >
        {/* Terminal Header */}
        <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            <Terminal size={10} />
            Ingenius OS v2.0
          </div>
        </div>

        {/* Content */}
        <div className="p-6 h-64 font-mono text-sm overflow-hidden relative">
          <AnimatePresence>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2 flex gap-3"
              >
                <span className="text-gray-600 select-none">›</span>
                <span className={
                  line.type === 'cmd' ? 'text-brand-gold' :
                  line.type === 'code' ? 'text-brand-cyan' :
                  line.type === 'success' ? 'text-green-400 font-bold' :
                  'text-gray-400 italic'
                }>
                  {line.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Animated Glow on bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-cyan/10 to-transparent pointer-events-none" />
        </div>

        {/* Floating Icons */}
        <div className="absolute -right-4 -top-4 w-12 h-12 bg-brand-dark-2 border border-brand-cyan/20 rounded-lg flex items-center justify-center glow-cyan">
            <Cpu size={20} className="text-brand-cyan animate-pulse" />
        </div>
        <div className="absolute -left-4 top-1/2 w-10 h-10 bg-brand-dark-2 border border-brand-gold/20 rounded-lg flex items-center justify-center glow-gold">
            <Code size={16} className="text-brand-gold animate-float" />
        </div>
      </motion.div>

      <div className="mt-6 flex justify-center gap-8 opacity-40">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Globe size={12} /> GLOBAL DEPLOY
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <Cpu size={12} /> AI SYNTHESIS
          </div>
      </div>
    </div>
  );
}
