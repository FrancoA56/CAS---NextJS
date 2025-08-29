import Link from "next/link";
import HorizontalCarousel from "./CarruselHorizontal";

export default function EmailMarketing() {
  return (
    <>
      {/* Desktop */}

      <div className="md:flex md:flex-row hidden justify-center w-screen h-screen">
        <HorizontalCarousel />
        <div className="flex flex-col items-start justify-center text-start px-8 text-black w-1/2 pb-12 mr-12 ml-0">
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-2 text-green">
            EMAIL{" "}
          </h2>
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-6 custom-stroke-green">
            {" "}
            MARKETING
          </h2>
          <ul className="text-lg 3xl:text-xl list-disc  list-inside mb-6">
            <li>Diseño de piezas para redes, campañas y web.</li>
            <li>Desarrollo y actualización de identidad visual.</li>
            <li>Creación de material gráfico para eventos y promociones.</li>
            <li>
              Adaptación de diseños para múltiples formatos y plataformas.
            </li>
            <li>Asesoría creativa para potenciar tu imagen de marca.</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-green rounded-sm border text-lg 3xl:text-xl border-black py-3 px-4 hover:bg-green/80 transition-colors ease-in-out">
              Empecemos {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Movil */}

      <div className="flex flex-col md:hidden">
        <div className="relative justify-center items-center left-36">
          <HorizontalCarousel />
        </div>
        <div className="flex flex-col items-start justify-center text-start mx-6 text-black">
          <h2 className="text-4xl font-bold mb-2 text-green">EMAIL </h2>
          <h2 className="text-5xl font-bold mb-4 custom-stroke-green">
            {" "}
            MARKETING
          </h2>
          <ul className="text-lg list-disc list-inside mb-6">
            <li>Diseño de piezas para redes, campañas y web.</li>
            <li>Desarrollo y actualización de identidad visual.</li>
            <li>Creación de material gráfico para eventos y promociones.</li>
            <li>
              Adaptación de diseños para múltiples formatos y plataformas.
            </li>
            <li>Asesoría creativa para potenciar tu imagen de marca.</li>
          </ul>
          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-green rounded-sm border border-black py-3 px-4 hover:bg-green/80 transition-colors ease-in-out">
              Empecemos {">"}
              {">"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
