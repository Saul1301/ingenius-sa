import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  RefreshCw, 
  Zap, 
  Bot, 
  CreditCard,
  MessageCircle,
  HelpCircle,
  Clock,
  Rocket
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const tabs = [
  { id: 'projects', label: 'Proyectos Completos', icon: Rocket, subtext: 'Pago único / Código 100% tuyo' },
  { id: 'subscriptions', label: 'Suscripciones Mensuales', icon: RefreshCw, subtext: 'Hosting, soporte & IA continua' },
  { id: 'mobile', label: 'Apps & Extensiones', icon: Smartphone, subtext: 'Móviles, PWA & Pasarelas' },
];

const projectPlans = [
  {
    id: 'landing',
    name: 'Smart Landing Page',
    tagline: 'Conversión Rápida & Alto Impacto',
    price: '$120+',
    unit: 'USD / Proyecto Base',
    delivery: '3 a 5 días hábiles',
    badge: 'Popular para Iniciar',
    badgeColor: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
    description: 'Página web moderna de una sola sección optimizada para convertir visitantes en clientes de WhatsApp o llamadas telefónicas.',
    features: [
      'Diseño UI/UX exclusivo y responsive',
      'Animaciones fluidas y carga instantánea',
      'Botón directo a WhatsApp & llamada',
      'Formulario de captura de leads/clientes',
      'Integración con Google Analytics',
      'Dominio y hosting configurados'
    ],
    glow: 'rgba(6, 182, 212, 0.25)',
    border: 'border-brand-cyan/30',
    accentColor: 'text-brand-cyan',
    accentBg: 'bg-brand-cyan/10',
    buttonColor: 'bg-brand-cyan text-black hover:bg-brand-cyan/90',
  },
  {
    id: 'corporate',
    name: 'Web Corporativa / Catálogo',
    tagline: 'Autoridad & Portafolio Completo',
    price: '$220+',
    unit: 'USD / Proyecto Base',
    delivery: '1 a 2 semanas',
    badge: 'Más Solicitado',
    badgeColor: 'text-brand-gold border-brand-gold/30 bg-brand-gold/10',
    popular: true,
    description: 'Ecosistema web multi-página para empresas y marcas que requieren mostrar múltiples servicios, catálogo de productos y respaldo formal.',
    features: [
      'Hasta 5-7 secciones/páginas estructuradas',
      'Catálogo visual de productos o servicios',
      'Sección Nosotros / Equipo & Testimonios',
      'Optimización SEO para Google Caracas/VE',
      'Mapa interactivo y múltiples canales de contacto',
      '30 días de soporte técnico gratuito'
    ],
    glow: 'rgba(245, 166, 35, 0.3)',
    border: 'border-brand-gold/40',
    accentColor: 'text-brand-gold',
    accentBg: 'bg-brand-gold/10',
    buttonColor: 'bg-brand-gold text-black hover:bg-brand-gold/90',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce / Sistema a Medida',
    tagline: 'Ventas Automatizadas & Panel Admin',
    price: '$450+',
    unit: 'USD / Proyecto Base',
    delivery: '2 a 3 semanas',
    badge: 'Máxima Potencia',
    badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    description: 'Tienda digital o software web a medida con carrito de compra, gestión de pedidos y base de datos protegida.',
    features: [
      'Tienda virtual con productos ilimitados',
      'Carrito de compras y checkout optimizado',
      'Pasarelas: Pago Móvil, Zelle, Binance, etc.',
      'Panel administrativo para gestionar inventario',
      'Gestión de usuarios y pedidos en tiempo real',
      'Seguridad con encriptación y base de datos blindada'
    ],
    glow: 'rgba(168, 85, 247, 0.25)',
    border: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    accentBg: 'bg-purple-500/10',
    buttonColor: 'bg-purple-500 text-white hover:bg-purple-600',
  }
];

