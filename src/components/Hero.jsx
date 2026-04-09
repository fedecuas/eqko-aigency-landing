import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import CalendlyTrigger from './CalendlyTrigger';

// Mini avatar component
function Avatar({ initials, color }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-display font-bold text-[var(--color-carbono)] -ml-2 first:ml-0 border-2 border-[var(--color-carbono)]"
      style={{ background: color }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

// Dashboard metric card — colorful palette
function DashboardCard() {
  return (
    <div className="relative w-full">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-40"
        style={{ background: 'radial-gradient(ellipse at center, var(--color-amber) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className="relative rounded-2xl border border-[var(--color-linea)] overflow-hidden"
        style={{
          background: 'var(--color-carbono)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(183,206,20,0.12)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-linea)]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--color-amber)]" />
            <span className="font-display font-semibold text-[12px] text-[var(--color-crema)]">Panel EQKO</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[10px] font-body text-[var(--color-niebla)]">Live</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="px-4 pt-3 pb-4 space-y-2.5">

          {/* Lime — Leads */}
          <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'var(--color-amber-subtle)', border: '1px solid rgba(183,206,20,0.2)' }}>
            <div>
              <p className="text-[10px] font-body text-[var(--color-niebla)] uppercase tracking-wider mb-0.5">Leads este mes</p>
              <p className="font-display font-bold text-[22px] text-[var(--color-crema)] leading-none">127</p>
            </div>
            <div className="flex items-center gap-1 bg-[rgba(183,206,20,0.15)] text-[var(--color-amber)] px-2 py-1 rounded-lg">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 9L6 4L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-display font-semibold text-[12px]">+43%</span>
            </div>
          </div>

          {/* Cyan — ROAS */}
          <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(40,171,227,0.08)', border: '1px solid rgba(40,171,227,0.2)' }}>
            <div>
              <p className="text-[10px] font-body text-[var(--color-niebla)] uppercase tracking-wider mb-0.5">ROAS actual</p>
              <p className="font-display font-bold text-[22px] text-[var(--color-crema)] leading-none">4.8<span className="text-[14px] text-[var(--color-niebla)] font-normal">x</span></p>
            </div>
            <div className="flex items-end gap-0.5 h-7">
              {[3, 5, 4, 7, 6, 8, 9].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-sm"
                  style={{
                    height: `${h * 2.5}px`,
                    background: i === 6 ? '#28ABE3' : 'rgba(40,171,227,0.25)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Purple — Prospectos */}
          <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(79,67,148,0.12)', border: '1px solid rgba(79,67,148,0.3)' }}>
            <div>
              <p className="text-[10px] font-body text-[var(--color-niebla)] uppercase tracking-wider mb-0.5">Prospectos calificados</p>
              <p className="font-display font-bold text-[22px] text-[var(--color-crema)] leading-none">89</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--color-linea)' }}>
                <div className="h-full rounded-full" style={{ width: '70%', background: 'linear-gradient(90deg, #4F4394, #28ABE3)' }} />
              </div>
              <span className="text-[9px] font-body text-[var(--color-niebla)]">70% del objetivo</span>
            </div>
          </div>

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
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-carbono)]"
      aria-label="Sección principal"
    >
      {/* Background: dot grid */}
      <div
        className="absolute inset-0 opacity-40 bg-dot-pattern"
        aria-hidden="true"
      />

      {/* Glow: lime top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 85% 20%, rgba(183,206,20,0.14) 0%, transparent 50%)' }}
        aria-hidden="true"
      />

      {/* Glow: purple bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 90% 80%, rgba(79,67,148,0.18) 0%, transparent 45%)' }}
        aria-hidden="true"
      />

      {/* Glow: cyan mid-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 55%, rgba(40,171,227,0.12) 0%, transparent 40%)' }}
        aria-hidden="true"
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, var(--color-carbono), transparent)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-10 items-center">

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
                  background: 'var(--color-amber-subtle)',
                  border: '1px solid rgba(183,206,20,0.25)',
                  color: 'var(--color-amber)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)]" aria-hidden="true" />
                Agencia de Marketing Digital con IA · México
              </span>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h1
                className="font-display font-extrabold text-[var(--color-crema)] leading-[1.05] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(38px, 5.5vw, 72px)' }}
              >
                Tu competencia ya está{' '}
                <span className="text-[var(--color-amber)]">creciendo con IA</span>.{' '}
                Tú también puedes.
              </h1>
            </div>

            {/* Subheadline */}
            <div
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="font-body text-[17px] md:text-[18px] text-[var(--color-niebla)] leading-[1.7] max-w-[540px]">
                EQKO AIgency diseña y opera el sistema completo de marketing digital y automatización que convierte desconocidos en clientes — sin que tengas que tocar una sola herramienta.
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <CalendlyTrigger 
                className="inline-flex items-center justify-center gap-2 font-display font-bold text-[15px] text-[var(--color-carbono)] bg-[var(--color-amber)] hover:bg-[var(--color-amber-dark)] px-7 py-4 rounded-xl transition-all duration-200 cursor-pointer animate-pulse-cta border-none"
                text="Agenda tu consultoría gratuita →"
              />

              <a
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 font-body text-[15px] text-[var(--color-niebla)] hover:text-[var(--color-crema)] px-6 py-4 rounded-xl border border-[var(--color-linea)] hover:border-[var(--color-niebla)] transition-all duration-200"
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
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[var(--color-niebla)]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p className="font-body text-[13px] text-[var(--color-niebla)]">Sin costo · Sin compromiso · Respondemos en menos de 24 hs</p>
            </div>

            {/* Social proof */}
            <div
              className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center" role="img" aria-label="Fotos de clientes">
                <Avatar initials="MG" color="var(--color-amber)" />
                <Avatar initials="DP" color="#28ABE3" />
                <Avatar initials="CR" color="#4F4394" />
              </div>
              <p className="font-body text-[14px] text-[var(--color-niebla)]">
                <span className="text-[var(--color-crema)] font-semibold">+20 negocios</span>{' '}
                de México y LATAM ya tienen su sistema funcionando
              </p>
            </div>

          </div>

          {/* ── RIGHT: Panda + Dashboard ── */}
          <div
            className={`relative flex items-end justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms', minHeight: '520px' }}
          >
            {/* Ground glow under panda */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-[50%] rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, var(--color-amber) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Panda — positioned to the right, taking full height */}
            <img
              src="/panda.png"
              alt="EQKO AIgency — Agente de IA"
              className="relative z-10 w-full max-w-[340px] md:max-w-[400px] drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(183,206,20,0.25))',
                marginBottom: '20px',
                marginLeft: 'auto',
              }}
            />

            {/* Dashboard card — bottom left, overlapping panda */}
            <div
              className="absolute bottom-0 left-0 z-20 w-[230px] md:w-[270px]"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <DashboardCard />
            </div>

            {/* Badge: ROI +380% — top right */}
            <div
              className="absolute top-8 right-0 z-30 flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{
                background: 'rgba(183,206,20,0.12)',
                border: '1px solid rgba(183,206,20,0.35)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 9L6 4L10 9" stroke="var(--color-amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p className="font-display font-bold text-[15px] text-[var(--color-amber)] leading-none">+380%</p>
                <p className="font-body text-[10px] text-[var(--color-niebla)] leading-none mt-0.5">ROI promedio</p>
              </div>
            </div>

            {/* Badge: IA activa 24/7 — mid right */}
            <div
              className="absolute top-1/2 -translate-y-1/2 right-0 z-30 flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{
                background: 'rgba(40,171,227,0.1)',
                border: '1px solid rgba(40,171,227,0.3)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#28ABE3] animate-pulse" />
              <div>
                <p className="font-display font-bold text-[13px] text-[#28ABE3] leading-none">IA activa</p>
                <p className="font-body text-[10px] text-[var(--color-niebla)] leading-none mt-0.5">24 / 7</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to top, var(--color-carbono), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
