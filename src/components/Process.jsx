import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Sesión de 45 minutos donde entendemos tu negocio, tus objetivos y lo que ya intentaste. Identificamos los cuellos de botella específicos.',
    duration: 'Día 1-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Sistema a Medida',
    description: 'Diseñamos el mapa completo: canales, automatizaciones, contenido y métricas de éxito para los primeros 30, 60 y 90 días.',
    duration: 'Día 3-5',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="3" y1="15" x2="21" y2="15"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Ejecución y Activación',
    description: 'Implementamos, configuramos y activamos. Campañas corriendo. Flujos funcionando. El sistema empieza a trabajar.',
    duration: 'Semana 2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Optimización Continua',
    description: 'Cada semana revisamos los datos. Lo que funciona, escala. Lo que no, se corrige. Reportes quincenales en lenguaje de negocio.',
    duration: 'Mes 1+',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
];

export default function Process() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [stepsRef, stepsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="proceso"
      className="relative bg-[#0F0E0D] py-20 md:py-28 overflow-hidden"
      aria-label="Nuestro proceso"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#2E2C2A]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <h2
            className="font-display font-bold text-[#F2EDE8] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.15' }}
          >
            Así se ve trabajar con EQKO AIgency.
          </h2>
          <p className="font-body text-[16px] md:text-[17px] text-[#9C9490]">
            Simple. Rápido. Sin sorpresas.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="relative"
        >
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{ borderTop: '1px dashed #2E2C2A', zIndex: 0 }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`
                  flex flex-col items-center text-center
                  transition-all duration-500 ease-out
                  ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{ transitionDelay: stepsVisible ? `${i * 120}ms` : '0ms' }}
              >
                {/* Step circle with number */}
                <div className="relative mb-6">
                  {/* Big decorative number (background) */}
                  <span
                    className="absolute -top-2 -left-5 font-display font-bold select-none pointer-events-none"
                    style={{
                      fontSize: '80px',
                      lineHeight: '1',
                      color: '#1A1917',
                      zIndex: -1,
                    }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* Icon circle */}
                  <div
                    className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center text-[#E8A020] border border-[#2E2C2A] z-10"
                    style={{ background: '#0F0E0D', boxShadow: '0 0 0 6px #0F0E0D' }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Step number label */}
                <span className="font-display font-bold text-[12px] text-[#E8A020] tracking-widest uppercase mb-2">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-[17px] text-[#F2EDE8] mb-3 leading-[1.3]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[14px] text-[#9C9490] leading-[1.6] mb-4 max-w-[220px]">
                  {step.description}
                </p>

                {/* Duration badge */}
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full font-body text-[12px] text-[#9C9490]"
                  style={{ background: '#1A1917', border: '1px solid #2E2C2A' }}
                >
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 transition-all duration-600 delay-500 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#contacto"
            className="
              inline-flex items-center gap-2
              font-display font-bold text-[15px] text-[#0F0E0D]
              bg-[#E8A020] hover:bg-[#C4821A]
              px-7 py-4 rounded-xl
              transition-all duration-200
            "
            style={{ animation: 'pulseCta 2s ease-in-out infinite' }}
          >
            Agenda tu consultoría gratuita →
          </a>
        </div>

      </div>
    </section>
  );
}
