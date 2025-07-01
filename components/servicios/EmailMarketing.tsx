import Link from "next/link";
import HorizontalCarousel from "./CarruselHorizontal";

export default function EmailMarketing() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 flex justify-center items-center">
        <HorizontalCarousel />
      </div>
      <div className="flex flex-col items-end justify-end text-end px-8 text-black w-1/2 mb-12 mr-12">
        <h2 className="text-6xl md:text-7xl font-bold mb-2 text-green">
          EMAIL{" "}
        </h2>
        <h2 className="text-6xl md:text-7xl font-bold mb-6 custom-stroke-green">
          {" "}
          MARKETING
        </h2>
        <p className="text-2xl mb-6">
          Diseñamos campañas de email que acompañan a tus clientesen cada etapa,
          con mensajes pensados y automatizacionesque llegan en el momento
          justo. Anticipate a sus necesidades y{" "}
          <span className="text-green font-semibold">generá impacto real.</span>
        </p>
        <Link href="/contacto" replace className="flex flex-row">
          <button className="bg-green rounded-sm border border-black py-3 px-4 hover:bg-green/80 transition-colors ease-in-out">
            No dudes en consultarnos {">"}
            {">"}
          </button>
        </Link>
      </div>
    </div>
  );
}
