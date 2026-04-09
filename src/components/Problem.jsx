import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Users, Zap, ArrowUpRight } from 'lucide-react';

export default function Problem() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.2 });

  const problems = [
    {
      title: "Caza de leads manual",
      desc: "Tu equipo pierde el 70% del tiempo en prospección fría que no convierte.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Sistemas desconectados",
      desc: "Tu data vive en silos. Pierdes oportunidades porque nadie sabe qué pasa con cada lead.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Escalabilidad limitada",
      desc: "Si quieres vender el doble, necesitas contratar el doble. El margen desaparece.",
      icon: <ArrowUpRight className="w-5 h-5" />
    }
  ];

  return (
    <section
      id="el-problema"
      className="relative bg-[var(--color-grafito)] py-20 md:py-32 overflow-hidden"
      aria-label="El problema que resolvemos"
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
        style={{ background: 'var(--color-amber)' }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Left Side: Content */}
          <div className={`transition-all duration-800 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block font-display font-bold text-[var(--color-amber)] text-[13px] tracking-widest uppercase mb-4">
              La Realidad del Mercado
            </span>
            
            <h2 
              className="font-display font-bold text-[var(--color-crema)] mb-6"
              style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', lineHeight: '1.1' }}
            >
              La mayoría de las agencias te venden "más leads". <span className="text-[var(--color-niebla)]">Nosotros te vendemos "más libertad".</span>
            </h2>

            <p className="font-body text-[17px] md:text-[18px] text-[var(--color-niebla)] leading-[1.7] mb-10 max-w-[540px]">
              El marketing tradicional está saturado. Los clientes ignoran los anuncios y los equipos comerciales están quemados. La IA no es una opción, es el nuevo estándar de eficiencia.
            </p>

            {/* Problem list */}
            <div className="space-y-6">
              {problems.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-[var(--color-linea)] bg-[var(--color-piedra)]/40">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[rgba(183,206,20,0.1)] flex items-center justify-center text-[var(--color-amber)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[var(--color-crema)] text-[16px] mb-1">{item.title}</h4>
                    <p className="font-body text-[14px] text-[var(--color-niebla)] leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual representation */}
          <div className={`relative transition-all duration-800 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-[var(--color-linea)] group">
              <div className="absolute inset-0 bg-[var(--color-carbono)]">
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
                
                {/* Visual conceptualization of "Chaos to Order" */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      {/* Animated lines or patterns could go here */}
                      {[1, 2, 3, 4].map(i => (
                        <div 
                          key={i}
                          className="h-12 w-full border border-[var(--color-linea)] rounded-lg flex items-center px-4 gap-3 bg-[rgba(255,255,255,0.02)]"
                          style={{ marginLeft: `${i * 12}px`, opacity: 1 - (i * 0.15) }}
                        >
                          <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                          <div className="h-2 w-1/2 bg-[rgba(255,255,255,0.05)] rounded" />
                        </div>
                      ))}
                      
                      <div className="py-4 flex justify-center">
                        <div className="px-6 py-2 rounded-full bg-[var(--color-amber)] text-[var(--color-carbono)] font-display font-bold text-[14px] shadow-[0_0_30px_rgba(183,206,20,0.3)]">
                          OPTIMIZANDO CON EQKO AI
                        </div>
                      </div>

                      {[1, 2].map(i => (
                        <div 
                          key={i}
                          className="h-12 w-full border border-[var(--color-amber)]/20 rounded-lg flex items-center px-4 gap-3 bg-[rgba(183,206,20,0.03)]"
                        >
                          <div className="w-2 h-2 rounded-full bg-[var(--color-amber)]" />
                          <div className="h-2 w-3/4 bg-[var(--color-amber)]/10 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbono)] via-transparent to-transparent opacity-60" />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 p-5 bg-[var(--color-linea)] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-[200px]">
              <p className="font-display font-bold text-[24px] text-[var(--color-amber)] mb-0 leading-none">85%</p>
              <p className="font-body text-[12px] text-[var(--color-niebla)] uppercase tracking-wider font-bold">Inoperatividad promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
