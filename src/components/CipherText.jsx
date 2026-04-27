import React, { useState, useEffect, useCallback } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%&#@$^*';

export default function CipherText({ text, className = "", delay = 0 }) {
  const [output, setOutput] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const scramble = useCallback(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setOutput(prev => 
        text.split('').map((char, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );

      iterations += 1/3;
      if (iterations >= text.length) clearInterval(interval);
    }, 30);
  }, [text]);

  // Ejecutar al inicio con delay y al hacer hover
  useEffect(() => {
    const timer = setTimeout(scramble, delay);
    return () => clearTimeout(timer);
  }, [scramble, delay]);

  return (
    <span 
      onMouseEnter={() => scramble()}
      className={`font-mono ${className}`}
    >
      {output}
    </span>
  );
}
