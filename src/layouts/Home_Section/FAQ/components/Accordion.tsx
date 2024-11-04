import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionItems = [
    {
      title: '¿Qué es GuimarBot?',
      content:
        'GuimarBot es una empresa educativa comprometida con el aprendizaje tecnológico, fundada por Jorge Luis Cordova Lopez. Creemos que la programación es una habilidad esencial en el mundo moderno y nuestra meta es facilitar su aprendizaje para todos. Ofrecemos cursos diseñados para niños, adolescentes y adultos, adaptándonos a las necesidades y ritmos de cada estudiante.',
    },
    {
      title: 'Soporte',
      content:
        '¿Necesitas ayuda?, contacta por estos medios: Correo electrónico: jorge.l.corda.lopez@gmail.com Whatsapp: 921297778 / 923984845 Contacto: Ing. Jorge Córdova',
    },
    {
      title: 'Visión y Misión',
      content:
        'Visión: Ser un líder en la enseñanza de programación, fomentando el desarrollo de habilidades tecnológicas y creativas en personas de todas las edades para construir una sociedad más innovadora y digitalmente competente. Misión: Democratizar la educación en programación al proporcionar herramientas y recursos accesibles y de calidad, creando un entorno inclusivo que prepare a los estudiantes para los desafíos del futuro digital.',
    },
    {
      title: 'Lenguajes utilizados',
      content: '- JavaScript - Python - Scratch - C',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
      {accordionItems.map((item, index) => (
        <div key={index} className="border-b border-[#bfbfbf] last:border-none">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-8 flex justify-between items-center text-left text-[#222]"
          >
            <span className="font-bold font-[Poppins]">
              {item.title}
            </span>
            <span
              className={`text-sm transition-transform duration-400 ${
                openIndex === index ? '-rotate-90' : ''
              }`}
            >
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5" stroke="#222" stroke-linecap="round"></path> </g></svg>
            </span>
          </button>

          <div
            className={`transition-all duration-400 ease-in-out overflow-hidden ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-4 text-[#222] leading-relaxed" style={{fontFamily: 'Onest, sans-serif', fontWeight: '300'}}>
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
