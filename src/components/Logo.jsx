import React from 'react';

/**
 * Ingenius SA — Logo Components
 * Using the new premium logo v2.
 */

export function LogoWithText({ className = '' }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src="/logo-ingenius.png"
        alt="Ingenius SA"
        className="w-auto"
        style={{
          height: '140px', // Much larger height so it's visible
          maxHeight: 'none',
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 12px rgba(0,212,255,0.2))',
          transform: 'translateY(15px)', // Push down so it overlaps like a banner
        }}
      />
    </div>
  );
}

export function LogoIcon({ className = '', size = 80 }) {
  return (
    <img
      src="/logo-ingenius.png"
      alt="Ingenius SA"
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        borderRadius: '12px',
      }}
    />
  );
}
