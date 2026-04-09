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
// Animated metric bar component for the panel
function AnimatedBar({ height, color, delay }) {
  return (
    <div 
      className="w-1.5 rounded-full transition-all duration-1000 ease-in-out"
      style={{ 
        height: '0px', 
        animation: `grow-height 1.5s ease-out ${delay}ms forwards`,
        background: color,
        boxShadow: `0 0 10px ${color}44`,
        '--final-height': `${height}%`
      }}
    />
  );
}

function DashboardCard() {
  return (
    <div className="group animate-brand-float w-full max-w-[680px]">
      <div 
        className="relative perspective-1000 transition-all duration-1000 ease-out space-tilt group-hover:rotate-0 group-hover:scale-[1.02]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Layered Background Glows (Multi-color Aura) */}
        <div className="absolute -inset-10 bg-[var(--color-amber)]/20 rounded-full blur-[120px] opacity-30 group-hover:opacity-50 transition-opacity" aria-hidden="true" />
        <div className="absolute -inset-20 bg-[#28ABE3]/5 rounded-full blur-[150px] opacity-10 pointer-events-none" aria-hidden="true" />
        
        {/* Main Glass Vessel */}
        <div
          className="relative rounded-[32px] overflow-hidden border border-white/10 backdrop-blur-[30px]"
          style={{
            background: 'linear-gradient(135deg, rgba(14,28,45,0.92) 0%, rgba(19,34,56,0.98) 100%)',
            boxShadow: `
              0 50px 100px -20px rgba(0,0,0,0.8),
              inset 0 0 0 1px rgba(255,255,255,0.08),
              0 0 60px -15px var(--color-amber-subtle)
            `,
          }}
        >
          {/* Top Edge Highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Header Area */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-amber)] animate-pulse" />
                <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-[var(--color-amber)] blur-[6px] animate-ping" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-[var(--color-crema)]">EQKO | INTEL ENGINE</span>
            </div>
            
            {/* Integrated IA Status */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#28ABE3]/10 border border-[#28ABE3]/30">
              <span className="w-2 h-2 rounded-full bg-[#28ABE3] animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#28ABE3] leading-none">IA Activa</span>
                <span className="text-[9px] text-[var(--color-niebla)] font-medium mt-1 leading-none">OPERANDO 24/7</span>
              </div>
            </div>
          </div>

          {/* Body Content: Spacious Grid */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1: Core Performance */}
            <div className="space-y-6">
              {/* Leads */}
              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] group/item overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-amber)]" />
                <p className="text-[11px] font-bold text-[var(--color-niebla)] uppercase tracking-widest mb-2 opacity-70">Leads Generados</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-black text-[var(--color-crema)] tabular-nums">127</span>
                  <span className="text-[14px] font-bold text-[#4ADE80] tabular-nums">+43.2%</span>
                </div>
              </div>

              {/* ROAS Wave */}
              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-[11px] font-bold text-[var(--color-niebla)] uppercase tracking-widest opacity-70">ROAS / Rendimiento</p>
                  <p className="text-2xl font-display font-black text-[var(--color-crema)] tabular-nums">4.8x</p>
                </div>
                <div className="flex items-end justify-between h-16 w-full gap-1 px-1">
                  {[35, 55, 40, 75, 50, 85, 70, 100, 80, 95, 65, 110].map((h, i) => (
                    <AnimatedBar 
                      key={i} 
                      height={h} 
                      color={i >= 9 ? 'var(--color-amber)' : 'rgba(255,255,255,0.15)'} 
                      delay={i * 80} 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Advanced ROI & Funnel */}
            <div className="space-y-6 flex flex-col justify-between">
              {/* ROI Badge (Formerly Floating) */}
              <div className="p-8 h-full min-h-[160px] rounded-2xl bg-[var(--color-amber)]/5 border border-[var(--color-amber)]/20 flex flex-col items-center justify-center text-center group-hover:bg-[var(--color-amber)]/10 transition-colors overflow-hidden">
                <div className="flex items-center gap-3 mb-2">
                  <svg width="24" height="24" viewBox="0 0 12 12" fill="none" className="text-[var(--color-amber)]">
                    <path d="M2 9L6 4L10 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-5xl font-display font-black text-[var(--color-amber)] tracking-tighter tabular-nums">+380%</span>
                </div>
                <p className="text-[12px] font-bold text-[var(--color-niebla)] uppercase tracking-widest">ROI Promedio</p>
              </div>

              {/* Funnel Progress */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <div className="flex justify-between text-[11px] font-bold mb-3">
                  <span className="text-[var(--color-niebla)] uppercase tracking-widest">Optimización de Funnel</span>
                  <span className="text-[var(--color-amber)]">89%</span>
                </div>
                <div className="h-4 w-full rounded-full bg-white/5 border border-white/5 overflow-hidden p-1">
                   <div 
                    className="h-full bg-gradient-to-r from-[var(--color-amber-dark)] to-[var(--color-amber)] rounded-full transition-all duration-1000 relative shadow-[0_0_20px_var(--color-amber)]"
                    style={{ width: '89%' }}
                   >
                     <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-shimmer bg-[length:200%_100%]" />
                   </div>
                </div>
              </div>
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

          {/* ── RIGHT: Visual Composition ── */}
          <div
            className={`relative flex items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms', minHeight: '650px' }}
          >
            {/* Ground glow under composition */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[80%] rounded-full blur-[120px] opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, var(--color-amber) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Main Visual: Enlarged Dashboard Panel */}
            <div className="relative w-full z-20 flex justify-center lg:justify-end">
              <DashboardCard />
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
