import Link from "next/link";
import Image from "next/image";
import celular from "../../media/pantalla-celu.png";
import Video1 from "./video";

export default function CreacionDeContenido() {
  return (
    <div className="flex flex-row">
      <div className="w-1/3 flex justify-center items-center ml-32">
        <div className="relative w-[300px] h-[600px] bottom-20">
          <div className="rounded-md">
            <Video1 />
            {/* <Image
              src={celular}
              alt="marco celular"
              className="pointer-events-none relative bottom-72 left-3 h-[460px] w-[280px] "
            /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end text-end px-8 text-black w-2/3 my-auto mr-12">
        <h2 className="text-6xl md:text-7xl font-bold mb-2 text-blue">
          CREACION DE{" "}
        </h2>
        <h2 className="text-6xl md:text-7xl font-bold mb-6 custom-stroke-blue">
          CONTENIDO
        </h2>
        <p className="text-2xl mb-6 w-2/3">
          Pensamos ideas originales que reflejan tu identidad, comunican lo que
          importa y hacen que tu marca se destaque en el mercado. Porque{" "}
          <span className="text-blue font-semibold">
            lo genérico no conecta.
          </span>
        </p>
        <Link href="/contacto" replace className="flex flex-row">
          <button className="bg-blue rounded-sm border border-black py-3 px-4 hover:bg-blue/80 transition-colors ease-in-out">
            No dudes en consultarnos {">"}
            {">"}
          </button>
        </Link>
      </div>
    </div>
  );
}
