import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const painPoints = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Invisibilidad digital que cuesta ventas',
    text: 'Sabes que tus competidores están captando clientes en línea que deberías estar ganando. Tu presencia existe, pero no convierte.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Tiempo en tareas que no escalan',
    text: 'Tu equipo responde WhatsApps a las 11pm. Los seguimientos se hacen tarde o no se hacen. Cada hora operativa es una hora que no va a crecer el negocio.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: 'Agencias que cobran y desaparecen',
    text: 'Ya pagaste al menos una vez por servicios que prometieron resultados y entregaron excusas. La desconfianza está justificada.',
  },
];

export default function Problem() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useIntersectionObserver({ threshold: 0.15 });
  const [textRef, textVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="problema"
      className="relative bg-[#1A1917] py-20 md:py-28 overflow-hidden"
      aria-label="El problema"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#2E2C2A]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-600 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <h2
            className="font-display font-bold text-[#F2EDE8] mx-auto max-w-[640px]"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.15' }}
          >
            Gastas en marketing. Pero no sabes si está funcionando.
          </h2>
        </div>

        {/* Pain point cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"
        >
          {painPoints.map((point, i) => (
            <article
              key={i}
              className={`
                relative p-6 rounded-2xl border border-[#2E2C2A]
                bg-[#0F0E0D] hover:bg-[#242220]
                transition-all duration-300 ease-out cursor-default
                group
                ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
              `}
              style={{ transitionDelay: cardsVisible ? `${i * 100}ms` : '0ms', transitionDuration: '500ms' }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-[#E8A020]"
                style={{ background: 'rgba(232,160,32,0.08)' }}
              >
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-[17px] text-[#F2EDE8] mb-2 leading-[1.3]">
                {point.title}
              </h3>

              {/* Text */}
              <p className="font-body text-[14px] text-[#9C9490] leading-[1.6]">
                {point.text}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px bg-[#E8A020] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Agitation copy block */}
        <div
          ref={textRef}
          className={`max-w-[760px] mx-auto transition-all duration-600 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: 'rgba(15,14,13,0.5)', border: '1px solid #2E2C2A' }}
          >
            <div className="space-y-4 mb-8">
              <p className="font-body text-[16px] md:text-[17px] text-[#9C9490] leading-[1.7]">
                El problema no es que no hayas intentado crecer. El problema es que cada iniciativa funcionó en silos: las redes sin estrategia, los ads sin seguimiento, el seguimiento sin automatización.
              </p>
              <p className="font-body text-[16px] md:text-[17px] text-[#9C9490] leading-[1.7]">
                Mientras tanto, hay negocios de tu mismo sector que tienen pipelines llenos de prospectos calificados, sistemas que responden solos y equipos que solo hablan con quien ya está listo para comprar.
              </p>
              <p className="font-body text-[16px] md:text-[17px] text-[#9C9490] leading-[1.7]">
                No es magia. No es suerte. Y tampoco es presupuesto.
              </p>
            </div>

            {/* Highlighted conclusion */}
            <div
              className="pt-6 border-t border-[#2E2C2A]"
            >
              <p
                className="font-display font-bold text-[#F2EDE8] leading-[1.3]"
                style={{ fontSize: 'clamp(20px, 2.8vw, 26px)' }}
              >
                La diferencia no es que ellos tengan más presupuesto. La diferencia es que{' '}
                <span className="text-[#E8A020]">tienen un sistema</span>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
