import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Send, Mail, MessageSquare, User, Phone, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

const InputField = ({ label, type = 'text', id, placeholder, icon: Icon, value, onChange, required }) => (
  <div className="relative group">
    <label htmlFor={id} className="block text-xs font-mono tracking-widest uppercase text-gray-500 mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-brand-cyan transition-colors duration-200">
        <Icon size={16} />
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-brand-dark-2/60 backdrop-blur border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 focus:bg-brand-dark-3/60 transition-all duration-300"
        style={{
          boxShadow: 'none',
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = '0 0 20px rgba(0,212,255,0.15), inset 0 0 20px rgba(0,212,255,0.03)';
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  </div>
);

const SelectService = ({ value, onChange }) => (
  <div className="relative group">
    <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 mb-2">
      Servicio de Interés
    </label>
    <select
      value={value}
      onChange={onChange}
      className="w-full bg-brand-dark-2/60 backdrop-blur border border-white/10 rounded-2xl px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-cyan/50 transition-all duration-300 appearance-none cursor-pointer"
      style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }}
    >
      <option className="bg-[#0A1628] text-gray-200" value="" disabled>Selecciona un servicio...</option>
      <option className="bg-[#0A1628] text-gray-200" value="landing-page">🌐 Desarrollo Web / Landing Page</option>
      <option className="bg-[#0A1628] text-gray-200" value="web-app">📊 Aplicación Web / Dashboard a Medida</option>
      <option className="bg-[#0A1628] text-gray-200" value="ecommerce">🛍️ E-commerce / Tienda Online</option>
      <option className="bg-[#0A1628] text-gray-200" value="ia-automation">🤖 Integración de IA & Automatización</option>
      <option className="bg-[#0A1628] text-gray-200" value="custom">💡 Otro / Proyecto Personalizado</option>
    </select>
  </div>
);

