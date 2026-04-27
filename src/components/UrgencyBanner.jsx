import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Clock } from 'lucide-react';

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true);
  const [slots, setSlots] = useState(3);

  // Simulate slot countdown for authenticity
  useEffect(() => {
    const stored = sessionStorage.getItem('ingenius-slots');
    if (stored) {
      setSlots(parseInt(stored));
    } else {
      sessionStorage.setItem('ingenius-slots', '3');
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center px-4"
          style={{
            background: 'linear-gradient(90deg, rgba(245,166,35,0.95) 0%, rgba(200,120,0,0.97) 100%)',
            boxShadow: '0 4px 30px rgba(245,166,35,0.4)',
          }}
        >
          <div className="flex items-center gap-3 py-2.5 text-center">
            <Zap size={14} className="text-white/80 flex-shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm font-semibold text-brand-dark">
              <span className="font-black">Solo {slots} cupos disponibles</span> para proyectos nuevos en{' '}
              <span className="font-black">Mayo 2025</span>
              {' '}·{' '}
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Reserva el tuyo ahora →
              </button>
            </p>
            <Clock size={14} className="text-white/80 flex-shrink-0 hidden sm:block" />
          </div>

          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-dark/60 hover:text-brand-dark transition-colors"
            aria-label="Cerrar banner"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
