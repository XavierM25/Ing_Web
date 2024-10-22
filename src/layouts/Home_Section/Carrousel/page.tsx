import React from 'react';

const InfiniteCarousel = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto overflow-hidden pt-16  animate-fadeInBlurHorizontal">
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[black] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[black] to-transparent z-10"></div>
      
      <div className="inline-flex animate-scroll">
        <div className="flex min-w-full justify-around items-center space-x-24 pr-16">
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/astro_dark.svg" alt="Astro" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/c.svg" alt="C" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/css.svg" alt="CSS" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/html5.svg" alt="HTML5" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/java.svg" alt="Java" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/javascript.svg" alt="JavaScript" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/nextjs_logo_dark.svg" alt="Next.js" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/python.svg" alt="Python" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/remix_dark.svg" alt="Remix" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/tailwindcss.svg" alt="Tailwind CSS" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/typescript.svg" alt="TypeScript" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/vue.svg" alt="Vue" />
        </div>
        <div className="flex min-w-full justify-around items-center space-x-24 pl-8">
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/astro_dark.svg" alt="Astro" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/c.svg" alt="C" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/css.svg" alt="CSS" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/html5.svg" alt="HTML5" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/java.svg" alt="Java" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/javascript.svg" alt="JavaScript" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/nextjs_logo_dark.svg" alt="Next.js" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/python.svg" alt="Python" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/remix_dark.svg" alt="Remix" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/tailwindcss.svg" alt="Tailwind CSS" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/typescript.svg" alt="TypeScript" />
          <img className="h-16 w-auto object-contain opacity-50 white-filter shadow-lg" src="/src/layouts/Home_Section/Carrousel/components/vue.svg" alt="Vue" />
        </div>
      </div>
    </div>
  );
};


export default InfiniteCarousel;