const InfiniteCarousel = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto overflow-hidden pt-16  animate-fadeInBlurHorizontal">
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[white] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[white] to-transparent z-10"></div>

      <div id="svg" className="inline-flex animate-scroll opacity-75">
        <div className="flex min-w-full justify-around items-center space-x-24 pr-16">
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/astro_dark.svg"
            alt="Astro"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/c.svg"
            alt="C"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/css.svg"
            alt="CSS"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/html5.svg"
            alt="HTML5"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/java.svg"
            alt="Java"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/javascript.svg"
            alt="JavaScript"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/nextjs_logo_dark.svg"
            alt="Next.js"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/python.svg"
            alt="Python"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/remix_dark.svg"
            alt="Remix"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/tailwindcss.svg"
            alt="Tailwind CSS"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/typescript.svg"
            alt="TypeScript"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/vue.svg"
            alt="Vue"
          />
        </div>
        <div className="flex min-w-full justify-around items-center space-x-24 pl-8">
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/astro_dark.svg"
            alt="Astro"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/c.svg"
            alt="C"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/css.svg"
            alt="CSS"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/html5.svg"
            alt="HTML5"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/java.svg"
            alt="Java"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/javascript.svg"
            alt="JavaScript"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/nextjs_logo_dark.svg"
            alt="Next.js"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/python.svg"
            alt="Python"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/remix_dark.svg"
            alt="Remix"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/tailwindcss.svg"
            alt="Tailwind CSS"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/typescript.svg"
            alt="TypeScript"
          />
          <img
            className="h-16 w-auto object-contain white-filter "
            src="/src/components/home/assets/vue.svg"
            alt="Vue"
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
