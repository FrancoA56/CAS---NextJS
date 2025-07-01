"use client";
import Image from "next/image";
import celular from "../../media/pantalla-celu.png";

export default function Opcion1() {
  return (
    <div className="h-screen w-full bg-green py-12">
      <div className=" flex flex-col px-44 text-black justify-between gap-40 text-center">
        {/* Título */}
        <div className="flex flex-col items-start text-start mt-12 ">
          <div className="font-bold text-5xl">ATRAE</div>
          <div className="stroke text-6xl">NUEVOS CLIENTES</div>
          <div className="w-2/3 mt-2 text-start">
            Generamos oportunidades integrales reales de negocio conectando tu
            marca con quienes necesitan lo que ofreces.
          </div>
        </div>

        {/* Texto al fondo alineado a la derecha */}
        <div className="flex flex-col items-end w-full mb-12">
          <div className="font-bold text-5xl">MOSTRA</div>
          <div className="stroke text-6xl">TU MARCA</div>
          <div className="mt-2 w-2/3 text-right">
            Generamos oportunidades integrales reales de negocio conectando tu
            marca con quienes necesitan lo que ofreces.
          </div>
        </div>
      </div>
      <div className="relative w-[270px] h-[600px] bottom-[650px] left-[1090px]">
        <div className="rounded-md">
          <video
            width="217"
            height="330"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className="relative left-8 top-[155px] rounded-lg "
          >
            <source src="/video/wholesale.webm" type="video/webm" />
            <source src="/video/wholesale.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Image
            src={celular}
            alt="marco celular"
            className="pointer-events-none relative left-1 bottom-[249px] h-[419px]"
          />
        </div>
      </div>
    </div>
  );
}
