import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '584143977946'; // ← Número oficial
const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola! Vi su página de Ingenius SA y me interesa hablar sobre un proyecto. ¿Podemos conversar?'
);

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / Pre-message */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative glass-card border border-white/10 rounded-2xl px-4 py-3 max-w-[220px] shadow-xl"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-dark border border-white/10 text-gray-500 hover:text-white flex items-center justify-center"
            >
              <X size={10} />
            </button>
            <p className="text-sm text-white font-semibold leading-snug mb-1">
              ¿Listo para empezar?
            </p>
            <p className="text-xs text-gray-400">
              Cuéntanos tu idea. Respondemos en menos de 24h.
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 glass-card border-r border-b border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 8px 32px rgba(37,211,102,0.45)',
        }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'rgba(37,211,102,0.35)' }}
        />
        <MessageCircle size={26} className="text-white relative z-10" fill="white" />
      </motion.button>
    </div>
  );
}
