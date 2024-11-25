import React, { useState, useCallback } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionItems: AccordionItem[] = [
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

  const toggleAccordion = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div
      className="w-full max-w-[320px] S:max-w-[400px] M:max-w-xl tablet:max-w-2xl 
                    mx-auto rounded-2xl overflow-hidden
                    px-4 S:px-6 tablet:px-8"
    >
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-[#bfbfbf] last:border-none">
      <button
        onClick={onToggle}
        className="w-full 
                  px-4 S:px-5 tablet:px-6 
                  py-6 S:py-7 tablet:py-8 
                  flex justify-between items-center 
                  text-left text-[#222]"
      >
        <span
          className="font-bold font-poppins 
                        text-sm S:text-base tablet:text-lg"
        >
          {title}
        </span>
        <span
          className={`text-sm transition-transform duration-400 ${
            isOpen ? '-rotate-90' : ''
          }`}
        >
          <AccordionIcon isOpen={isOpen} />
        </span>
      </button>

      <div
        className={`transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-[400px] S:max-h-[500px] tablet:max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <p
          className="px-4 S:px-5 tablet:px-6 
                     pb-4 S:pb-5 tablet:pb-6 
                     text-[#222] 
                     text-sm S:text-base 
                     leading-relaxed 
                     font-onest font-light"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

const AccordionIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <svg
      width="16"
      height="16"
      className="S:w-[18px] S:h-[18px] tablet:w-[20px] tablet:h-[20px]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
        stroke="#222"
        strokeLinecap="round"
        className={isOpen ? 'rotate-90' : ''}
      />
    </svg>
  );
};

export default Accordion;
