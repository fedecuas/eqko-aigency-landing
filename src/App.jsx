import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E1C2D] text-[#F1EDEE] font-body">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero — arriba del fold */}
        <Hero />

        {/* 2. Problem — agitación PAS */}
        <Problem />

        {/* 3. Services — qué construimos */}
        <Services />

        {/* 4. Why Us — diferenciadores */}
        <WhyUs />

        {/* 5. Process — cómo trabajamos */}
        <Process />

        {/* 6. Testimonials — prueba social + métricas */}
        <Testimonials />

        {/* 7. FAQ — preguntas frecuentes + featured snippets */}
        <FAQ />

        {/* 8. CTA Final — conversión */}
        <CTAFinal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
