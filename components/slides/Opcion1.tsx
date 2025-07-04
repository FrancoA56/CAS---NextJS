"use client";

export default function Opcion1() {
  return (
    <>
      {/* desktop */}
      <div className="h-screen w-full bg-green py-12 justify-between relative hidden sm:flex flex-col">
        {/* Contenido textual */}
        <div className="flex flex-col px-20 2xl:px-44 text-black justify-between gap-20 text-center">
          <div className="flex flex-col items-start text-start mt-12">
            <div className="font-bold text-5xl">ATRAE</div>
            <div className="stroke text-6xl">NUEVOS CLIENTES</div>
            <div className="w-full md:w-3/4 mt-2 text-start text-lg">
              Generamos oportunidades combinando estrategia, creatividad y
              performance para que tu marca gane visibilidad, conecte con la
              audiencia correcta y consiga resultados reales.
            </div>
          </div>
        </div>
        <div className="flex flex-col px-20 2xl:px-44 xl-24 text-black justify-between gap-20 text-center">
          <div className="flex flex-col items-end text-end mb-12">
            <div className="font-bold text-5xl">MOSTRA</div>
            <div className="stroke text-6xl">TU MARCA</div>
            <div className="w-full md:w-3/4 mt-2 text-end text-lg">
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
