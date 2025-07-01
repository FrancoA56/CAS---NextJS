import Link from "next/link";
import Image from "next/image";
import image1 from "../../media/compuDisenoWeb.png";

export default function DisenioWeb() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 flex justify-center items-center">
        <Image src={image1} alt="compu" className="ml-32 "></Image>
      </div>
      <div className="flex flex-col items-end justify-end text-end px-8 text-black w-1/2 mb-12 mr-12">
        <h2 className="text-6xl md:text-7xl font-bold mb-2 text-blue">
          DISEÑO{" "}
        </h2>
        <h2 className="text-6xl md:text-7xl font-bold mb-6 custom-stroke-blue">
          {" "}
          WEB
        </h2>
        <p className="text-2xl mb-6">
          Diseñamos webs que representan tu marca, están pensadas para convertir
          y funcionan bien en todos los dispositivos. Claras, ágiles y alineadas
          con tus objetivos. Porque{" "}
          <span className="text-blue font-semibold">
            una buena web no solo se ve bien, trabaja para vos.
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
