import { useEffect, useRef, useState } from "react";

export default function Opcion4() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [1, 2, 3].forEach((step, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => Math.max(prev, step));
            }, i * 1000);
          });
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
  ];

  const pinkColor = "#ff68c0";

  return (
    <div
      className="h-screen w-full flex flex-col justify-center px-40 text-black text-center py-12 bg-pink"
      ref={ref}
    >
      <div className="flex flex-col items-end text-end w-full 2xl:pt-20 lg:pt-0">
        <div className="font-bold text-5xl pr-12">AHORRA</div>
        <div className="stroke text-6xl pr-12">TIEMPO Y RECURSOS</div>
        <div className="mt-2 text-right pr-12 w-2/3">
          Somos una agencia 360° que cubre todas las áreas clave para
          potenciarte, con un acompañamiento completo y efectivo. Todo en un
          solo lugar para que puedas enfocarte en lo que realmente importa.
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center mt-24">
        <div className="relative w-full max-w-4xl h-16 flex items-center justify-between">
          {/* Línea completa */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-black opacity-20 -translate-y-1/2 z-0" />

          {pasos.map((paso, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center z-10"
            >
              {/* Punto sobre la línea */}
              <div
                className={`w-4 h-4 rounded-full bg-black transition-all duration-500 top-4 relative ${
                  visibleSteps >= index + 1
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              />

              {/* Texto con fondo pink */}
              <span
                className={`text-sm text-white px-3 py-1 rounded-md transition-opacity duration-500 top-8 relative ${
                  visibleSteps >= index + 1 ? "opacity-100" : "opacity-0"
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
