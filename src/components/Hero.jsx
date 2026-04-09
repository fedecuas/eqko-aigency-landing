import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Mini avatar component
function Avatar({ initials, color }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-display font-bold text-[#0E1C2D] -ml-2 first:ml-0 border-2 border-[#0E1C2D]"
      style={{ background: color }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

// Dashboard metric card
function DashboardCard() {
  return (
    <div
      className="relative w-full max-w-[420px] mx-auto"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Glow behind card */}
      <div
        className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
        style={{ background: 'radial-gradient(ellipse at center, #BB5624 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Main card */}
      <div
        className="relative rounded-2xl border border-[#1E3050] overflow-hidden"
        style={{
          background: '#132238',
          transform: 'rotateY(-6deg) rotateX(4deg)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(187,86,36,0.08)',
        }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1E3050]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#BB5624]" />
            <span className="font-display font-semibold text-[13px] text-[#F1EDEE]">Panel de Crecimiento</span>
          </div>
          <span className="text-[11px] font-body text-[#8899AA]">Tiempo real</span>
        </div>

        {/* Metrics */}
        <div className="px-5 pt-4 pb-5 space-y-3">

          {/* Metric 1 */}
          <div className="flex items-center justify-between p-3.5 rounded-xl" style={{ background: 'rgba(187,86,36,0.06)' }}>
            <div>
              <p className="text-[11px] font-body text-[#8899AA] uppercase tracking-wider mb-0.5">Leads este mes</p>
              <p className="font-display font-bold text-[26px] text-[#F1EDEE] leading-none">127</p>
            </div>
            <div className="flex items-center gap-1.5 bg-[rgba(187,86,36,0.15)] text-[#BB5624] px-2.5 py-1.5 rounded-lg">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 9L6 4L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-display font-semibold text-[13px]">+43%</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex items-center justify-between p-3.5 rounded-xl" style={{ background: 'rgba(19,34,56,0.6)', border: '1px solid #1E3050' }}>
            <div>
              <p className="text-[11px] font-body text-[#8899AA] uppercase tracking-wider mb-0.5">ROAS actual</p>
              <p className="font-display font-bold text-[26px] text-[#F1EDEE] leading-none">4.8<span className="text-[16px] text-[#8899AA] font-body font-normal">x</span></p>
            </div>
            <div className="flex flex-col items-end gap-1">
              {/* Mini bar chart */}
              <div className="flex items-end gap-0.5 h-8">
                {[3, 5, 4, 7, 6, 8, 9].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-sm"
                    style={{
                      height: `${h * 3}px`,
                      background: i === 6 ? '#BB5624' : 'rgba(187,86,36,0.25)',
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-body text-[#8899AA]">últimos 7 días</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="flex items-center justify-between p-3.5 rounded-xl" style={{ background: 'rgba(19,34,56,0.6)', border: '1px solid #1E3050' }}>
            <div>
              <p className="text-[11px] font-body text-[#8899AA] uppercase tracking-wider mb-0.5">Prospectos calificados</p>
              <p className="font-display font-bold text-[26px] text-[#F1EDEE] leading-none">89</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              {/* Progress arc / pill */}
              <div className="w-24 h-2 rounded-full overflow-hidden" style={{ background: '#1E3050' }}>
                <div className="h-full rounded-full" style={{ width: '70%', background: 'linear-gradient(90deg, #BB5624, #D4682E)' }} />
              </div>
              <span className="text-[10px] font-body text-[#8899AA]">70% del objetivo</span>
            </div>
          </div>

        </div>

        {/* Card footer */}
        <div className="px-5 py-3 border-t border-[#1E3050] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
          <span className="text-[11px] font-body text-[#8899AA]">Sistema activo — actualizando</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0E1C2D]"
      aria-label="Sección principal"
    >
      {/* Background: dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #1E3050 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Background: amber radial glow right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(187,86,36,0.14) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, #0E1C2D, transparent)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-6">

            {/* Eyebrow badge */}
            <div
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-display font-semibold uppercase tracking-widest"
                style={{
                  background: 'rgba(187,86,36,0.1)',
                  border: '1px solid rgba(187,86,36,0.25)',
                  color: '#BB5624',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#BB5624]" aria-hidden="true" />
                Agencia de Marketing Digital con IA · México
              </span>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h1
                className="font-display font-extrabold text-[#F1EDEE] leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(38px, 5.5vw, 72px)' }}
              >
                Tu competencia ya está{' '}
                <span className="text-[#BB5624]">creciendo con IA</span>.{' '}
                Tú también puedes.
              </h1>
            </div>

            {/* Subheadline */}
            <div
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="font-body text-[17px] md:text-[18px] text-[#8899AA] leading-[1.7] max-w-[540px]">
                EQKO AIgency diseña y opera el sistema completo de marketing digital y automatización que convierte desconocidos en clientes — sin que tengas que tocar una sola herramienta.
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '300ms' }}
            >
              {/* Primary CTA */}
              <a
                href="#contacto"
                className="
                  inline-flex items-center justify-center gap-2
                  font-display font-bold text-[15px] text-[#0E1C2D]
                  bg-[#BB5624] hover:bg-[#9A4118]
                  px-7 py-4 rounded-xl
                  transition-all duration-200
                  cursor-pointer
                "
                style={{ animation: 'pulseCta 2s ease-in-out infinite' }}
                aria-label="Agenda tu consultoría gratuita con EQKO AIgency"
              >
                Agenda tu consultoría gratuita
                <span aria-hidden="true">→</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#proceso"
                className="
                  inline-flex items-center justify-center gap-2
                  font-body text-[15px] text-[#8899AA] hover:text-[#F1EDEE]
                  px-6 py-4 rounded-xl
                  border border-[#1E3050] hover:border-[#8899AA]
                  transition-all duration-200
                "
                aria-label="Ver cómo funciona EQKO AIgency"
              >
                Ver cómo funciona
              </a>
            </div>

            {/* Friction reducer */}
            <div
              className={`flex items-center gap-1.5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '350ms' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8899AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p className="font-body text-[13px] text-[#8899AA]">Sin costo · Sin compromiso · Respondemos en menos de 24 hs</p>
            </div>

            {/* Social proof */}
            <div
              className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '400ms' }}
            >
              {/* Avatars */}
              <div className="flex items-center" role="img" aria-label="Fotos de clientes">
                <Avatar initials="MG" color="#BB5624" />
                <Avatar initials="DP" color="#D4682E" />
                <Avatar initials="CR" color="#9A4118" />
              </div>

              <p className="font-body text-[14px] text-[#8899AA]">
                <span className="text-[#F1EDEE] font-semibold">143 negocios</span>{' '}
                de México y LATAM ya tienen su sistema funcionando
              </p>
            </div>

          </div>

          {/* ── RIGHT: Panda avatar ── */}
          <div
            className={`relative flex items-end justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            {/* Glow behind panda */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full blur-3xl opacity-25 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #BB5624 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <img
              src="/panda.png"
              alt="EQKO AIgency — Agente de IA"
              className="relative z-10 w-full max-w-[480px] drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 60px rgba(187,86,36,0.2))' }}
            />
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to top, #0E1C2D, transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
