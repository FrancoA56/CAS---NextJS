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
    <div ref={ref} className="w-screen h-[100dvh] bg-pink flex flex-shrink-0">
      {/* Contenedor interno limitado */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center text-black">
        {/* ===== TITULOS ===== */}
        <div className="items-end text-right">
          <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
            AHORRÁ
          </div>
          <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
            TIEMPO Y RECURSOS
          </div>

          {/* Texto desktop */}
          <div className="mt-2 max-w-[720px] ml-auto text-end hidden md:block md:text-xl 3xl:text-2xl">
            Somos una agencia 360° que cubre todas las áreas clave para
            potenciarte,
            con un acompañamiento completo y efectivo. Todo en un solo lugar
            para que puedas enfocarte en lo que realmente importa.
          </div>

          {/* Texto mobile */}
          <div className="mt-2 md:hidden text-end">
            Somos una agencia 360° que cubre todas las áreas clave para
            potenciarte, con un acompañamiento completo y efectivo. Todo en un
            solo lugar para que puedas enfocarte en lo que realmente importa.
          </div>
        </div>

        {/* ===== TIMELINE DESKTOP ===== */}
        <div className="hidden md:flex mt-24 self-end w-[90%]">
          <div className="relative w-full h-16 flex items-center justify-between">
            {/* Línea animada */}
            <div
              className="absolute left-0 h-1 bg-white -translate-y-1/2 z-0 transition-all duration-700 ease-in-out"
              style={{ width: `${lineProgress}%` }}
            />

            {pasos.map((paso, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center z-10"
              >
                {/* Punto */}
                <div
                  className={`w-5 h-5 rounded-full bg-yellow transition-all duration-500 bottom-0.5 relative ${
                    visibleSteps >= index + 1 ? "animate-scale-in" : "opacity-0"
                  }`}
                />

                {/* Texto */}
                <span
                  className={`text-base md:text-xl text-white px-3 py-1 rounded-sm absolute top-6 transition-transform ${
                    visibleSteps >= index + 1
                      ? "animate-slide-up-fade"
                      : "opacity-0"
                  }`}
                >
                  {paso.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== TIMELINE MOBILE ===== */}
        <div className="md:hidden flex flex-col pt-20">
          {pasos.map((paso, index) => (
            <div key={index} className="relative z-10 flex items-center mb-8">
              <div
                className={`w-5 h-5 rounded-full bg-yellow transition-all duration-500 relative mr-4 ${
                  visibleSteps >= index + 1 ? "animate-scale-in" : "opacity-0"
                }`}
              />
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
          ))}
        </div>
      </div>
    </div>
  );
}
