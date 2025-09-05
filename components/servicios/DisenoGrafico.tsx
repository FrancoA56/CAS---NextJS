import Link from "next/link";
import VerticalCarousel from "./CarruselVertical"; // Ajustá ruta si es necesario
import { useIsIOS } from "../../hooks/useIsIOS";
export default function DisenoGrafico() {
  const isIOS = useIsIOS();

  if (isIOS === null) return null; // Esperar que se detecte
  return (
    <>
      <div className="hidden md:flex md:flex-row w-full px-8 py-12 items-center">
        {/* Texto */}
        <div className="flex flex-col items-start justify-center text-black text-start md:w-1/2 w-full md:ml-0 ml-8 mr-0 xl:ml-24 3xl:ml-8 3xl:mr-36">
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-2 text-yellow">
            DISEÑO
          </h2>
          <h2 className="text-6xl md:text-7xl 3xl:text-8xl font-bold mb-6  custom-stroke-yellow">
            GRÁFICO
          </h2>
          <ul className="text-lg 3xl:text-xl list-disc list-inside mb-6">
            <li>Diseño de piezas para redes, campañas y web.</li>
            <li>Desarrollo y actualización de identidad visual.</li>
            <li>Creación de material gráfico para eventos y promociones.</li>
            <li>
              Adaptación de diseños para múltiples formatos y plataformas.
            </li>
            <li>Asesoría creativa para potenciar tu imagen de marca.</li>
          </ul>

          <Link href="/contacto" replace className="flex flex-row">
            <button className="bg-yellow rounded-sm border border-black text-lg 3xl:text-xl py-3 px-4 hover:bg-yellow/80 transition-colors ease-in-out">
              Quiero un diseño {">"}
              {">"}
            </button>
          </Link>
        </div>

        {/* Carrusel */}
        <div className="md:w-1/2 w-full flex">
          <VerticalCarousel />
        </div>
      </div>

      {isIOS ? (
        <div className="flex flex-col md:hidden w-full items-center">
          {/* Texto */}
          <div className="flex flex-col items-start justify-center text-black text-start mt-12 mx-6">
            <h2 className="text-4xl font-bold mb-1 text-yellow">DISEÑO</h2>
            <h2 className="text-4xl font-bold mb-2 custom-stroke-yellow">
              GRÁFICO
            </h2>
            <ul className="list-disc list-inside mb-2">
              <li>Diseño de piezas para redes, campañas y web.</li>
              <li>Desarrollo y actualización de identidad visual.</li>
              <li>Creación de material gráfico para eventos y promociones.</li>
              <li>
                Adaptación de diseños para múltiples formatos y plataformas.
              </li>
              <li>Asesoría creativa para potenciar tu imagen de marca.</li>
            </ul>

            <Link href="/contacto" replace className="flex flex-row">
              <button className="bg-yellow rounded-sm border border-black py-2 px-4 hover:bg-yellow/80 transition-colors ease-in-out">
                Quiero un diseño {">"}
                {">"}
              </button>
            </Link>
          </div>

          {/* Carrusel */}
          <div className="w-full flex justify-center ">
            <VerticalCarousel />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:hidden w-full  py-12 items-center">
          {/* Texto */}
          <div className="flex flex-col items-start justify-center text-black text-start mx-6 mt-12">
            <h2 className="text-6xl font-bold mb-2 text-yellow">DISEÑO</h2>
            <h2 className="text-6xl font-bold mb-6 custom-stroke-yellow">
              GRÁFICO
            </h2>
            <ul className=" list-disc list-inside mb-6">
              <li>Diseño de piezas para redes, campañas y web.</li>
              <li>Desarrollo y actualización de identidad visual.</li>
              <li>Creación de material gráfico para eventos y promociones.</li>
              <li>
                Adaptación de diseños para múltiples formatos y plataformas.
              </li>
              <li>Asesoría creativa para potenciar tu imagen de marca.</li>
            </ul>

            <Link href="/contacto" replace className="flex flex-row">
              <button className="bg-yellow rounded-sm border border-black py-3 px-4 hover:bg-yellow/80 transition-colors ease-in-out">
                Quiero un diseño {">"}
                {">"}
              </button>
            </Link>
          </div>

          {/* Carrusel */}
          <div className="w-full flex justify-center ">
            <VerticalCarousel />
          </div>
        </div>
      )}
    </>
  );
}
