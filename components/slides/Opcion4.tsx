import { useEffect, useRef, useState } from "react";

export default function Opcion4() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [started, setStarted] = useState(false);

  const pasos = [
    { label: "Investigación" },
    { label: "Diseño" },
    { label: "Estrategia" },
    { label: "Resultados" },
  ];

  // 🖥️ Desktop: lógica de scroll (ignora mobile)
  useEffect(() => {
    const container = document.querySelector(
      "[data-horizontal-scroll]"
    ) as HTMLElement | null;
    if (!container) return;

    const handleScroll = () => {
      if (window.innerWidth < 768) return; // no tocar mobile
      const slide = ref.current;
      if (!slide) return;

      const containerLeft = container.scrollLeft;
      const slideOffsetLeft = slide.offsetLeft;
      const slideWidth = slide.offsetWidth;

      const visibleStart = containerLeft;
      const visibleEnd = containerLeft + container.offsetWidth;

      const slideStart = slideOffsetLeft;
      const slideEnd = slideOffsetLeft + slideWidth;

      const isVisible = visibleEnd > slideStart && visibleStart < slideEnd;
      if (!isVisible) return;

      const offsetStart = container.offsetWidth * 0.92;
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
    };

    container.addEventListener("scroll", handleScroll);
    // por si ya está visible al montar:
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [pasos.length]);

  // 📱 Mobile: observar visibilidad para arrancar animación
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 768) return; // solo mobile

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 📱 Mobile: animación por intervalo cuando started === true
  useEffect(() => {
    if (!started) return;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 4;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setLineProgress(progress);
      const stepToShow = Math.floor((progress / 100) * pasos.length);
      setVisibleSteps(stepToShow);
    }, 80);

    return () => clearInterval(interval);
  }, [started, pasos.length]);

  return (
    <div
      className="h-[100dvh] w-full flex flex-col justify-center  text-black text-center bg-pink pt-20"
      ref={ref}
    >
      <div className="flex flex-col items-end text-end px-8 md:px-24 ">
        <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
          AHORRÁ
        </div>
        <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
          TIEMPO Y RECURSOS
        </div>
        <div className="w-full md:w-3/4 mt-2 text-end 3xl:text-2xl hidden md:flex">
          Somos una agencia 360° que cubre todas las áreas clave para
          potenciarte,
          <br /> con un acompañamiento completo y efectivo. Todo en un solo
          lugar para que puedas enfocarte en lo que realmente importa.
        </div>
        <div className="w-full md:w-3/4 mt-2 text-end 3xl:text-2xl flex md:hidden">
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
              >
                {paso.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Mobile (usa lineProgress del intervalo) */}
      <div className="md:hidden flex flex-col items-start pt-20 px-16 relative">
       
        {pasos.map((paso, index) => (
          <div key={index} className="relative z-10 flex items-center mb-8">
            <div
              className={`w-5 h-5 rounded-full bg-yellow transition-all duration-500 relative ml-3 mr-4 ${
                visibleSteps >= index + 1 ? "animate-scale-in" : "opacity-0"
              }`}
            />
            <div className="my-4">
              <span
                className={`text-base text-white px-3 py-1 rounded-sm transition-transform ${
                  visibleSteps >= index + 1
                    ? "animate-slide-up-fade"
                    : "opacity-0"
                }`}
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
