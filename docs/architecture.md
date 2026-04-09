# Architecture EQKO AIgency Landing Page

## 🛰️ Stack Tecnológico
- **Frontend:** [React](https://react.dev/) v18 + [Vite](https://vitejs.dev/)
- **Estilos:** [TailwindCSS](https://tailwindcss.com/) v3 + [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (Design Tokens)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Animaciones:** CSS Keyframes + Intersection Observer (Native)
- **Backend/DB:** [Supabase](https://supabase.com/) (Gestión de leads y almacenamiento de consultas)
- **Agenda:** [Calendly](https://calendly.com/) (Integración vía Popup Widget para agendamiento estratégico)

## 🎨 Design System
- **Tema:** Carbono Premium (`#0E1C2D`)
- **Acento:** EQKO Amber (`#B7CE14`)
- **Efectos:** Glassmorphism, Gradientes radiales, Micro-animaciones de entrada.
- **Tipografía:** 
  - Display: Plus Jakarta Sans / Inter
  - Body: DM Sans / Roboto

## 🛠️ Estructura de Proyecto
- `/src/components`: Componentes modulares y reutilizables.
- `/src/hooks`: Hooks personalizados (e.g., `useIntersectionObserver`).
- `/src/lib`: Configuraciones de clientes externos (Supabase).
- `/src/index.css`: Definición centralizada de variables CSS y utilidades globales.

## 📈 Estrategia de Conversión
Basada en el framework **PAS (Problem-Agitation-Solution)** + **Frictionless Booking**:
1.  **P (Problema):** Procesos manuales lentos y CAC elevado.
2.  **A (Agitación):** Pérdida de leads por falta de respuesta inmediata.
3.  **S (Solución):** EQKO-system automatizado.
4.  **Action:** Agendamiento directo vía Calendly para máxima conversión.
