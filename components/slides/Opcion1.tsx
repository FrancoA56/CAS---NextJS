"use client";
import ImagesCol from "./ImagesCol";

export default function Opcion1() {
  return (
    <>
      {/* desktop */}
      <div className="h-screen w-full bg-green py-12 justify-between relative hidden sm:flex flex-col">
        {/* Contenido textual */}
        <div className="flex flex-col px-8 lg:px-16 xl:px-44 2xl:px-44 3xl:px-64 text-black justify-between text-center items-center">
          <div className="flex flex-col items-start text-start mt-12">
            <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">ATRAE</div>
            <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl ">NUEVOS CLIENTES</div>
            <div className="w-full md:w-3/4 mt-2 text-start 3xl:text-2xl">
              Generamos oportunidades combinando estrategia, creatividad y
              performance para que tu marca gane visibilidad, conecte con la
              audiencia correcta y consiga resultados reales.
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 lg:px-16 xl:px-32 2xl:px-44 3xl:px-64 text-black justify-between text-center">
          <div className="flex flex-col items-end text-start mt-12">
            <div className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">MOSTRA</div>
            <div className="stroke text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">TU MARCA</div>
            <div className="w-full md:w-3/4 mt-2 text-end 3xl:text-2xl">
              Creamos identidades visuales que hablan por vos. Trabajamos para
              que tu marca se vea unificada y profesional, pero sobre todo para
              ser recordable.
            </div>
          </div>
        </div>
      </div>

      {/* movil */}

      <div className="h-screen w-full bg-green py-12 relative overflow-visible sm:hidden flex ">
        {/* Contenido textual */}
        <div className="flex flex-col px-6  text-black justify-between gap-20 text-center">
          <div className="flex flex-col items-start text-start mt-12">
            <div className="font-bold text-5xl ">ATRAE</div>
            <div className="stroke text-6xl ">NUEVOS CLIENTES</div>
            <div className="w-full md:w-3/4 mt-2 text-start text-lg">
              Generamos oportunidades combinando estrategia, creatividad y
              performance para que tu marca gane visibilidad, conecte con la
              audiencia correcta y consiga resultados reales.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
