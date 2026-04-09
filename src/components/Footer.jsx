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
      className="relative py-14 md:py-16"
      style={{ background: '#080F18', borderTop: '1px solid #1E3050' }}
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
            <p className="font-body text-[14px] text-[#8899AA] max-w-[240px] leading-[1.6]">
              EQKO AIgency — Sistemas que hacen crecer negocios.
            </p>

            {/* Social proof mini */}
            <div className="flex items-center gap-2 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" aria-hidden="true" />
              <span className="font-body text-[12px] text-[#8899AA]">143 negocios activos en México y LATAM</span>
            </div>
          </div>

          {/* ── Column 2: Links ── */}
          <nav aria-label="Links del footer">
            <p className="font-display font-semibold text-[12px] text-[#F1EDEE] uppercase tracking-widest mb-4">
              Navegación
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-body text-[14px] text-[#8899AA] hover:text-[#F1EDEE] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Column 3: Contact ── */}
          <div>
            <p className="font-display font-semibold text-[12px] text-[#F1EDEE] uppercase tracking-widest mb-4">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hola@eqko.mx"
                className="flex items-center gap-2 font-body text-[14px] text-[#8899AA] hover:text-[#BB5624] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                hola@eqko.mx
              </a>

              <a
                href="#contacto"
                onClick={(e) => handleLinkClick(e, '#contacto')}
                className="
                  inline-flex items-center gap-2
                  font-display font-semibold text-[13px] text-[#0E1C2D]
                  bg-[#BB5624] hover:bg-[#9A4118]
                  px-4 py-2.5 rounded-lg
                  transition-all duration-200
                  w-fit
                "
              >
                Consultoría gratis →
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1E3050] pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-[12px] text-[#8899AA]">
              © {currentYear} EQKO AIgency. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1">
              <span className="font-body text-[12px] text-[#8899AA]">Hecho con</span>
              <span className="text-[#BB5624] text-[13px]">♦</span>
              <span className="font-body text-[12px] text-[#8899AA]">para negocios que quieren crecer.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
