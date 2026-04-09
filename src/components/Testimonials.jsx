import { useIntersectionObserver, useCounterAnimation } from '../hooks/useIntersectionObserver';

// Animated metric counter
function MetricCounter({ value, suffix, prefix, label, visible, delay }) {
  // Parse numeric part from value string
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const count = useCounterAnimation(numericValue, 1800, visible);

  // Format back with original format
  const formatValue = (n) => {
    if (value.includes('.')) return n.toFixed(1);
    return Math.floor(n).toString();
  };

  return (
    <div
      className={`
        flex flex-col items-center text-center px-6 py-5
        transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display font-extrabold text-[var(--color-crema)] mb-1.5" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1' }}>
        {prefix && <span className="text-[var(--color-amber)]">{prefix}</span>}
        {formatValue(count)}
        {suffix && <span className="text-[var(--color-amber)]">{suffix}</span>}
      </div>
      <p className="font-body text-[13px] text-[var(--color-niebla)] leading-[1.4] max-w-[130px]">
        {label}
      </p>
    </div>
  );
}

const metrics = [
  { value: '143', prefix: '', suffix: '', label: 'Negocios activos en México y LATAM', delay: 0 },
  { value: '380', prefix: '+', suffix: '%', label: 'ROI promedio en paquete completo', delay: 100 },
  { value: '11', prefix: '', suffix: ' días', label: 'Hasta primeros leads', delay: 200 },
  { value: '60', prefix: '', suffix: ' hs/mes', label: 'Recuperadas por automatización', delay: 300 },
];

const testimonials = [
  {
    quote: 'Llevábamos dos años con la misma agencia y nunca pudimos conectar el gasto en ads con los clientes que cerrábamos. En el primer mes con EQKO AIgency tuvimos 47 leads calificados y cerramos 9.',
    name: 'Martina Guerrero',
    role: 'Directora Comercial',
    company: 'Clínica Dermaestética Guerrero · CDMX',
    result: '+310% en leads calificados en 60 días',
    initials: 'MG',
  },
  {
    quote: 'Teníamos un equipo de 3 personas respondiendo WhatsApps todo el día. Ahora el chatbot califica el 80% solo y nuestro equipo solo habla con quien ya está listo para comprar.',
    name: 'Diego Palomino',
    role: 'Fundador',
    company: 'TecnoEquip Soluciones · Monterrey',
    result: '78% reducción en tiempo de atención',
    initials: 'DP',
  },
  {
    quote: 'Lo que me terminó de convencer fue que en la primera llamada me dijeron exactamente qué estaba fallando en mi proceso de captación — sin pedirme que contratara nada primero.',
    name: 'Camila Restrepo',
    role: 'CEO',
    company: 'Inmobiliaria Restrepo & Asociados · Guadalajara',
    result: '+180% en prospectos calificados/mes',
    initials: 'CR',
  },
];

const avatarColors = ['var(--color-amber)', '#8FA810', '#CDE015'];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 de 5 estrellas">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-amber)" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index, visible }) {
  return (
    <article
      className={`
        flex flex-col p-6 rounded-2xl border border-[var(--color-linea)]
        bg-[var(--color-carbono)] hover:bg-[var(--color-grafito)]
        transition-all duration-500 ease-out group cursor-default
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
    >
      <StarRating />

      {/* Quote */}
      <blockquote className="font-body text-[14px] md:text-[15px] text-[var(--color-niebla)] leading-[1.7] flex-1 mb-5 italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-[var(--color-linea)]">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-[12px] text-[var(--color-carbono)] shrink-0"
          style={{ background: avatarColors[index % avatarColors.length] }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <p className="font-display font-semibold text-[14px] text-[var(--color-crema)] leading-none mb-0.5 truncate">
            {testimonial.name}
          </p>
          <p className="font-body text-[12px] text-[var(--color-niebla)] truncate">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>

      {/* Result tag */}
      <div
        className="mt-4 px-3.5 py-2 rounded-lg"
        style={{ background: 'rgba(183,206,20,0.08)', border: '1px solid rgba(183,206,20,0.15)' }}
      >
        <p className="font-display font-semibold text-[12px] text-[var(--color-amber)] flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
          {testimonial.result}
        </p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [metricsRef, metricsVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [cardsRef, cardsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="resultados"
      className="relative bg-[var(--color-grafito)] py-20 md:py-28 overflow-hidden"
      aria-label="Resultados y testimonios"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-linea)]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-600 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <h2
            className="font-display font-bold text-[var(--color-crema)]"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.15' }}
          >
            Números reales de negocios reales.
          </h2>
        </div>

        {/* Metrics row */}
        <div
          ref={metricsRef}
          className="relative mb-16"
        >
          <div
            className="rounded-2xl border border-[var(--color-linea)] bg-[var(--color-carbono)] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--color-linea)] overflow-hidden"
            role="list"
            aria-label="Métricas de resultados"
          >
            {metrics.map((metric, i) => (
              <div key={i} role="listitem">
                <MetricCounter {...metric} visible={metricsVisible} />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              testimonial={testimonial}
              index={i}
              visible={cardsVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
