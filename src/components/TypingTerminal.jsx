import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const lines = [
  { text: '> Analizando requerimientos del cliente...', color: 'text-brand-cyan' },
  { text: '> Arquitectura: React + FastAPI + PostgreSQL', color: 'text-gray-400' },
  { text: '> Módulo de IA: activado ✓', color: 'text-green-400' },
  { text: '> Deploy en Vercel: EXITOSO ✓', color: 'text-brand-gold' },
  { text: '> Sistema listo para producción.', color: 'text-white' },
];

function useTypingEffect(text, speed = 35, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(delayTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return displayed;
}

function TerminalLine({ line, index, onDone }) {
  const totalDelay = index * 900; // ~900ms between lines
  const displayed = useTypingEffect(line.text, 28, totalDelay);

  useEffect(() => {
    if (displayed === line.text && onDone) {
      setTimeout(onDone, 200);
    }
  }, [displayed, line.text, onDone]);

  if (!displayed) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`font-mono text-xs sm:text-sm leading-relaxed ${line.color}`}
    >
      {displayed}
      {displayed.length < line.text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-brand-cyan ml-0.5 animate-pulse" />
      )}
    </motion.div>
  );
}

export default function TypingTerminal() {
  const [visibleLines, setVisibleLines] = useState(1);

  const showNext = () => setVisibleLines(v => Math.min(v + 1, lines.length));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-white/8"
      style={{
        background: 'rgba(5, 10, 20, 0.85)',
        boxShadow: '0 0 40px rgba(0,212,255,0.08), 0 20px 60px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Terminal top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5"
        style={{ background: 'rgba(255,255,255,0.02)' }}>
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs font-mono text-gray-600">ingenius-sa ~ terminal</span>
      </div>

      {/* Terminal body */}
      <div className="px-5 py-4 space-y-2 min-h-[120px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <TerminalLine
            key={i}
            line={line}
            index={i}
            onDone={i === visibleLines - 1 ? showNext : undefined}
          />
        ))}
        {visibleLines > lines.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="font-mono text-xs text-brand-cyan"
          >
            █
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
