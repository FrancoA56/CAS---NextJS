import Link from "next/link";
import HorizontalCarousel from "./CarruselHorizontal";

export default function EmailMarketing() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 flex justify-center items-center">
        <HorizontalCarousel />
      </div>
      <div className="flex flex-col items-end justify-end text-end px-8 text-black w-1/2 mb-12 mr-12">
        <h2 className="text-6xl md:text-8xl font-bold mb-2 text-green">
          Email{" "}
        </h2>
        <h2 className="text-6xl md:text-8xl font-bold mb-6 custom-stroke-green">
          {" "}
          Marketing
        </h2>
        <p className="text-2xl mb-6">
          Diseñamos campañas de email que acompañan a tus clientesen cada etapa,
          con mensajes pensados y automatizacionesque llegan en el momento
          justo. Anticipate a sus necesidades y{" "}
          <span className="text-green font-semibold">generá impacto real.</span>
        </p>
        <button className="bg-green rounded-3xl border border-black py-2 px-4">
          <Link href="/contacto" replace className="flex flex-row">
            No dudes en consultarnos {">"}
            {">"}
          </Link>
        </button>
      </div>
    </div>
  );
}
