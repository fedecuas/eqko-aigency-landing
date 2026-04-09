import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Mini avatar component
function Avatar({ initials, color }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-display font-bold text-[#0F0E0D] -ml-2 first:ml-0 border-2 border-[#0F0E0D]"
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
        style={{ background: 'radial-gradient(ellipse at center, #E8A020 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Main card */}
      <div
        className="relative rounded-2xl border border-[#2E2C2A] overflow-hidden"
        style={{
          background: '#1A1917',
          transform: 'rotateY(-6deg) rotateX(4deg)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,160,32,0.08)',
        }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2E2C2A]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#E8A020]" />
            <span className="font-display font-semibold text-[13px] text-[#F2EDE8]">Panel de Crecimiento</span>
          </div>
          <span className="text-[11px] font-body text-[#9C9490]">Tiempo real</span>
        </div>

        {/* Metrics */}
        <div className="px-5 pt-4 pb-5 space-y-3">

          {/* Metric 1 */}
          <div className="flex items-center justify-between p-3.5 rounded-xl" style={{ background: 'rgba(232,160,32,0.06)' }}>
            <div>
              <p className="text-[11px] font-body text-[#9C9490] uppercase tracking-wider mb-0.5">Leads este mes</p>
              <p className="font-display font-bold text-[26px] text-[#F2EDE8] leading-none">127</p>
            </div>
            <div className="flex items-center gap-1.5 bg-[rgba(232,160,32,0.15)] text-[#E8A020] px-2.5 py-1.5 rounded-lg">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 9L6 4L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-display font-semibold text-[13px]">+43%</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex items-center justify-between p-3.5 rounded-xl" style={{ background: 'rgba(26,25,23,0.6)', border: '1px solid #2E2C2A' }}>
            <div>
              <p className="text-[11px] font-body text-[#9C9490] uppercase tracking-wider mb-0.5">ROAS actual</p>
              <p className="font-display font-bold text-[26px] text-[#F2EDE8] leading-none">4.8<span className="text-[16px] text-[#9C9490] font-body font-normal">x</span></p>
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
                      background: i === 6 ? '#E8A020' : 'rgba(232,160,32,0.25)',
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-body text-[#9C9490]">últimos 7 días</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="flex items-center justify-between p-3.5 rounded-xl" style={{ background: 'rgba(26,25,23,0.6)', border: '1px solid #2E2C2A' }}>
            <div>
              <p className="text-[11px] font-body text-[#9C9490] uppercase tracking-wider mb-0.5">Prospectos calificados</p>
              <p className="font-display font-bold text-[26px] text-[#F2EDE8] leading-none">89</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              {/* Progress arc / pill */}
              <div className="w-24 h-2 rounded-full overflow-hidden" style={{ background: '#2E2C2A' }}>
                <div className="h-full rounded-full" style={{ width: '70%', background: 'linear-gradient(90deg, #E8A020, #FFC84D)' }} />
              </div>
              <span className="text-[10px] font-body text-[#9C9490]">70% del objetivo</span>
            </div>
          </div>

        </div>

        {/* Card footer */}
        <div className="px-5 py-3 border-t border-[#2E2C2A] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
          <span className="text-[11px] font-body text-[#9C9490]">Sistema activo — actualizando</span>
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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F0E0D]"
      aria-label="Sección principal"
    >
      {/* Background: dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #2E2C2A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Background: amber radial glow right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(232,160,32,0.14) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, #0F0E0D, transparent)' }}
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
                  background: 'rgba(232,160,32,0.1)',
                  border: '1px solid rgba(232,160,32,0.25)',
                  color: '#E8A020',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020]" aria-hidden="true" />
                Agencia de Marketing Digital con IA · México
              </span>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h1
                className="font-display font-extrabold text-[#F2EDE8] leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(38px, 5.5vw, 72px)' }}
              >
                Tu competencia ya está{' '}
                <span className="text-[#E8A020]">creciendo con IA</span>.{' '}
                Tú también puedes.
              </h1>
            </div>

            {/* Subheadline */}
            <div
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="font-body text-[17px] md:text-[18px] text-[#9C9490] leading-[1.7] max-w-[540px]">
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
                  font-display font-bold text-[15px] text-[#0F0E0D]
                  bg-[#E8A020] hover:bg-[#C4821A]
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
                  font-body text-[15px] text-[#9C9490] hover:text-[#F2EDE8]
                  px-6 py-4 rounded-xl
                  border border-[#2E2C2A] hover:border-[#9C9490]
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
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9C9490" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p className="font-body text-[13px] text-[#9C9490]">Sin costo · Sin compromiso · Respondemos en menos de 24 hs</p>
            </div>

            {/* Social proof */}
            <div
              className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '400ms' }}
            >
              {/* Avatars */}
              <div className="flex items-center" role="img" aria-label="Fotos de clientes">
                <Avatar initials="MG" color="#E8A020" />
                <Avatar initials="DP" color="#FFC84D" />
                <Avatar initials="CR" color="#C4821A" />
              </div>

              <p className="font-body text-[14px] text-[#9C9490]">
                <span className="text-[#F2EDE8] font-semibold">143 negocios</span>{' '}
                de México y LATAM ya tienen su sistema funcionando
              </p>
            </div>

          </div>

          {/* ── RIGHT: Dashboard visual ── */}
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <DashboardCard />
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to top, #0F0E0D, transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
