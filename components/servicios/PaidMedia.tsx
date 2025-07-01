import Link from "next/link";
import Image from "next/image";
import image1 from "../../media/MaterialWeb/graficosPaidMedia.png";

export default function PaidMedia() {
  return (
    <div className="flex flex-col md:flex-row w-full px-8 py-12 items-center justify-between">
      {/* Texto */}
      <div className="flex flex-col items-start justify-center text-black text-left mb-12 md:w-2/5 w-full ml-32">
        <h2 className="text-6xl md:text-7xl font-bold mb-2 text-teal">PAID</h2>
        <h2 className="text-6xl md:text-7xl font-bold mb-6 custom-stroke-teal">
          MEDIA
        </h2>
        <p className="text-lg md:text-xl mb-6 text-justify">
          Hacemos que tu inversión se convierta en resultados. Creamos campañas
          en Google y Meta, optimizadas para alcanzar a las personas correctas
          con el mensaje justo.{" "}
          <span className="text-teal font-semibold">
            Más visibilidad, más impacto.
          </span>
        </p>
        <Link href="/contacto" replace className="flex flex-row">
          <button className="bg-teal rounded-sm border border-black py-3 px-4 hover:bg-teal/80 transition-colors ease-in-out">
            No dudes en consultarnos {">"}
            {">"}
          </button>
        </Link>
      </div>

      {/* Carrusel */}
      <div className="md:w-3/5 w-full flex justify-center">
        <Image src={image1} alt="graficos" className="mx-12"></Image>
      </div>
    </div>
  );
}
