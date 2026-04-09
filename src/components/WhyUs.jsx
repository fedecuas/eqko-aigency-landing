import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const differentiators = [
  {
    number: '01',
    title: 'Medimos lo que a ti te importa: clientes y dinero.',
    text: 'Cada reporte incluye costo por lead, tasa de conversión y clientes generados. Sin métricas de vanidad.',
  },
  {
    number: '02',
    title: 'Arrancamos en 5 días. No en 3 meses.',
    text: 'En la segunda semana ya hay campañas activas. Porque la mejor forma de saber si algo funciona es probarlo.',
  },
  {
    number: '03',
    title: 'Un equipo que conoce tu negocio.',
    text: 'Tienes un estratega asignado que entiende tu modelo, tu mercado y tus objetivos. No hablas con ejecutivos de cuentas.',
  },
  {
    number: '04',
    title: 'La IA ya está incluida desde el día uno.',
    text: 'Las automatizaciones no son un upgrade de tier. Es la forma en que operamos.',
  },
];

export default function WhyUs() {
  const [leftRef, leftVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      id="diferencial"
      className="relative bg-[#1A1917] py-20 md:py-28 overflow-hidden"
      aria-label="Por qué elegirnos"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#2E2C2A]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Intro text ── */}
          <div
            ref={leftRef}
            className={`transition-all duration-600 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} lg:sticky lg:top-28`}
          >
            {/* Decorative line */}
            <div className="w-10 h-0.5 bg-[#E8A020] mb-5" aria-hidden="true" />

            <h2
              className="font-display font-bold text-[#F2EDE8] mb-5"
              style={{ fontSize: 'clamp(26px, 3.6vw, 40px)', lineHeight: '1.15' }}
            >
              Hay cientos de agencias digitales. Aquí está la diferencia que importa.
            </h2>

            <p className="font-body text-[16px] md:text-[17px] text-[#9C9490] leading-[1.7] mb-8">
              No son promesas. Son compromisos que puedes medir.
            </p>

            {/* CTA in left column */}
            <a
              href="#contacto"
              className="
                inline-flex items-center gap-2
                font-display font-semibold text-[14px] text-[#E8A020]
                border border-[rgba(232,160,32,0.35)] hover:border-[#E8A020]
                hover:bg-[rgba(232,160,32,0.06)]
                px-5 py-3 rounded-xl
                transition-all duration-200
              "
            >
              Agenda tu consultoría gratuita
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* ── RIGHT: Differentiators grid ── */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {differentiators.map((item, i) => (
              <article
                key={i}
                className={`
                  relative p-6 rounded-2xl border border-[#2E2C2A]
                  bg-[#0F0E0D] hover:bg-[#1A1917]
                  transition-all duration-500 ease-out group cursor-default
                  ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{ transitionDelay: gridVisible ? `${i * 80}ms` : '0ms' }}
              >
                {/* Number */}
                <span
                  className="font-display font-bold text-[#E8A020] text-[14px] tracking-widest mb-3 block"
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-[16px] md:text-[17px] text-[#F2EDE8] mb-2.5 leading-[1.3]">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="font-body text-[13px] md:text-[14px] text-[#9C9490] leading-[1.6]">
                  {item.text}
                </p>

                {/* Amber bottom accent on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-[#E8A020] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
