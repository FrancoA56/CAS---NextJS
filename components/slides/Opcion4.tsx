import { useEffect, useRef, useState } from "react";

export default function Opcion4() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<number>(0);
  const [lineProgress, setLineProgress] = useState(0); // 0 a 100

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animar la línea del 0% al 100% en pasos
          let progress = 0;
          const interval = setInterval(() => {
            progress += 5;
            setLineProgress(progress);
            // Cada 25% de avance mostramos un paso
            const stepToShow = Math.floor(progress / (100 / pasos.length));
            setVisibleSteps((prev) => Math.max(prev, stepToShow));
            if (progress >= 100) clearInterval(interval);
          }, 100);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const pasos = [
    { label: "Investigación" },
    { label: "Estrategia" },
    { label: "Diseño" },
    { label: "Resultados" },
  ];

  const pinkColor = "#ff68c0";

  return (
    <div
      className="h-screen w-full flex flex-col justify-center  text-black text-center py-12 bg-pink"
      ref={ref}
    >
      <div className="flex flex-col items-end text-end w-full 2xl:pt-20 lg:pt-0 px-20">
        <div className="font-bold text-5xl pr-12">AHORRA</div>
        <div className="stroke text-6xl pr-12">TIEMPO Y RECURSOS</div>
        <div className="mt-2 text-right pr-12 w-2/3">
          Somos una agencia 360° que cubre todas las áreas clave para
          potenciarte, con un acompañamiento completo y efectivo. Todo en un
          solo lugar para que puedas enfocarte en lo que realmente importa.
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-start justify-start mt-24 pr-48">
        <div className="relative w-full  h-16 flex items-center justify-between pl-52 ">
          {/* Línea completa */}
          <div
            className="absolute left-0 h-1 bg-white -translate-y-1/2 z-0 transition-all duration-100"
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
                  visibleSteps >= index + 1
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              />

              {/* Texto con fondo pink */}
              <span
                className={`text-xl text-white px-3 py-1 rounded-sm absolute top-6 ${
                  visibleSteps >= index + 1 ? "animate-pop" : "opacity-0"
                }`}
                style={{ backgroundColor: pinkColor }}
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
