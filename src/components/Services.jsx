import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Lucide-style SVG Icons (inline, no dependency)
const icons = {
  BarChart2: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  Bot: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  ),
  Palette: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  ),
  Target: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Layers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
};

const services = [
  {
    icon: icons.BarChart2,
    name: 'Gestión de Redes Sociales + Paid Ads',
    description: 'Cada contenido tiene un propósito: atraer al perfil exacto de cliente que genera ingresos. Las campañas se optimizan con datos reales, no con intuición.',
    tag: 'Flujo constante de prospectos calificados',
    featured: false,
  },
  {
    icon: icons.Bot,
    name: 'Automatizaciones con IA',
    description: 'Chatbots, flujos inteligentes y agentes que califican prospectos y hacen seguimiento — 24/7, sin contratar más personal y sin perder el tono humano.',
    tag: 'Respuesta en <2 min + 60 hs/mes recuperadas',
    featured: true,
  },
  {
    icon: icons.Palette,
    name: 'Estrategia de Marca + Contenido',
    description: 'Si en 8 segundos alguien no entiende por qué eres la mejor opción, ya los perdiste. Construimos el posicionamiento que hace que tu diferencia sea obvia.',
    tag: 'Marca que genera confianza antes de la llamada',
    featured: false,
  },
  {
    icon: icons.Target,
    name: 'Generación de Leads con IA',
    description: 'Identificamos, atraemos y pre-calificamos a los prospectos con la necesidad, el presupuesto y el momento adecuado para comprarte.',
    tag: 'Pipeline con prospectos de alta intención',
    featured: false,
  },
  {
    icon: icons.Layers,
    name: 'Paquete Completo de Crecimiento Digital',
    description: 'Los cinco componentes integrados en un sistema unificado. Un equipo. Un punto de contacto. Visión completa del proceso de captación y conversión.',
    tag: 'Sistema en piloto automático con ROI medible',
    featured: false,
  },
];

function ServiceCard({ service, index, visible }) {
  return (
    <article
      className={`
        relative flex flex-col p-6 rounded-2xl border
        transition-all duration-500 ease-out group cursor-default
        ${service.featured
          ? 'border-[rgba(183,206,20,0.35)] bg-[rgba(183,206,20,0.04)]'
          : 'border-[#1E3050] bg-[#132238] hover:bg-[#1A2D47]'
        }
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      style={{ transitionDelay: visible ? `${index * 80}ms` : '0ms' }}
    >
      {/* Featured badge */}
      {service.featured && (
        <div
          className="absolute -top-3 left-5 px-3 py-1 rounded-full text-[11px] font-display font-bold text-[#0E1C2D] bg-[#B7CE14]"
          aria-label="Servicio más popular"
        >
          Más solicitado
        </div>
      )}

      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-[#B7CE14] ${
          service.featured ? 'bg-[rgba(183,206,20,0.15)]' : 'bg-[rgba(183,206,20,0.08)]'
        }`}
      >
        {service.icon}
      </div>

      {/* Name */}
      <h3 className="font-display font-semibold text-[17px] text-[#F1EDEE] mb-2.5 leading-[1.3]">
        {service.name}
      </h3>

      {/* Description */}
      <p className="font-body text-[14px] text-[#8899AA] leading-[1.6] flex-1 mb-5">
        {service.description}
      </p>

      {/* Result tag */}
      <div className="flex items-start gap-2">
        <div className="w-4 h-4 shrink-0 mt-0.5 text-[#B7CE14]">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13.5 4.5L6.5 11.5L2.5 7.5"/>
          </svg>
        </div>
        <span className="font-body text-[13px] text-[#B7CE14] leading-[1.5]">
          {service.tag}
        </span>
      </div>

      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(183,206,20,0.03) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
    </article>
  );
}

export default function Services() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="servicios"
      className="relative bg-[#0E1C2D] py-20 md:py-28 overflow-hidden"
      aria-label="Nuestros servicios"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#1E3050]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-14 transition-all duration-600 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {/* Decorative line */}
          <div className="w-10 h-0.5 bg-[#B7CE14] mb-5" aria-hidden="true" />

          <h2
            className="font-display font-bold text-[#F1EDEE] max-w-[680px] mb-4"
            style={{ fontSize: 'clamp(26px, 3.8vw, 40px)', lineHeight: '1.15' }}
          >
            EQKO AIgency no vende servicios de marketing. Construye la máquina que hace crecer tu negocio.
          </h2>

          <p className="font-body text-[16px] md:text-[17px] text-[#8899AA] max-w-[520px] leading-[1.7]">
            Cada componente está diseñado para conectarse con el siguiente. No son piezas sueltas.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              visible={gridVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
