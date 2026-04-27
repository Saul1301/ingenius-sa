import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Sticky CTA bar that appears after the user scrolls past the Hero.
 * Its single job: bring the user back to the contact form.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -56, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -56, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-[90] flex items-center justify-between gap-4 px-4 sm:px-8 py-2.5"
          style={{
            background: 'rgba(5,10,20,0.92)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(245,166,35,0.15)',
          }}
        >
          {/* Brand hint */}
          <span className="text-xs font-mono text-gray-600 tracking-widest hidden sm:block">
            INGENIUS SA
          </span>

          {/* Message */}
          <p className="text-sm text-gray-300 hidden md:block">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleClick}
            className="ml-auto flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-brand-dark"
            style={{
              background: 'linear-gradient(135deg, #F5A623, #FFD275)',
              boxShadow: '0 0 20px rgba(245,166,35,0.35)',
            }}
          >
            <Sparkles size={13} className="opacity-80" />
            Iniciar Proyecto
            <ArrowRight size={13} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