const subscriptionPlans = [
  {
    id: 'sub-basic',
    name: 'Mantenimiento & Hosting',
    tagline: 'Seguridad & Estabilidad Total',
    price: '$20+',
    unit: 'USD / mes',
    badge: 'Esencial',
    badgeColor: 'text-gray-300 border-white/20 bg-white/5',
    description: 'Nos encargamos de que tu web nunca se caiga, cargue rápido y esté siempre blindada contra ataques.',
    features: [
      'Hosting en la nube de alta velocidad',
      'Certificado de seguridad SSL (https)',
      'Copias de seguridad semanales automáticas',
      'Monitoreo de actividad 24/7',
      'Soporte técnico ante cualquier incidencia'
    ],
    glow: 'rgba(59, 130, 246, 0.2)',
    border: 'border-blue-500/30',
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    buttonColor: 'bg-blue-500 text-white hover:bg-blue-600',
  },
  {
    id: 'sub-growth',
    name: 'Crecimiento & Actualizaciones',
    tagline: 'Tu Web Siempre al Día',
    price: '$45+',
    unit: 'USD / mes',
    badge: 'Recomendado',
    badgeColor: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
    popular: true,
    description: 'Incluye toda la infraestructura más cambios mensuales de fotos, textos, subida de nuevos productos y promociones.',
    features: [
      'Todo lo del plan Mantenimiento & Hosting',
      'Hasta 4 solicitudes de cambios de contenido/mes',
      'Publicación de nuevos productos o servicios',
      'Ajustes de diseño para fechas especiales',
      'Reporte mensual de visitas y conversiones',
      'Optimización continua de velocidad'
    ],
    glow: 'rgba(6, 182, 212, 0.25)',
    border: 'border-brand-cyan/40',
    accentColor: 'text-brand-cyan',
    accentBg: 'bg-brand-cyan/10',
    buttonColor: 'bg-brand-cyan text-black hover:bg-brand-cyan/90',
  },
  {
    id: 'sub-ai',
    name: 'Automatización & Soporte IA',
    tagline: 'Atención Inteligente 24/7',
    price: '$90+',
    unit: 'USD / mes',
    badge: 'Inteligencia Digital',
    badgeColor: 'text-brand-gold border-brand-gold/30 bg-brand-gold/10',
    description: 'Implementamos y mantenemos un asistente inteligente que responde a tus clientes en tu web o WhatsApp en automático.',
    features: [
      'Todo lo del plan Crecimiento & Actualizaciones',
      'Chatbot con IA entrenado con tus productos/servicios',
      'Atención y captura de clientes 24 horas al día',
      'Integración con base de datos o WhatsApp',
      'Entrenamiento continuo y ajustes del modelo',
      'Atención prioritaria VIP por los fundadores'
    ],
    glow: 'rgba(245, 166, 35, 0.3)',
    border: 'border-brand-gold/40',
    accentColor: 'text-brand-gold',
    accentBg: 'bg-brand-gold/10',
    buttonColor: 'bg-brand-gold text-black hover:bg-brand-gold/90',
  }
];

