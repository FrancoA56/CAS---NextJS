import Link from "next/link";
import VerticalCarousel from "./CarruselVertical"; // Ajustá ruta si es necesario

export default function DisenoGrafico() {
  return (
    <>
      <div className="hidden md:flex md:flex-row w-full px-8 py-12 items-center">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-start md:w-1/2 w-full md:ml-0 ml-8 ">
          <h2 className="text-6xl md:text-7xl font-bold mb-2 text-yellow">
            DISEÑO
          </h2>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 custom-stroke-yellow">
            GRÁFICO
          </h2>
          <ul className="text-lg list-disc list-inside mb-6">
            <li>Diseño de piezas para redes, campañas y web</li>
            <li>Desarrollo y actualización de identidad visual</li>
            <li>Creación de material gráfico para eventos y promociones</li>
            <li>Adaptación de diseños para múltiples formatos y plataformas</li>
            <li>Asesoría creativa para potenciar tu imagen de marca</li>
          </ul>

          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-yellow rounded-sm border border-black py-3 px-4 hover:bg-yellow/80 transition-colors ease-in-out">
              Quiero un diseño {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Carrusel */}
        <div className="md:w-1/2 w-full flex justify-end">
          <VerticalCarousel />
        </div>
      </div>

      <div className="flex flex-col md:hidden w-full  py-12 items-center">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-start w-full ml-8 ">
          <h2 className="text-6xl font-bold mb-2 text-yellow">
            DISEÑO
          </h2>
          <h2 className="text-6xl font-bold mb-6 custom-stroke-yellow">
            GRÁFICO
          </h2>
          <ul className="text-lg list-disc list-inside mb-6">
            <li>Diseño de piezas para redes, campañas y web</li>
            <li>Desarrollo y actualización de identidad visual</li>
            <li>Creación de material gráfico para eventos y promociones</li>
            <li>Adaptación de diseños para múltiples formatos y plataformas</li>
            <li>Asesoría creativa para potenciar tu imagen de marca</li>
          </ul>

          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-yellow rounded-sm border border-black py-3 px-4 hover:bg-yellow/80 transition-colors ease-in-out">
              Quiero un diseño {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Carrusel */}
        <div className="w-full flex justify-end mr-12">
          <VerticalCarousel />
        </div>
      </div>
    </>
  );
}
