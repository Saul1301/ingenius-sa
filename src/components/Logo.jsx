import React from 'react';

/**
 * Ingenius SA — Logo Components
 * Using the actual brand images from the project.
 */

export function LogoWithText({ className = '', height = 64 }) {
  return (
    <div className={`overflow-hidden rounded-md flex items-center justify-center ${className}`}>
        <img
          src="/ingenius-logo.jpg"
          alt="Ingenius SA"
          className="mix-blend-screen"
          style={{ height: `${height}px`, width: 'auto', objectFit: 'contain' }}
        />
    </div>
  );
}

export function LogoIcon({ className = '', size = 80 }) {
  return (
    <img
      src="/ingenius-logo.jpg"
      alt="Ingenius SA"
      className={className}
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', borderRadius: '12px' }}
    />
  );
}