const SelectStage = ({ value, onChange }) => (
  <div className="relative group">
    <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 mb-2">
      ¿En qué etapa está tu proyecto?
    </label>
    <select
      value={value}
      onChange={onChange}
      className="w-full bg-brand-dark-2/60 backdrop-blur border border-white/10 rounded-2xl px-4 py-4 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-all duration-300 appearance-none cursor-pointer"
      style={{ backgroundColor: 'rgba(10, 22, 40, 0.6)' }}
    >
      <option className="bg-[#0A1628] text-gray-200" value="" disabled>Selecciona una opción...</option>
      <option className="bg-[#0A1628] text-gray-200" value="idea">💡 Tengo una idea, aún la estoy definiendo</option>
      <option className="bg-[#0A1628] text-gray-200" value="clara">🗺️ Ya tengo claridad de lo que necesito</option>
      <option className="bg-[#0A1628] text-gray-200" value="mejorar">🔧 Quiero mejorar o escalar algo existente</option>
      <option className="bg-[#0A1628] text-gray-200" value="urgente">🚀 Lo necesito pronto, es urgente</option>
    </select>
  </div>
);

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', stage: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '6517d135-4048-4053-8221-939ba8dc682b',
          subject: `🔥 Nueva Idea de Proyecto: ${form.name} - Ingenius SA`,
          from_name: 'Ingenius SA Portal',
          replyto: form.email,
          message: `
          🎯 NUEVO PROYECTO RECIBIDO DESDE LA WEB
          
          👤 Nombre: ${form.name}
          📧 Email: ${form.email}
          📞 Teléfono: ${form.phone || 'No indicado'}
          🔧 Servicio: ${form.service || 'A definir'}
          📌 Etapa del Proyecto: ${form.stage || 'No indicada'}
          
          💬 Descripción o idea del proyecto:
          ${form.message}
          `
        }),
      });

      if (response.status === 200) {
        setStatus('success');
        const clientName = form.name;
        // Reiniciar formulario
        setForm({ name: '', email: '', phone: '', service: '', stage: '', message: '' });
        
        // Redirigir a WhatsApp a los 1.5 seg como "doble toque" de seguridad
        const msg = encodeURIComponent(
          `¡Hola! Soy *${clientName}* y les acabo de compartir la idea de mi proyecto a su correo desde la web de Ingenius SA.`
        );
        setTimeout(() => {
          window.open(`https://wa.me/584143977946?text=${msg}`, '_blank');
          setTimeout(() => setStatus('idle'), 2000);
        }, 1500);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'proyectos.ingeniussa@gmail.com', href: 'mailto:proyectos.ingeniussa@gmail.com' },
    { icon: Phone, label: 'WhatsApp', value: '+58 414 397 7946', href: 'https://wa.me/584143977946' },
    { icon: MessageSquare, label: 'Respuesta', value: 'Menos de 24 horas', href: null },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-brand-cyan/30 to-transparent" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-brand-gold/4 blur-3xl" />
        <div className="absolute top-1/3 left-0 w-60 h-60 rounded-full bg-brand-cyan/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">
            <Send size={12} />
            Contacto
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-white mt-6 mb-6 leading-tight">
            Háblanos de tu {' '}
            <span className="gradient-text-gold">próximo proyecto</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg mb-8">
            Compártenos los detalles. Evaluaremos la factibilidad técnica y te enviaremos una propuesta sin compromiso.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-xs text-red-200">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-semibold">Alta Demanda:</span> Solo aceptamos 3 proyectos nuevos al mes.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-4">
                ¿Por qué elegirnos?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                En Ingenius SA, no creemos en soluciones genéricas. Diseñamos 
                software exclusivo de alto impacto, construido desde cero para 
                garantizar tu ventaja competitiva.
              </p>
            </div>

            {/* Benefits */}
            {[
              'Evaluación transparente y detallada',
              'Propuesta técnica detallada en menos de 24h',
              'Comunicación directa con el experto a cargo',
              'Código que te pertenece 100%',
              'Garantía de calidad post-entrega',
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <CheckCircle2 size={16} className="text-brand-gold flex-shrink-0" />
                {benefit}
              </motion.div>
            ))}

            {/* Contact Links */}
            <div className="space-y-3 pt-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-3 glass-card border border-white/8 rounded-2xl px-4 py-3 group hover:border-brand-cyan/30 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-brand-cyan" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 font-mono">{item.label}</div>
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.value}</div>
                    </div>
                    {item.href && <ArrowRight size={14} className="text-gray-600 ml-auto group-hover:text-brand-cyan transition-colors" />}
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              className="glass-card rounded-3xl border border-white/8 p-8 lg:p-10 relative overflow-hidden"
              style={{ boxShadow: '0 0 60px rgba(0,212,255,0.08)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/5 rounded-bl-full" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={40} className="text-brand-gold" />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3">¡Mensaje Enviado!</h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                      Te contactaremos en menos de 24 horas. 
                      También te redirigimos a WhatsApp para mayor rapidez.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 relative z-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="Tu Nombre"
                        id="contact-name"
                        placeholder="Juan Pérez"
                        icon={User}
                        value={form.name}
                        onChange={handleChange('name')}
                        required
                      />
                      <InputField
                        label="Email"
                        type="email"
                        id="contact-email"
                        placeholder="juan@empresa.com"
                        icon={Mail}
                        value={form.email}
                        onChange={handleChange('email')}
                        required
                      />
                    </div>

                    <InputField
                      label="WhatsApp / Teléfono"
                      id="contact-phone"
                      placeholder="+58 424 217 8791"
                      icon={Phone}
                      value={form.phone}
                      onChange={handleChange('phone')}
                    />

                    <SelectService value={form.service} onChange={handleChange('service')} />
                    <SelectStage value={form.stage} onChange={handleChange('stage')} />

                    <div className="relative group">
                      <label htmlFor="contact-message" className="block text-xs font-mono tracking-widest uppercase text-gray-500 mb-2">
                        Cuéntanos tu proyecto
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange('message')}
                        placeholder="Describe brevemente tu idea o necesidad. ¿Qué problema quieres resolver? ¿Cuál es tu objetivo de negocio?"
                        required
                        className="w-full bg-brand-dark-2/60 backdrop-blur border border-white/10 rounded-2xl px-4 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 transition-all duration-300 resize-none"
                        onFocus={(e) => { e.target.style.boxShadow = '0 0 20px rgba(0,212,255,0.15)'; }}
                        onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                      className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar Idea de Proyecto
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-600">
                      Tu información es confidencial y nunca será compartida.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
