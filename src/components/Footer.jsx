import React from 'react';
import { motion } from 'framer-motion';
import { LogoWithText } from './Logo';
import { GitBranch, Link, X, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Servicios: [
    { label: 'Smart Landings', href: '#services' },
    { label: 'Nexus Systems', href: '#services' },
    { label: 'Genius Intelligence', href: '#services' },
  ],
  Empresa: [
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Proceso', href: '#process' },
    { label: 'Contacto', href: '#contact' },
  ],
};

const socials = [
  { icon: GitBranch, href: '#', label: 'GitHub' },
  { icon: Link, href: '#', label: 'LinkedIn' },
  { icon: X, href: '#', label: 'Twitter/X' },
  { icon: Mail, href: 'mailto:proyectos.ingeniussa@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <LogoWithText height={56} className="mb-6 justify-start" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8 mt-4">
              Transformamos ideas en sistemas inteligentes. 
              Precisión técnica, IA y seguridad en cada proyecto.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-9 h-9 rounded-xl glass-card border border-white/8 flex items-center justify-center text-gray-500 hover:text-brand-cyan hover:border-brand-cyan/30 transition-colors duration-200"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-xs tracking-widest uppercase text-gray-600 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700 font-mono">
            © {new Date().getFullYear()} Ingenius SA — Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs text-gray-700 font-mono">Sistemas Activos · Venezuela</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
