import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTAFinal() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.25 });

  return (
    <section
      id="contacto"
      className="relative bg-[#0E1C2D] py-24 md:py-32 overflow-hidden"
      aria-label="Llamada a la acción final"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#1E3050]" aria-hidden="true" />

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #1E3050 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Amber center glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(187,86,36,0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ border: '1px solid #BB5624' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.03]"
        style={{ border: '1px solid #BB5624' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-[720px] mx-auto px-5 md:px-8 text-center"
      >

        {/* Eyebrow */}
        <div
          className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <span
            className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-display font-bold uppercase tracking-widest mb-6"
            style={{
              background: 'rgba(187,86,36,0.1)',
              border: '1px solid rgba(187,86,36,0.25)',
              color: '#BB5624',
            }}
          >
            Sin costo · Sin compromiso
          </span>
        </div>

        {/* Headline */}
        <div
          className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <h2
            className="font-display font-extrabold text-[#F1EDEE] mb-6"
            style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            Si sigues haciendo lo mismo, los resultados van a ser los mismos.
          </h2>
        </div>

        {/* Body text */}
        <div
          className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="font-body text-[16px] md:text-[17px] text-[#8899AA] leading-[1.7] mb-10">
            El mercado no está esperando. Tus competidores tampoco. Una llamada de 30 minutos es suficiente para saber si podemos ayudarte — y si no podemos, te lo decimos en esa misma llamada.
          </p>
        </div>

        {/* CTA button */}
        <div
          className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="mailto:hola@eqko.mx?subject=Diagnóstico gratuito"
            className="
              inline-flex items-center justify-center gap-2.5
              font-display font-bold text-[16px] md:text-[17px] text-[#0E1C2D]
              bg-[#BB5624] hover:bg-[#9A4118]
              px-8 py-5 rounded-xl
              transition-all duration-200
              w-full sm:w-auto
            "
            style={{ animation: isVisible ? 'pulseCta 2s ease-in-out infinite' : 'none' }}
            aria-label="Quiero mi consultoría gratuita con EQKO AIgency"
          >
            Quiero mi consultoría gratuita
            <span className="text-[20px]" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Guarantee text */}
        <div
          className={`mt-5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8899AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <p className="font-body text-[13px] text-[#8899AA] text-center">
              Sin costo. Sin compromiso. Si en 30 minutos no ves valor concreto, no tienes ninguna obligación.
            </p>
          </div>
        </div>

        {/* Contact details */}
        <div
          className={`mt-8 pt-8 border-t border-[#1E3050] flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href="mailto:hola@eqko.mx"
            className="flex items-center gap-2 font-body text-[14px] text-[#8899AA] hover:text-[#F1EDEE] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            hola@eqko.mx
          </a>
          <span className="hidden sm:block text-[#1E3050]">·</span>
          <span className="font-body text-[13px] text-[#8899AA]">
            Respondemos en menos de 24 horas
          </span>
        </div>

      </div>
    </section>
  );
}
