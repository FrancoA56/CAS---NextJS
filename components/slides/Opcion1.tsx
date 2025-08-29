"use client";
import Image from "next/image";
import image1 from "../../media/expex-1x1.webp";
import image2 from "../../media/expex6.webp";

export default function Opcion1() {
  return (
    <>
      {/* desktop */}
      <div className="h-screen w-full bg-green py-12 justify-between relative hidden sm:flex flex-col">
        {/* Contenido textual */}
        <div className="flex flex-col px-8 lg:px-16 xl:px-44 2xl:px-44 3xl:px-64 text-black justify-between text-center items-center">
          <div className="flex flex-col items-start text-start mt-12">
            <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
              ATRAE
            </div>
            <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl ">
              NUEVOS CLIENTES
            </div>
            <div className="w-full md:w-3/4 mt-2 text-start 3xl:text-2xl">
              Generamos oportunidades combinando estrategia, creatividad y
              performance para que tu marca gane visibilidad, conecte con la
              audiencia correcta y consiga resultados reales.
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 lg:px-16 xl:px-32 2xl:px-44 3xl:px-64 text-black justify-between text-center">
          <div className="flex flex-col items-end text-start mt-12">
            <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
              MOSTRA
            </div>
            <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
              TU MARCA
            </div>
            <div className="w-full md:w-3/4 mt-2 text-end 3xl:text-2xl">
              Creamos identidades visuales que hablan por vos. <br/>Trabajamos para
              que tu marca se vea unificada y <br/>profesional, pero sobre todo para
              ser recordable.
            </div>
          </div>
        </div>
      </div>

      {/* movil */}

      <div className="h-screen w-full px-8  bg-green py-12 relative overflow-visible sm:hidden flex flex-col ">
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
              que tu marca se vea unificada y profesional, pero sobre todo para
              ser recordable.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
