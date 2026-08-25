import React from 'react';

/**
 * Ingenius SA — Logo Components
 * Using the new premium logo v2.
 */

export function LogoWithText({ className = '', height = 52 }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative group flex items-center">
        {/* Ambient neon glow behind logo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/40 via-blue-500/30 to-brand-gold/40 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Main Logo Image */}
        <img
          src="/logo-header.png"
          alt="Ingenius SA"
          className="relative rounded-lg object-contain shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-transform duration-300 group-hover:scale-105"
          style={{
            height: `${height}px`,
            width: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export function LogoIcon({ className = '', size = 56 }) {
  return (
    <div className="relative group inline-block">
      <div className="absolute -inset-1 bg-brand-cyan/40 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
      <img
        src="/logo-symbol.png"
        alt="Ingenius SA"
        className={`relative rounded-xl object-contain shadow-lg ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </div>
  );
}
