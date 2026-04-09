import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import CalendlyTrigger from './CalendlyTrigger';

export default function CTAFinal() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulated submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section 
      id="contacto"
      className="relative bg-[var(--color-grafito)] py-20 md:py-32 overflow-hidden"
      aria-label="Formulario de contacto final"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-amber)] blur-[150px] opacity-[0.03] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center"
        >
          {/* ── LEFT: Content ── */}
          <div className={`transition-all duration-800 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 
              className="font-display font-bold text-[var(--color-crema)] mb-6"
              style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: '1' }}
            >
              ¿Listo para <span className="text-[var(--color-amber)]">EQKO-system?</span>
            </h2>
            
            <p className="font-body text-[18px] md:text-[20px] text-[var(--color-niebla)] leading-[1.6] mb-10 max-w-[500px]">
              No pierdas más tiempo en tareas manuales. Hablemos sobre cómo la IA puede transformar tu funnel de ventas hoy mismo.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-piedra)] border border-[var(--color-linea)] flex items-center justify-center text-[var(--color-amber)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-body text-[14px] text-[var(--color-niebla)]">Escríbenos a</p>
                  <p className="font-display font-bold text-[var(--color-crema)] text-[18px]">hola@eqko.tech</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(183,206,20,0.1)] flex items-center justify-center text-[var(--color-amber)] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--color-niebla)] text-sm mb-0.5 font-body">WhatsApp Directo</p>
                  <p className="font-display font-bold text-[var(--color-crema)] text-[18px]">+52 55 8530 0838</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className={`transition-all duration-800 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative p-8 md:p-10 rounded-3xl bg-[var(--color-carbono)] border border-[var(--color-linea)] shadow-2xl overflow-hidden">
              {/* Submission status overlays */}
              {status === 'success' && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center bg-[var(--color-carbono)] p-8 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[rgba(183,206,20,0.1)] flex items-center justify-center text-[var(--color-amber)] mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-[var(--color-crema)] text-2xl mb-2">¡Recibido!</h3>
                  <p className="font-body text-[var(--color-niebla)]">Nuestro equipo de arquitectura IA te contactará en menos de 24 horas.</p>
                </div>
              )}

              <h3 className="font-display font-bold text-[var(--color-crema)] text-[24px] mb-8">Reserva tu sesión estratégica</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-display font-bold text-[12px] text-[var(--color-niebla)] uppercase tracking-wider">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-[var(--color-piedra)] border border-[var(--color-linea)] rounded-xl px-5 py-4 text-[var(--color-crema)] focus:outline-none focus:border-[var(--color-amber)] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-display font-bold text-[12px] text-[var(--color-niebla)] uppercase tracking-wider">Correo Corporativo</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-[var(--color-piedra)] border border-[var(--color-linea)] rounded-xl px-5 py-4 text-[var(--color-crema)] focus:outline-none focus:border-[var(--color-amber)] transition-colors"
                    placeholder="email@tuempresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-display font-bold text-[12px] text-[var(--color-niebla)] uppercase tracking-wider">¿En qué te podemos ayudar?</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    required
                    className="w-full bg-[var(--color-piedra)] border border-[var(--color-linea)] rounded-xl px-5 py-4 text-[var(--color-crema)] focus:outline-none focus:border-[var(--color-amber)] transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu negocio..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[var(--color-amber)] hover:bg-[var(--color-amber)]/90 text-[var(--color-carbono)] font-display font-black py-5 rounded-xl transition-all active:scale-[0.98] shadow-[0_10px_30px_rgba(183,206,20,0.3)] flex items-center justify-center gap-3 disabled:opacity-70 mb-6"
                >
                  {status === 'loading' ? (
                    'ENVIANDO...'
                  ) : (
                    <>
                      COMENZAR TRANSFORMACIÓN
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="text-center px-4">
                  <p className="font-body text-[13px] text-[var(--color-niebla)] mb-2">¿Prefieres elegir tu horario ahora?</p>
                  <CalendlyTrigger 
                    className="text-[var(--color-amber)] font-display font-bold text-[14px] hover:underline cursor-pointer bg-transparent border-none p-0"
                    text="Agendar sesión por Calendly →"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
