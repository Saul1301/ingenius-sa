import React from 'react';

/**
 * Ingenius SA — Logo Components
 * Using the new premium logo v2.
 */

export function LogoWithText({ className = '', height = 64 }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/logo-ingenius.png"
        alt="Ingenius SA"
        style={{
          height: `${height * 2.2}px`,
          width: 'auto',
          objectFit: 'contain',
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
