import React from 'react';
import './App.css';
import ParticleField from './components/ParticleField';
import GlobalCursor from './components/GlobalCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import ForWhomSection from './components/ForWhomSection';
import PortfolioShowcase from './components/PortfolioShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TypingTerminal from './components/TypingTerminal';
import ArchitectureSlider from './components/ArchitectureSlider';
import BentoSection from './components/BentoSection';
import ResponsiveShowcase from './components/ResponsiveShowcase';
import ClientsStrip from './components/ClientsStrip';
import HowWeStartSection from './components/HowWeStartSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InsightsSection from './components/InsightsSection';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark">
      {/* Global Custom Cursor */}
      <GlobalCursor />

      {/* Particle Background */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* 1. Hook — Impacto inmediato */}
        <HeroSection />

        {/* 2. Authority — Tira de tecnologías */}
        <MarqueeStrip />

        {/* 3. Nosotros — Quiénes somos */}
        <AboutSection />

        {/* 4. Bento — Infraestructura y Autoridad */}
        <BentoSection />

        {/* 5. Proof — El trabajo habla */}
        <PortfolioShowcase />

        {/* 6. Transmutación — De código a arte */}
        <ArchitectureSlider />

        {/* 6.5 Multiplataforma — Diseño de alta adaptabilidad */}
        <ResponsiveShowcase />

        {/* 7. Trust — Testimonios */}
        <TestimonialsSection />

        {/* 6. Offer — Servicios */}
        <ServicesSection />

        {/* 7. Process — Cómo empezamos */}
        <HowWeStartSection />

        {/* 8. Insights — Blog de posicionamiento SEO */}
        <InsightsSection />

        {/* 9. Objections — FAQ */}
        <FAQSection />

        {/* 9. Convert — Contacto mejorado */}
        <ContactSection />
      </main>

      <footer className="relative z-10">
        <Footer />
      </footer>

      {/* Floating WhatsApp */}
      <WhatsAppButton />

      {/* Vercel Analytics — tracking invisible */}
      <Analytics />
    </div>
  );
}
