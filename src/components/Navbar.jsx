import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Por qué nosotros', href: '#diferencial' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Resultados', href: '#resultados' },
  ];

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(26,25,23,0.90)] backdrop-blur-md border-b border-[#2E2C2A]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 leading-none"
              aria-label="EQKO AIgency - inicio"
            >
              <img src="/logo.svg" alt="EQKO AIgency" className="h-8 w-auto" />
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className="font-body text-[15px] text-[#9C9490] hover:text-[#F2EDE8] transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#contacto'); }}
                className="
                  font-display font-semibold text-[14px] text-[#0F0E0D]
                  bg-[#E8A020] hover:bg-[#C4821A]
                  px-5 py-2.5 rounded-lg
                  transition-all duration-200
                  flex items-center gap-1.5
                  cursor-pointer
                "
                aria-label="Agenda tu diagnóstico gratuito con EQKO AIgency"
              >
                Consultoría gratis
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer bg-transparent border-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span
                className={`block w-6 h-0.5 bg-[#F2EDE8] transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#F2EDE8] transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#F2EDE8] transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(15,14,13,0.85)', backdropFilter: 'blur(6px)' }}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full z-50 w-[280px] bg-[#1A1917] border-l border-[#2E2C2A] flex flex-col transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2E2C2A]">
          <img src="/logo.svg" alt="EQKO AIgency" className="h-8 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-[#9C9490] hover:text-[#F2EDE8] transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Cerrar menú"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 pt-6 gap-1" aria-label="Menú móvil">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className={`
                block font-body text-[16px] text-[#9C9490] hover:text-[#F2EDE8]
                py-3.5 border-b border-[#2E2C2A] last:border-0
                transition-all duration-200 cursor-pointer
                ${menuOpen ? `opacity-100` : 'opacity-0'}
              `}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 80}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 mt-auto mb-8">
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contacto'); }}
            className="
              w-full font-display font-semibold text-[15px] text-[#0F0E0D]
              bg-[#E8A020] hover:bg-[#C4821A]
              py-3.5 rounded-lg
              transition-all duration-200
              flex items-center justify-center gap-2
              cursor-pointer
            "
          >
            Consultoría gratis →
          </a>
        </div>
      </div>
    </>
  );
}
