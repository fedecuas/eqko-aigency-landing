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
    title: '增长 Predecible',
    desc: 'Construimos sistemas que puedes escalar con solo mover una palanca. Sin contratar más gente.'
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
      {/* Dynamic light rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[120%] bg-[var(--color-amber)] blur-[120px] rotate-12 opacity-10" />
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[120%] bg-[var(--color-amber)] blur-[120px] -rotate-12 opacity-10" />
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
              Mientras las agencias tradicionales te venden "likes" y "alcance", nosotros construimos infraestructura tecnológica que genera ROI predecible.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <article 
                key={i}
                className={`
                  p-6 rounded-2xl border border-[var(--color-linea)] bg-[var(--color-grafito)]/50 backdrop-blur-sm
                  transition-all duration-700 hover:border-[var(--color-amber)]/30 group
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[rgba(183,206,20,0.1)] flex items-center justify-center text-[var(--color-amber)] mb-5 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="font-display font-bold text-[var(--color-crema)] text-[18px] mb-2 leading-tight">
                  {reason.title}
                </h3>
                <p className="font-body text-[14px] text-[var(--color-niebla)] leading-relaxed">
                  {reason.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Social Proof / Trust Area */}
        <div className={`mt-24 pt-12 border-t border-[var(--color-linea)] transition-all duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--color-carbono)] bg-[var(--color-piedra)] flex items-center justify-center text-[var(--color-amber)] text-[10px] font-bold">
                    User
                  </div>
                ))}
              </div>
              <p className="font-body text-[14px] text-[var(--color-niebla)]">
                <span className="text-[var(--color-crema)] font-bold">+50 negocios</span> escalando sus operaciones.
              </p>
            </div>

            <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos if needed */}
               <span className="font-display font-black text-[20px] text-[var(--color-crema)] tracking-tighter italic">FINTECH_CO</span>
               <span className="font-display font-black text-[20px] text-[var(--color-crema)] tracking-tighter italic">RE_STORE</span>
               <span className="font-display font-black text-[20px] text-[var(--color-crema)] tracking-tighter italic">AGRO_TECH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
