import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Target, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Enfoque en Revenue',
    desc: 'No medimos el éxito en clics, lo medimos en facturación y rentabilidad neta para tu negocio.'
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'IA de Vanguardia',
    desc: 'Implementamos agentes que trabajan 24/7, calificando y nutriendo tus leads sin descanso.'
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Crecimiento Predecible',
    desc: 'Sistemas que puedes escalar con solo mover una palanca. Sin contratar más personal.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Transparencia Total',
    desc: 'Dashboards en tiempo real. Sabes exactamente dónde está cada dólar de tu inversión.'
  }
];

export default function WhyUs() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="por-que-nosotros"
      className="relative bg-[var(--color-carbono)] py-20 md:py-32 overflow-hidden"
      aria-label="Por qué elegir EQKO AIgency"
    >
      {/* Animated background elements for dynamism */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-amber)]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-[var(--color-amber)]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Header Area */}
          <div className={`transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-12 h-1 bg-[var(--color-amber)] mb-8" aria-hidden="true" />
            
            <h2 
              className="font-display font-bold text-[var(--color-crema)] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1' }}
            >
              No somos un gasto. <span className="block text-[var(--color-amber)]">Somos un activo.</span>
            </h2>

            <p className="font-body text-[18px] md:text-[20px] text-[var(--color-niebla)] leading-[1.6] max-w-[480px]">
              Mientras las agencias tradicionales te venden "likes", nosotros construimos infraestructura que genera ROI predecible.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <article 
                key={i}
                className={`
                  p-7 rounded-2xl border border-[var(--color-linea)] bg-[var(--color-grafito)] shadow-sm
                  transition-all duration-500 hover:border-[var(--color-amber)]/50 hover:bg-[var(--color-piedra)] hover:-translate-y-2 group
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(183,206,20,0.05)] border border-[rgba(183,206,20,0.1)] flex items-center justify-center text-[var(--color-amber)] mb-6 group-hover:bg-[rgba(183,206,20,0.15)] group-hover:scale-110 transition-all duration-300">
                  {reason.icon}
                </div>
                <h3 className="font-display font-bold text-[var(--color-crema)] text-[19px] mb-3 leading-tight group-hover:text-[var(--color-amber)] transition-colors">
                  {reason.title}
                </h3>
                <p className="font-body text-[14px] text-[var(--color-niebla)] leading-relaxed group-hover:text-[var(--color-crema)] transition-colors">
                  {reason.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Social Proof / Trust Area */}
        <div className={`mt-24 pt-12 border-t border-[var(--color-linea)] transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="flex -space-x-3">
                <Avatar initials="ML" color="var(--color-amber)" />
                <Avatar initials="JV" color="#28ABE3" />
                <Avatar initials="AR" color="#4F4394" />
                <Avatar initials="SM" color="#FF5733" />
              </div>
              <p className="font-body text-[15px] text-[var(--color-niebla)]">
                <span className="text-[var(--color-crema)] font-bold">+20 negocios</span> escalando sus operaciones con nosotros.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="font-display font-black text-[20px] text-[var(--color-crema)] tracking-tighter italic hover:text-[var(--color-amber)] transition-colors">FINTECH_CO</span>
               <span className="font-display font-black text-[20px] text-[var(--color-crema)] tracking-tighter italic hover:text-[var(--color-amber)] transition-colors">RE_STORE</span>
               <span className="font-display font-black text-[20px] text-[var(--color-crema)] tracking-tighter italic hover:text-[var(--color-amber)] transition-colors">AGRO_TECH</span>
               <span className="font-display font-black text-[20px] text-[var(--color-crema)] tracking-tighter italic hover:text-[var(--color-amber)] transition-colors">LOGISTICS+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ initials, color }) {
  return (
    <div 
      className="w-11 h-11 rounded-full border-2 border-[var(--color-carbono)] flex items-center justify-center text-[11px] font-bold text-white shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all cursor-default"
      style={{ backgroundColor: color }}
      title={initials}
    >
      {initials}
    </div>
  );
}
