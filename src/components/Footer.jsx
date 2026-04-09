import CalendlyTrigger from './CalendlyTrigger';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Preguntas frecuentes', href: '#faq' },
    { label: 'Política de privacidad', href: '#privacidad' },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer
      className="relative py-14 md:py-16 bg-[var(--color-carbono)] border-t border-[var(--color-linea)]"
      role="contentinfo"
      aria-label="Pie de página EQKO AIgency"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 md:gap-16 items-start mb-10">

          {/* ── Column 1: Logo + tagline ── */}
          <div className="flex flex-col gap-3">
            <a href="#" aria-label="EQKO AIgency - volver al inicio">
              <img src="/logo.svg" alt="EQKO AIgency" className="h-10 w-auto" />
            </a>
            <p className="font-body text-[14px] text-[var(--color-niebla)] max-w-[240px] leading-[1.6]">
              EQKO AIgency — Sistemas que hacen crecer negocios.
            </p>

            {/* Social proof mini */}
            <div className="flex items-center gap-2 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" aria-hidden="true" />
              <span className="font-body text-[12px] text-[var(--color-niebla)]">+20 negocios activos en MEX, EUA, UE y LATAM</span>
            </div>
          </div>

          {/* ── Column 2: Links ── */}
          <nav aria-label="Links del footer">
            <p className="font-display font-semibold text-[12px] text-[var(--color-crema)] uppercase tracking-widest mb-4">
              Navegación
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-body text-[14px] text-[var(--color-niebla)] hover:text-[var(--color-crema)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Column 3: Contact ── */}
          <div>
            <p className="font-display font-semibold text-[12px] text-[var(--color-crema)] uppercase tracking-widest mb-4">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hola@eqko.tech"
                className="flex items-center gap-2 font-body text-[14px] text-[var(--color-niebla)] hover:text-[var(--color-amber)] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hola@eqko.tech
              </a>

              <a
                href="https://wa.me/525585300838"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-[14px] text-[var(--color-niebla)] hover:text-[var(--color-amber)] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                +52 55 8530 0838
              </a>

              <CalendlyTrigger 
                variant="link"
                className="flex items-center gap-2 font-body text-[14px] text-[var(--color-niebla)] hover:text-[var(--color-amber)] transition-colors duration-200 justify-start h-auto p-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Agendar ahora
              </CalendlyTrigger>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-linea)] pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-[12px] text-[var(--color-niebla)]">
              © {currentYear} EQKO AIgency. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1">
              <span className="font-body text-[12px] text-[var(--color-niebla)]">Hecho con</span>
              <span className="text-[var(--color-amber)] text-[13px]">♦</span>
              <span className="font-body text-[12px] text-[var(--color-niebla)]">para negocios que quieren crecer.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
