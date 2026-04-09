import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const faqs = [
  {
    question: '¿Cuánto cuesta el servicio de EQKO AIgency?',
    answer: 'El costo depende del paquete y los objetivos de tu negocio. Empezamos con un consultoría gratuita de 30 minutos donde entendemos tu situación y te presentamos una propuesta a medida. Sin compromiso y sin presupuesto oculto.',
  },
  {
    question: '¿Cuánto tiempo tarda en verse resultados?',
    answer: 'En 5 días diseñamos tu sistema a medida. En la semana 2 ya hay campañas activas y los primeros leads empiezan a llegar. El ROI promedio de nuestros clientes es +380% en los primeros 90 días.',
  },
  {
    question: '¿Necesito tener experiencia en marketing digital?',
    answer: 'No. EQKO AIgency diseña y opera el sistema completo por ti. No tienes que tocar ninguna herramienta. Solo recibes reportes quincenales en lenguaje de negocio: leads, clientes y dinero.',
  },
  {
    question: '¿En qué países trabajan?',
    answer: 'Trabajamos con negocios de México, Colombia, Chile, Perú y toda LATAM. Todos los servicios son 100% remotos y digitales.',
  },
  {
    question: '¿Qué diferencia a EQKO AIgency de otras agencias de marketing?',
    answer: 'No vendemos servicios sueltos. Construimos un sistema integrado: redes, ads, automatizaciones con IA, contenido y generación de leads conectados entre sí. Arrancamos en 5 días, medimos costo por lead y clientes generados, y la IA está incluida desde el día uno — no es un upgrade de tier.',
  },
  {
    question: '¿Qué pasa si no veo resultados en las primeras semanas?',
    answer: 'La transparencia es parte de cómo trabajamos. Cada semana revisamos los datos juntos. Lo que funciona, escala. Lo que no, se corrige. Tienes acceso a reportes en tiempo real y un estratega asignado que conoce tu negocio, no un ejecutivo de cuentas rotativo.',
  },
];

function FAQItem({ faq, index, visible }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        border border-[var(--color-linea)] rounded-2xl overflow-hidden
        transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
      style={{ transitionDelay: visible ? `${index * 60}ms` : '0ms' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-transparent border-none"
        aria-expanded={open}
        style={{ background: open ? 'rgba(183,206,20,0.04)' : 'var(--color-grafito)' }}
      >
        <span className="font-display font-semibold text-[15px] md:text-[16px] text-[var(--color-crema)] leading-[1.3]">
          {faq.question}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: open ? 'var(--color-amber)' : 'rgba(183,206,20,0.1)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke={open ? 'var(--color-carbono)' : 'var(--color-amber)'} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="px-6 pb-5 font-body text-[14px] md:text-[15px] text-[var(--color-niebla)] leading-[1.7]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [listRef, listVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="faq"
      className="relative bg-[var(--color-carbono)] py-20 md:py-28 overflow-hidden"
      aria-label="Preguntas frecuentes"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-linea)]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-[640px] mb-12 transition-all duration-600 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="w-10 h-0.5 bg-[var(--color-amber)] mb-5" aria-hidden="true" />
          <h2
            className="font-display font-bold text-[var(--color-crema)] mb-4"
            style={{ fontSize: 'clamp(26px, 3.8vw, 40px)', lineHeight: '1.15' }}
          >
            Preguntas frecuentes
          </h2>
          <p className="font-body text-[16px] md:text-[17px] text-[var(--color-niebla)] leading-[1.7]">
            Todo lo que necesitás saber antes de agendar tu diagnóstico.
          </p>
        </div>

        {/* FAQ list */}
        <div
          ref={listRef}
          className="max-w-[860px] flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} visible={listVisible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 transition-all duration-600 delay-300 ${listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="font-body text-[15px] text-[var(--color-niebla)] mb-4">
            ¿Tienes alguna otra pregunta?{' '}
            <a
              href="mailto:contacto@eqko.ai"
              className="text-[var(--color-amber)] hover:underline transition-colors"
            >
              Escríbenos directamente.
            </a>
          </p>
          <a
            href="#contacto"
            className="
              inline-flex items-center gap-2
              font-display font-bold text-[15px] text-[var(--color-carbono)]
              bg-[var(--color-amber)] hover:bg-[var(--color-amber)]/80
              px-7 py-4 rounded-xl
              transition-all duration-200
              animate-pulse-cta
            "
          >
            Agenda tu consultoría gratuita →
          </a>
        </div>

      </div>
    </section>
  );
}
