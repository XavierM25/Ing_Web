import type { Feature, Plan } from './types';

export const FEATURES: Feature[] = [
  { text: "Certificado digital" },
  { text: "Contenido profesional" },
  { text: "Eventos exclusivos organizado por GuimarBot." },
  { text: "Accede a precios especiales en talleres y cursos especializados." },
  { text: "Monitorea tu progreso con evaluaciones interactivas y recibe retroalimentación constante." },
  { text: "Atención individualizada a través de foros y chat con nuestros expertos." },
  { text: "Realiza proyectos reales para reforzar lo aprendido y construir tu portafolio profesional." },
];

export const PLANS: Plan[] = [
  {
    name: "Básico",
    students: "1 estudiante",
    price: "S/ 200",
    color: "#fad033"
  },
  {
    name: "Experto",
    students: "2 estudiantes",
    price: "S/ 350",
    color: "#fa33b5"
  },
  {
    name: "Profesional",
    students: "4 estudiantes",
    price: "S/ 500",
    color: "#fa3333"
  }
];