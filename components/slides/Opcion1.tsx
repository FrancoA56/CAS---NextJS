"use client";
import Image from "next/image";
import image1 from "../../media/expex-1x1.webp";
import image2 from "../../media/expex6.webp";
import { useIsIOS } from "../../hooks/useIsIOS";
export default function Opcion1() {
  const isIOS = useIsIOS();

  if (isIOS === null) return null; // Esperar que se detecte
  return (
    <>
      {/* desktop */}
      {/* desktop */}
      <div className="w-screen h-[100dvh] bg-green hidden sm:flex">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col justify-between text-black">
          {/* Bloque ATRAÉ */}
          <div className="mt-12">
            <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
              ATRAE
            </div>
            <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
              NUEVOS CLIENTES
            </div>
            <div className="mt-2 max-w-[80%] md:text-xl 3xl:text-2xl">
              Generamos oportunidades combinando estrategia, creatividad y
              performance para que tu marca gane visibilidad, conecte con la
              audiencia correcta y consiga resultados reales.
            </div>
          </div>

          {/* Bloque MOSTRA */}
          <div className="mb-12 self-end text-right">
            <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
              MOSTRA
            </div>
            <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
              TU MARCA
            </div>
            <div className="mt-2  md:text-xl 3xl:text-2xl">
              Creamos identidades visuales que hablan por vos.
              <br />
              Trabajamos para que tu marca se vea unificada y profesional, pero
              sobre todo para ser recordable.
            </div>
          </div>
        </div>
      </div>

      {/* movil */}

      {isIOS ? (
        <div className="h-[100dvh] w-full px-6  bg-green relative overflow-visible sm:hidden flex flex-col ">
          {/* Contenido textual */}
          <div className="flex flex-col text-black justify-between gap-12 text-center mt-20">
            <div className="flex flex-col items-start text-start">
              <div className="font-bold text-2xl ">ATRAE</div>
              <div className="stroke text-3xl ">NUEVOS CLIENTES</div>
              <div className="w-full mt-2 text-start">
                Generamos oportunidades combinando estrategia, creatividad y
                performance para que tu marca gane visibilidad, conecte con la
                audiencia correcta y consiga resultados reales.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-10 gap-12 items-center justify-center">
            <div className="flip-container w-44 h-44 pointer-events-auto">
              <div className="flipper rotate-on-3s">
                <div className="front">
                  <Image
                    src={image1}
                    alt="Front"
                    className="w-full h-full rounded"
                  />
                </div>
                <div className="back">
                  <Image
                    src={image2}
                    alt="Back"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  text-black justify-between text-center">
            <div className="flex flex-col items-end text-start mt-10">
              <div className="font-bold text-2xl ">MOSTRA</div>
              <div className="stroke text-3xl">TU MARCA</div>
              <div className="w-full mt-2 text-end">
                Creamos identidades visuales que hablan por vos. Trabajamos para
                que tu marca se vea unificada y profesional, pero sobre todo
                para ser recordable.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen  h-[100dvh] w-full px-8  bg-green py-20 relative overflow-visible sm:hidden flex flex-col ">
          {/* Contenido textual */}
          <div className="flex flex-col text-black justify-between gap-20 text-center">
            <div className="flex flex-col items-start text-start mt-12">
              <div className="font-bold text-3xl ">ATRAE</div>
              <div className="stroke text-4xl ">NUEVOS CLIENTES</div>
              <div className="w-full mt-2 text-start">
                Generamos oportunidades combinando estrategia, creatividad y
                performance para que tu marca gane visibilidad, conecte con la
                audiencia correcta y consiga resultados reales.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 gap-12 items-center justify-center">
            <div className="flip-container w-72 h-72 pointer-events-auto">
              <div className="flipper rotate-on-3s">
                <div className="front">
                  <Image
                    src={image1}
                    alt="Front"
                    className="w-full h-full rounded"
                  />
                </div>
                <div className="back">
                  <Image
                    src={image2}
                    alt="Back"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  text-black justify-between text-center">
            <div className="flex flex-col items-end text-start mt-12">
              <div className="font-bold text-3xl ">MOSTRA</div>
              <div className="stroke text-4xl">TU MARCA</div>
              <div className="w-full mt-2 text-end">
                Creamos identidades visuales que hablan por vos. Trabajamos para
                que tu marca se vea unificada y profesional, pero sobre todo
                para ser recordable.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
