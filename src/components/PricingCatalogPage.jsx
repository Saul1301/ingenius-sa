import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, Sparkles, Zap, ArrowRight, ShieldCheck, 
  Smartphone, Database, MessageCircle, Code2, Globe, Clock, 
  ChevronRight, Laptop, Award, Phone
} from 'lucide-react';
import { LogoWithText } from './Logo';

export default function PricingCatalogPage() {
  const [activeTab, setActiveTab] = useState('projects');

  const projectPlans = [
    {
      id: 'landing',
      name: 'Landing Page de Alta Conversión',
      tagline: 'Ideal para validar ideas o captar leads',
      price: '$120+',
      unit: 'USD (Pago único)',
      delivery: '3 a 5 días',
      badge: 'Más Rápido',
      badgeColor: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
      description: 'Una sola página optimizada con estética premium para convertir visitantes en clientes.',
      features: [
        'Diseño 100% responsivo (Móvil y Escritorio)',
        'Efectos visuales modernos y microinteracciones',
        'Integración directa a WhatsApp y formulario',
        'Optimización de velocidad y SEO básico',
        'Dominio y hosting configurados'
      ],
      glow: 'rgba(6, 182, 212, 0.25)',
      border: 'border-brand-cyan/30',
      accentColor: 'text-brand-cyan',
      accentBg: 'bg-brand-cyan/10',
    },
    {
      id: 'corporate',
      name: 'Web Corporativa Completa',
      tagline: 'La opción más elegida para empresas',
      price: '$220+',
      unit: 'USD (Pago único)',
      delivery: '7 a 10 días',
      badge: 'Más Popular',
      badgeColor: 'text-brand-gold border-brand-gold/30 bg-brand-gold/10',
      featured: true,
      description: 'Presencia digital sólida con múltiples secciones para posicionar tu marca como líder.',
      features: [
        'Hasta 5 secciones completas estructuradas',
        'Catálogo interactivo de servicios o productos',
        'Animaciones 3D e interactividad avanzada',
        'Panel de administración opcional',
        'Integración con Analytics y Google Maps',
        'Soporte técnico por 30 días'
      ],
      glow: 'rgba(245, 166, 35, 0.35)',
      border: 'border-brand-gold/50',
      accentColor: 'text-brand-gold',
      accentBg: 'bg-brand-gold/10',
    },
    {
      id: 'custom',
      name: 'Sistema / Plataforma a Medida',
      tagline: 'Para negocios con necesidades específicas',
      price: '$450+',
      unit: 'USD (Cotización según alcance)',
      delivery: '15 a 25 días',
      badge: 'Solución Completa',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      description: 'Desarrollo de software web personalizado: paneles, bases de datos y lógica compleja.',
      features: [
        'Arquitectura full-stack (Frontend + Backend + DB)',
        'Panel de administración y roles de usuario',
        'Automatización de procesos operativos',
        'Pasarelas de pago y facturación digital',
        'Seguridad, encriptación y respaldos automáticos',
        'Código 100% propietario sin dependencias'
      ],
      glow: 'rgba(168, 85, 247, 0.25)',
      border: 'border-purple-500/30',
      accentColor: 'text-purple-400',
      accentBg: 'bg-purple-500/10',
    }
  ];

  const subscriptionPlans = [
    {
      id: 'sub-maintenance',
      name: 'Mantenimiento & Seguridad Web',
      tagline: 'Tranquilidad total para tu sitio',
      price: '$20+',
      unit: 'USD / mes',
      badge: 'Esencial',
      badgeColor: 'text-green-400 border-green-500/30 bg-green-500/10',
      description: 'Garantizamos que tu web esté siempre activa, rápida, blindada contra ataques y actualizada.',
      features: [
        'Monitoreo de caídas 24/7 (Uptime 99.9%)',
        'Copias de seguridad semanales en la nube',
        'Renovación de certificados SSL y seguridad',
        'Corrección de errores y soporte prioritario'
      ],
      glow: 'rgba(34, 197, 94, 0.25)',
      border: 'border-green-500/30',
      accentColor: 'text-green-400',
      accentBg: 'bg-green-500/10',
    },
    {
      id: 'sub-growth',
      name: 'Crecimiento & Actualizaciones',
      tagline: 'Evolución continua para tu negocio',
      price: '$45+',
      unit: 'USD / mes',
      badge: 'Recomendado',
      badgeColor: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
      featured: true,
      description: 'Actualizaciones de contenido, mejoras visuales y optimización constante cada mes.',
      features: [
        'Todo lo del plan Mantenimiento & Seguridad',
        'Hasta 4 cambios o adiciones de contenido al mes',
        'Optimización de carga y mejoras de rendimiento',
        'Reporte mensual de visitas y rendimiento'
      ],
      glow: 'rgba(6, 182, 212, 0.25)',
      border: 'border-brand-cyan/40',
      accentColor: 'text-brand-cyan',
      accentBg: 'bg-brand-cyan/10',
    },
    {
      id: 'sub-ai',
      name: 'Automatización & Soporte IA',
      tagline: 'Atención Inteligente 24/7',
      price: '$90+',
      unit: 'USD / mes',
      badge: 'Inteligencia Digital',
      badgeColor: 'text-brand-gold border-brand-gold/30 bg-brand-gold/10',
      description: 'Implementamos y mantenemos un asistente inteligente que responde a tus clientes en automático.',
      features: [
        'Todo lo del plan Crecimiento & Actualizaciones',
        'Chatbot con IA entrenado con tus servicios',
        'Atención y captura de clientes 24 horas al día',
        'Integración con base de datos o WhatsApp'
      ],
      glow: 'rgba(245, 166, 35, 0.25)',
      border: 'border-brand-gold/30',
      accentColor: 'text-brand-gold',
      accentBg: 'bg-brand-gold/10',
    }
  ];

  const mobilePlans = [
    {
      id: 'mob-pwa',
      name: 'App Web Progresiva (PWA)',
      tagline: 'Tu web instalable en celulares Android y iPhone',
      price: '$120+',
      unit: 'USD (Pago único)',
      delivery: '3 a 5 días',
      badge: 'Alta Conversión Móvil',
      badgeColor: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
      featured: true,
      description: 'Convierte tu página web en una App que tus clientes pueden instalar en su pantalla de inicio sin pasar por Play Store ni App Store.',
      features: [
        'Ícono de aplicación instalable en el celular',
        'Carga instantánea incluso con conexión lenta',
        'Experiencia de aplicación móvil a pantalla completa',
        'Notificaciones push directas a los usuarios'
      ],
      glow: 'rgba(6, 182, 212, 0.3)',
      border: 'border-brand-cyan/40',
      accentColor: 'text-brand-cyan',
      accentBg: 'bg-brand-cyan/10',
    },
    {
      id: 'mob-app',
      name: 'App Móvil Nativa Completa',
      tagline: 'Publicación en Google Play Store & iOS',
      price: '$500+',
      unit: 'USD (Cotización según alcance)',
      delivery: '20 a 35 días',
      badge: 'Desarrollo Premium',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      description: 'Aplicación nativa de alto rendimiento desarrollada en React Native o Flutter lista para tiendas de aplicaciones.',
      features: [
        'Desarrollo para iOS (Apple) y Android (Google)',
        'Acceso nativo a cámara, GPS, notificaciones y sensores',
        'Autenticación biométrica (Huella y Face ID)',
        'Gestión para publicación oficial en las tiendas'
      ],
      glow: 'rgba(168, 85, 247, 0.25)',
      border: 'border-purple-500/30',
      accentColor: 'text-purple-400',
      accentBg: 'bg-purple-500/10',
    },
    {
      id: 'mob-checkout',
      name: 'Módulo Automatizado de Pagos',
      tagline: 'Cobros Fáciles en Bolívares y Divisas',
      price: '$50+',
      unit: 'USD (Módulo Add-on)',
      delivery: '2 a 3 días',
      badge: 'Operativo',
      badgeColor: 'text-brand-gold border-brand-gold/30 bg-brand-gold/10',
      description: 'Módulo integrado para simplificar la recepción de pagos múltiples con comprobante y confirmación automática.',
      features: [
        'Instrucciones para Pago Móvil / Transferencias',
        'Módulo de pago con Zelle / Binance Pay / Cripto',
        'Envío automático del recibo a tu WhatsApp',
        'Cálculo automático de tasa de cambio'
      ],
      glow: 'rgba(245, 166, 35, 0.25)',
      border: 'border-brand-gold/30',
      accentColor: 'text-brand-gold',
      accentBg: 'bg-brand-gold/10',
    }
  ];

  const currentPlans = 
    activeTab === 'projects' ? projectPlans :
    activeTab === 'subscriptions' ? subscriptionPlans : mobilePlans;

  return (
    <div className="min-h-screen bg-[#030712] text-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Header bar */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <a href="/" className="flex items-center">
          <LogoWithText />
        </a>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <ShieldCheck size={14} className="mr-1" /> Catálogo Oficial & Tarifas
          </span>
          <a
            href="/"
            className="text-xs text-gray-400 hover:text-white transition-colors underline"
          >
            ← Volver a la Web Principal
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* VIP Advice Highlight Box */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border-2 border-brand-cyan/40 bg-gradient-to-r from-brand-dark-2 via-[#081B33] to-brand-dark-2 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-400/40">
                <Sparkles size={14} /> 100% Gratuito y Sin Compromiso
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Asesoría Técnica y Diagnóstico de tu Proyecto
              </h2>
              <p className="text-gray-300 text-sm max-w-xl">
                ¿No estás seguro de qué paquete necesitas? Evaluamos tu caso particular, te recomendamos la arquitectura exacta y te damos un presupuesto detallado sin costo.
              </p>
            </div>
            <a
              href="https://wa.me/584242178791?text=Hola%20Ingenius%20SA,%20quiero%20solicitar%20mi%20Asesoria%20Gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-blue-500 text-black font-extrabold text-base shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MessageCircle size={20} className="text-black" />
              Solicitar Asesoría Gratis
            </a>
          </div>
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'projects'
                  ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Globe size={16} /> Proyectos Completos (Web)
            </button>
            <button
              onClick={() => setActiveTab('subscriptions')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'subscriptions'
                  ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Clock size={16} /> Suscripciones Mensuales
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'mobile'
                  ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Smartphone size={16} /> Apps & Módulos
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border bg-[#060F1F]/90 backdrop-blur transition-all ${
                plan.featured ? 'border-brand-cyan shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  {plan.delivery && (
                    <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
                      <Clock size={12} /> {plan.delivery}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs mb-6 min-h-[32px]">{plan.tagline}</p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono block mt-1">{plan.unit}</span>
                </div>

                <p className="text-gray-300 text-xs leading-relaxed mb-6">{plan.description}</p>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-gray-500 block">
                    Qué incluye:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <Check size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/584242178791?text=Hola%20Ingenius%20SA,%20quiero%20cotizar%20el%20plan:%20${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center bg-cyan-500 hover:bg-cyan-400 text-black transition-colors flex items-center justify-center gap-2"
              >
                Cotizar este Plan <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Footer Contact Direct */}
        <div className="text-center p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
          <h4 className="text-lg font-bold text-white mb-2">Ingenius SA — Ingeniería y Desarrollo de Software</h4>
          <p className="text-sm text-gray-400 mb-4">Jeremy Acosta & Saul Araujo · Ingenieros en Sistemas (USM)</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-cyan-400">
            <span>✉ proyectos.ingeniussa@gmail.com</span>
            <span>·</span>
            <span>📱 +58 414-3977946 / +58 424-2178791</span>
          </div>
        </div>
      </div>
    </div>
  );
}
