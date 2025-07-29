import { useEffect, useRef, useState } from "react";

export default function Opcion4() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<number>(0);
  const [lineProgress, setLineProgress] = useState(0); // 0 a 100

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(
        "[data-horizontal-scroll]"
      ) as HTMLElement;
      const slide = ref.current;

      if (!container || !slide) return;

      const containerLeft = container.scrollLeft;
      const slideOffsetLeft = slide.offsetLeft;
      const slideWidth = slide.offsetWidth;

      const visibleStart = containerLeft;
      const visibleEnd = containerLeft + container.offsetWidth;

      const slideStart = slideOffsetLeft;
      const slideEnd = slideOffsetLeft + slideWidth;

      const isVisible = visibleEnd > slideStart && visibleStart < slideEnd;

      if (isVisible) {
        const isMobile = window.innerWidth < 768;
        const offsetStart = container.offsetWidth * (isMobile ? 1.15 : 0.92);

        // desplazamiento considerando el offset
        const scrollPositionWithinSlide =
          containerLeft + offsetStart - slideStart;

        const progressRatio = Math.min(
          Math.max(scrollPositionWithinSlide / slideWidth, 0),
          1
        );

        const percentage = progressRatio * 100;

        setLineProgress(percentage);

        const stepToShow = Math.floor((percentage / 100) * pasos.length);
        setVisibleSteps(stepToShow);
      }
    };

    const container = document.querySelector(
      "[data-horizontal-scroll]"
    ) as HTMLElement;

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const pasos = [
    { label: "Investigación" },
    { label: "Diseño" },
    { label: "Estrategia" },
    { label: "Resultados" },
  ];

  const pinkColor = "#ff68c0";

  return (
    <div
      className="h-screen w-full flex flex-col justify-center  text-black text-center bg-pink"
      ref={ref}
    >
      <div className="flex flex-col items-end text-end px-8 md:px-24 ">
        <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
          AHORRÁ
        </div>
        <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
          TIEMPO Y RECURSOS
        </div>
        <div className="w-full md:w-3/4 mt-2 text-end 3xl:text-2xl">
          Somos una agencia 360° que cubre todas las áreas clave para
          potenciarte, con un acompañamiento completo y efectivo. Todo en un
          solo lugar para que puedas enfocarte en lo que realmente importa.
        </div>
      </div>

      {/* Timeline Desktop*/}
      <div className=" flex-col items-start justify-start mt-24 pr-12 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-48 hidden md:flex">
        <div
          className="relative w-full h-16 flex items-center justify-between pl-8 md:pl-24 lg:pl-52
 "
        >
          {/* Línea completa */}
          <div
            className="absolute left-0 h-1 bg-white -translate-y-1/2 z-0 transition-all duration-700 ease-in-out"
            style={{ width: `${lineProgress}%` }}
          />

          {pasos.map((paso, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center z-10"
            >
              {/* Punto sobre la línea */}
              <div
                className={`w-5 h-5 rounded-full bg-yellow transition-all duration-500 bottom-0.5 relative ${
                  visibleSteps >= index + 1 ? "animate-scale-in" : "opacity-0"
                }`}
              />

              {/* Texto con fondo pink */}
              <span
                className={`text-base md:text-xl 3xl:text-2xl text-white px-3 py-1 rounded-sm absolute top-6 transition-transform ${
                  visibleSteps >= index + 1
                    ? "animate-slide-up-fade"
                    : "opacity-0"
                } `}
                style={{ backgroundColor: pinkColor }}
              >
                {paso.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Móvil: vertical */}
      <div className="md:hidden flex flex-col items-start mt-12 pt-20 px-16 relative ">
        {/* Línea vertical completa */}
        <div
          className="absolute left-[8.1vh] top-0 bottom-14 w-1 bg-white z-0 transition-all duration-500"
          style={{ height: `${(visibleSteps / pasos.length) * 88}%` }}
        />

        {pasos.map((paso, index) => (
          <div key={index} className="relative z-10 flex items-center mb-8">
            {/* Punto en la línea */}
            <div
              className={`w-5 h-5 rounded-full bg-yellow transition-all duration-500 relative ml-3 mr-4 ${
                visibleSteps >= index + 1 ? "animate-scale-in" : "opacity-0"
              }`}
            />

            {/* Texto del paso */}
            <div className="my-4">
              <span
                className={`text-base text-white px-3 py-1 rounded-sm transition-transform ${
                  visibleSteps >= index + 1
                    ? "animate-slide-up-fade"
                    : "opacity-0"
                }`}
                style={{ backgroundColor: pinkColor }}
              >
                {paso.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
