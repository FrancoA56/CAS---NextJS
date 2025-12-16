"use client";
import Image from "next/image";
import slide2 from "../../media/resultados.webp";
import { useIsIOS } from "../../hooks/useIsIOS";
export interface Ideal {
  label: string;
  background: string;
  Component: React.ComponentType;
}

interface SecondSlideProps {
  ideales: Ideal[];
  scrollTo: (index: number) => void;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

export default function SecondSlide({
  ideales,
  scrollTo,
  hoveredIndex,
  setHoveredIndex,
}: SecondSlideProps) {
  const isIOS = useIsIOS();

  if (isIOS === null) return null; // Esperar que se detecte
  return (
    <>
      {/*DESKTOP*/}

      <div className="md:flex md:flex-row hidden h-[100dvh] w-full">
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-24">
          <h2 className="text-black text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold uppercase mb-6">
            soluciones creativas
          </h2>
          <h2 className="text-gradient-cas text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl uppercase mb-6">
            resultados reales
          </h2>
          <p className="text-black text-lg md:text-2xl 3xl:text-3xl mb-10 px-0 md:px-12">
            En <span className="font-extrabold text-gradient-cas-ns">CAS</span>{" "}
            diseñamos experiencias que conectan marcas con personas. Nuestro
            enfoque es integral y creativo, combinando estrategia, contenido y
            diseño en un mismo equipo para garantizar la mejor solución.
          </p>

          <div className="flex flex-wrap justify-center gap-2 z-0 mx-24 ">
            {ideales.map(({ label, background }, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index + 2)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  backgroundColor:
                    hoveredIndex === index ? `${background}99` : background,
                }}
                className="border border-black/30 px-6 py-3 rounded-sm text-black backdrop-blur-md text-sm sm:w-auto w-full transition-colors duration-300"
              >
                <span className="text-lg 3xl:text-xl">{label}</span>
              </button>
            ))}
          </div>
        </div>
        <Image
          src={slide2}
          alt="slide2"
          className="relative left-[10%] py-12 z-10 w-[22%] h-auto rounded "
        />
      </div>

      {/*MOVIL*/}
      {isIOS ? (
        <section id="second">
          <div className="flex flex-col md:hidden h-[100dvh] w-full items-center justify-center text-center pb-12">
            <div className="flex flex-col items-center justify-center text-center px-6 mt-6">
              <h2 className="text-black text-4xl font-extrabold uppercase mb-2">
                soluciones creativas
              </h2>
              <h2 className="text-gradient-cas text-5xl uppercase mb-6">
                resultados reales
              </h2>
              <p className="text-black text-lg  mb-10 px-0 ">
                En{" "}
                <span className="font-extrabold text-gradient-cas-ns">CAS</span>{" "}
                diseñamos experiencias que conectan marcas con personas. Nuestro
                enfoque es integral y creativo, combinando estrategia, contenido
                y diseño en un mismo equipo para garantizar la mejor solución.
              </p>
              <div className="flex flex-wrap justify-center gap-2 z-0 mx-12">
                {ideales.map(({ label, background }, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index + 2)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      backgroundColor:
                        hoveredIndex === index ? `${background}99` : background,
                    }}
                    className="border border-black/30 px-6 py-3 rounded-sm text-black backdrop-blur-md text-sm sm:w-auto w-full transition-colors duration-300"
                  >
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="second">
          <div className="flex flex-col md:hidden h-[100dvh] w-full items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-black text-4xl font-extrabold uppercase mb-2">
                soluciones creativas
              </h2>
              <h2 className="text-gradient-cas text-5xl uppercase mb-6">
                resultados reales
              </h2>
              <p className="text-black text-lg  mb-10 px-0 ">
                En{" "}
                <span className="font-extrabold text-gradient-cas-ns">CAS</span>{" "}
                diseñamos experiencias que conectan marcas con personas. Nuestro
                enfoque es integral y creativo, combinando estrategia, contenido
                y diseño en un mismo equipo para garantizar la mejor solución.
              </p>
              <div className="flex flex-wrap justify-center gap-2 z-0 mx-12">
                {ideales.map(({ label, background }, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index + 2)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      backgroundColor:
                        hoveredIndex === index ? `${background}99` : background,
                    }}
                    className="border border-black/30 px-6 py-3 rounded-sm text-black backdrop-blur-md text-sm sm:w-auto w-full transition-colors duration-300"
                  >
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