const mobilePlans = [
  {
    id: 'mob-pwa',
    name: 'PWA (Web Instalable en Móvil)',
    tagline: 'Tu Web como App en Pantalla de Inicio',
    price: '$120+',
    unit: 'USD (Upgrade / Instalable)',
    delivery: '3 a 5 días',
    badge: 'Alta Conversión',
    badgeColor: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
    popular: true,
    description: 'Transformamos tu sitio web en una aplicación instalable en teléfonos Android y iPhone con su propio ícono y carga ultrarrápida.',
    features: [
      'Ícono exclusivo en la pantalla de inicio del cliente',
      'Experiencia de navegación a pantalla completa (sin barra URL)',
      'No requiere pagar cuentas de desarrollador en App Store ni Google Play',
      'Carga ultrarrápida incluso con conexiones lentas en Venezuela',
      'Instalación en 1 solo clic desde el navegador'
    ],
    glow: 'rgba(6, 182, 212, 0.3)',
    border: 'border-brand-cyan/40',
    accentColor: 'text-brand-cyan',
    accentBg: 'bg-brand-cyan/10',
    buttonColor: 'bg-brand-cyan text-black hover:bg-brand-cyan/90',
  },
  {
    id: 'mob-native',
    name: 'App Móvil Nativa / Híbrida',
    tagline: 'Desarrollo en React Native (Android & iOS)',
    price: '$500+',
    unit: 'USD / Proyecto Base',
    delivery: '3 a 6 semanas',
    badge: 'Máximo Nivel',
    badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    description: 'Aplicación móvil completa con arquitectura escalable, conexión a APIs y base de datos en tiempo real.',
    features: [
      'Compatibilidad total para Android y iPhone',
      'Notificaciones push personalizadas',
      'Autenticación de usuarios segura',
      'Sincronización en vivo con tu panel web',
      'Arquitectura construida por Ingenieros de Sistemas'
    ],
    glow: 'rgba(168, 85, 247, 0.25)',
    border: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    accentBg: 'bg-purple-500/10',
    buttonColor: 'bg-purple-500 text-white hover:bg-purple-600',
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
      'Instrucciones y formularios para Pago Móvil / Transferencias',
      'Módulo de pago con Zelle / Binance Pay / Cripto',
      'Envío automático del recibo a tu WhatsApp o correo',
      'Cálculo automático de tasa de cambio'
    ],
    glow: 'rgba(245, 166, 35, 0.25)',
    border: 'border-brand-gold/30',
    accentColor: 'text-brand-gold',
    accentBg: 'bg-brand-gold/10',
    buttonColor: 'bg-brand-gold text-black hover:bg-brand-gold/90',
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('projects');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });

  const currentPlans = 
    activeTab === 'projects' ? projectPlans :
    activeTab === 'subscriptions' ? subscriptionPlans : mobilePlans;

  return (
    <section id="services" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-brand-cyan/30 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-brand-cyan/5" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[120px] bg-brand-gold/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-6 inline-flex">
            <Sparkles size={12} />
            Servicios & Tarifas Transparentes
          </span>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-white mt-4 mb-6 leading-tight">
            Soluciones de ingeniería adaptadas a <span className="gradient-text-main">tu modelo de negocio</span>.
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10">
            Elige entre proyectos completos llave en mano, planes mensuales con todo incluido o extensiones móviles de alto rendimiento.
          </p>

          {/* 🌟 MEGA BANNER DE ASESORÍA GRATUITA 🌟 */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative max-w-4xl mx-auto rounded-3xl p-1 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.25)] border border-emerald-500/40"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.1), rgba(16,185,129,0.05))'
            }}
          >
            <div className="relative bg-[#06151E] rounded-[22px] px-6 py-6 sm:px-10 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <Bot size={36} className="text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono font-black uppercase tracking-widest text-emerald-400">
                      ⚡ Diagnóstico & Consulta Sin Costo
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    Asesoría de Ingeniería <span className="text-emerald-300">100% GRATIS</span>
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-lg leading-relaxed">
                    Evaluamos tu proyecto o negocio en menos de 24 horas y te entregamos una propuesta técnica a la medida, sin ningún compromiso.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href="https://wa.me/584143977946?text=Hola%20Jeremy%20y%20Saul,%20quiero%20solicitar%20la%20asesor%C3%ADa%20gratuita%20para%20mi%20proyecto%20con%20Ingenius%20SA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-display font-black text-sm text-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:scale-105 transition-transform duration-300 shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                >
                  <MessageCircle size={18} />
                  <span>Agendar Asesoría Gratis</span>
                </a>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* ─── TABS SELECTOR ─── */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-full overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    isActive ? 'text-white shadow-lg' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-cyan/20 via-white/10 to-brand-gold/20 border border-white/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={16} className={isActive ? 'text-brand-cyan relative z-10' : 'relative z-10'} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── PLANS CARDS GRID ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentPlans.map((plan, i) => (
              <SpotlightCard
                key={plan.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={`glass-card rounded-3xl border ${plan.border} p-8 lg:p-9 relative flex flex-col justify-between group overflow-hidden ${
                  plan.popular ? 'ring-1 ring-white/20 shadow-2xl' : ''
                }`}
                style={{
                  boxShadow: `0 0 35px ${plan.glow}`,
                }}
                spotlightColor={plan.glow}
              >
                {/* Background accent glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${plan.accentBg} rounded-bl-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity`} />

                <div className="relative z-10">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>
                    {plan.delivery && (
                      <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                        <Clock size={12} className={plan.accentColor} />
                        {plan.delivery}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${plan.accentColor} font-bold block mb-1`}>
                      {plan.tagline}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price display */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display font-black text-4xl text-white tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono mt-1 block">
                      {plan.unit}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-8">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-gray-500 block mb-3">
                      Incluye:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-snug">
                          <CheckCircle2 size={15} className={`${plan.accentColor} flex-shrink-0 mt-0.5`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct CTA button */}
                <div className="relative z-10 pt-4 border-t border-white/5">
                  <a
                    href={`https://wa.me/584143977946?text=Hola,%20me%20interesa%20el%20plan:%20${encodeURIComponent(plan.name)}%20con%20Ingenius%20SA.%20Quisiera%20solicitar%20la%20asesoría%20gratuita.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg ${plan.buttonColor}`}
                  >
                    <MessageCircle size={15} />
                    <span>Solicitar Asesoría Gratis</span>
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── GUARANTEE & RISK REVERSAL BANNER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative glass-card border border-brand-gold/20 rounded-3xl p-1 overflow-hidden max-w-4xl mx-auto">
            <div className="relative bg-[#0A1628] rounded-[22px] px-8 py-8 sm:px-12 sm:py-10 flex flex-col sm:flex-row items-center gap-8 text-left">
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                <ShieldCheck size={36} className="text-brand-gold" />
              </div>

              <div className="flex-1">
                <h4 className="font-display font-bold text-2xl text-white mb-2">
                  Garantía de Soporte <span className="text-brand-gold">100% Sin Riesgo</span>
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  El mayor temor al contratar desarrollo es quedar sin soporte. Nosotros garantizamos <strong className="text-gray-200">30 días de soporte técnico gratuito</strong> post-entrega. Si algo falla o requiere ajustes, nuestro equipo de ingenieros lo resuelve sin costo adicional.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-brand-gold"><CheckCircle2 size={14}/> 100% Código Propio</span>
                  <span className="flex items-center gap-1.5 text-brand-cyan"><CheckCircle2 size={14}/> Asesoría Inicial Gratis</span>
                  <span className="flex items-center gap-1.5 text-emerald-400"><CheckCircle2 size={14}/> Cero Letras Pequeñas</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

